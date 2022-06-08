import {
    Router
} from "express";
import productHandler from '../handlers/products.js'

const router = Router();

router.route('/products')
    .get(productHandler.getProduct)
    .post(productHandler.postProduct)

export default router;