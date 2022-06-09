import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'CHECK NAME']
    },
    price: {
        type: Number,
        required: [true, 'CHECK PRICE']
    },
});
const Product = mongoose.model('Product', productSchema);

const getProduct = (req, res) => {
    Product.find((err, foundProducts) => {
        if (!err) {
            res.send(foundProducts);
            console.log('Success Get Products');
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
            res.send(newProduct);
            console.log('Success Post Products')
        } else {
            res.send(err);
        }
    })
}

const putProduct = (req, res) => {
    Product.replaceOne({
            name: req.params.nameProducts
        }, {
            name: req.body.name,
            price: req.body.price
        },
        (err) => {
            if (!err) {
                res.send({
                    name: req.body.name,
                    price: req.body.price
                })
                console.log('Success Update Products')
            } else {
                res.send(err);
            }
        }
    )
}

const deleteProduct = (req, res) => {
    Product.deleteOne({
        name: req.params.nameProducts
    }, (err) => {
        if (!err) {
            res.sendStatus(200);
            console.log('Success Delete Products')
        } else {
            res.send(err);
        }
    })
}

export default {
    getProduct,
    postProduct,
    putProduct,
    deleteProduct
}