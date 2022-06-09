import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/shoppingDB', {
    useNewUrlParser: true
});

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
});
const Product = mongoose.model('Product', productSchema);

const product1 = new Product({
    name: "iPhone X",
    price: 10000000,
});
const product2 = new Product({
    name: "iPhone XS",
    price: 12000000,
});

function saveProducts() {
    product1.save();
    product2.save();
}

function insertProducts() {
    Product.insertMany([product1, product2], (err) => {
        if (!err) {
            console.log('Success Input');
        } else {
            (err);
        }
    })

}

function findProducts() {
    Product.find((err, products) => {
        if (!err) {
            products.forEach((product) => {
                console.log(product.name)
            });
        } else {
            console.log(err);
        }
    });
}

function findProduct() {

    Product.updateOne({
        name: 'iPhone XS'
    }, {
        price: 10000
    }, (err) => {
        if (!err) {
            console.log("Success Update")
        } else {
            console.log(err);
        }
    });
}

function deleteProduct() {

    Product.deleteOne({
        name: "iPhone X"
    }, (err) => {
        if (!err) {
            console.log("Success delete");
        } else {
            console.log(err);
        }
    });
}

function deleteProducts() {
    Product.deleteMany({
        price: 10000
    }, (err) => {
        if (!err) {
            console.log("Success delete");
        } else {
            console.log(err);
        }
    });

}
