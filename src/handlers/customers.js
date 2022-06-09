import mongoose from "mongoose"

const customerSchema = new mongoose.Schema({
    _id: String,
    name: String,
    age: Number
})
const Customer = mongoose.model('Customer', customerSchema);

const getCustomer = (req, res) => {
    Customer.find((err, foundCusomers) => {
        if (!err) {
            res.send(foundCusomers);
            console.log('Success Get Customers');
        } else {
            res.send(err);
        }
    });
}

const postCustomer = (req, res) => {
    const newCustomer = new Customer({
        _id: req.body.id,
        name: req.body.name,
        age: req.body.age
    });

    newCustomer.save((err) => {
        if (!err) {
            res.send(newCustomer)
            console.log('Success Post Customers');
        } else {
            res.send(err);
        }
    });
}

const putCustomer = (req, res) => {
    Customer.replaceOne({
        _id: req.params.idCustomers
    }, {
        name: req.body.name,
        age: req.body.age
    }, (err) => {
        if (!err) {
            res.sendStatus(200)
            console.log('Success Update Customers');
        } else {
            res.send(err);
            console.log(err);
        }
    })
}

const deleteCustomer = (req, res) => {
    Customer.deleteOne({
        _id: req.params.idCustomers
    }, (err) => {
        if (!err) {
            res.sendStatus(200)
            console.log('Success Delete Customers');
        } else {
            res.send(err);
        }
    });
}

export default {
    getCustomer,
    postCustomer,
    putCustomer,
    deleteCustomer
}