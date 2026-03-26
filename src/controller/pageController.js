export const pagesController = {
    test: (req, res) => {
        const userEmails = users.map(u => u.email);
        return res.status(200).json({ message: 'API funcionando!', users: userEmails });
    },

    home: (req, res) => {
        return res.status(200).json({ message: 'Home page', user: req.user });
    },
};