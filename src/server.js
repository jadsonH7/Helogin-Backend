import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { router } from './router/router.js';

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cors({
    origin: "https://helogin.vercel.app/"
}));

app.use('/api', router);

app.listen(port, () => console.log(`Run server: http://localhost:${port}/api`));
