import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const users = [];

export const apiController = {
    register: async (req, res) => {
        let { email, password } = req.body;

        try {
            if (!email || !password) {
                return res.status(400).json({ message: 'Dados inválidos' });
            }

            email = email.toLowerCase();

            const userExists = users.find(u => u.email === email);
            if (userExists) {
                return res.status(400).json({ message: 'Email já registrado' });
            }

            const hashPassword = await bcrypt.hash(password, 10);

            const newUser = {
                id: Date.now(),
                email,
                password: hashPassword
            };

            users.push(newUser);

            return res.status(201).json({
                id: newUser.id,
                email: newUser.email
            });

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    login: async (req, res) => {
        let { email, password } = req.body;

        try {
            email = email.toLowerCase();

            const user = users.find(u => u.email === email);

            if (!user) {
                return res.status(400).json({ message: 'Usuário não encontrado' });
            }

            const valid = await bcrypt.compare(password, user.password);

            if (!valid) {
                return res.status(401).json({ message: 'Senha inválida' });
            }

            const token = jwt.sign(
                { sub: user.id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );

            return res.status(200).json({ token });

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
};