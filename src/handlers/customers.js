import mongoose from "mongoose"

const customerSchema = new mongoose.Schema({
    name: String,
    age: Number
})
const Customer = mongoose.model('customer', customerSchema);

const getCustomer = (req, res) => {
    if (!err) {
        res.sendStatus(200);
        console.log('Successfully Get Customers');
    } else {
        (err);
    }
}

const postCustomer = (req, res) => {
    const newCustomer = new Customer({
        name: req.body.name,
        age: req.body.age
    });

    newCustomer.save((err) => {
        if (!err) {
            res.sendStatus(200)
            console.log('Successfully Update Customers');
        } else {
            (err);
        }
    });
}

export default {
    getCustomer,
    postCustomer
}