import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    stock: Number
});
const Product = mongoose.model('Product', productSchema);

const getProduct = (req, res) => {
    Product.find((err, foundProducts) => {
        if (!err) {
            res.send(foundProducts);
            console.log(foundProducts);
        } else {
            res.send(err);
        }
    })
}

const postProduct = (req, res) => {
    const newProduct = new Product({
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock
    });

    newProduct.save((err) => {
        if (!err) {
            res.sendStatus(200);
            console.log('Successfully Update')
        } else {
            res.send(err);
        }
    })
}

export default {
    getProduct,
    postProduct
}