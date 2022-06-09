import {
    Router
} from "express";
import customerHandler from "../handlers/customers.js";

const router = Router();

router.route('/customers')
    .get(customerHandler.getCustomer)
    .post(customerHandler.postCustomer)
router.route('/customers/:idCustomers')
    .get(customerHandler.putCustomer)
    .delete(customerHandler.deleteCustomer)

export default router;