import express from 'express';
import {
    DisplayAboutPage,
    DisplayContactPage,
    DisplayHomePage,
    DisplayProductPage,
    DisplayServicePage,
    ProcessContactPage
} from "../controller";

const router = express.Router();

/***************** TOP LEVEL ROUTES *******************/
router.get('/', DisplayHomePage);

router.get('/home', DisplayHomePage);

router.get('/about', DisplayAboutPage);

router.get('/products', DisplayProductPage);

router.get('/services', DisplayServicePage);

router.get('/contact', DisplayContactPage);

router.post('/contact', ProcessContactPage);

export default router;