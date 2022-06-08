import {
    Router
} from "express";
import customerHandler from "../handlers/customers.js";

const router = Router();

router.route('/cutomers')
    .get(customerHandler.getCustomer)
    .post(customerHandler.postCustomer)

export default router;