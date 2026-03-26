import { Router } from "express";
import { apiAuth } from "../middleware/apiAuth.js";
import { apiController } from "../controller/apiController.js";
import { pagesController } from "../controller/pageController.js";

export const router = Router();

router.get('/home', apiAuth, pagesController.home);
router.get('/test', pagesController.test);

router.post('/register', apiController.register);
router.post('/login', apiController.login);

