import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express

app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect('mongodb://localhost:27017/shoppingDB', {
    useNewUrlParser: true
});

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    stock: Number
});
const Product = mongoose.model('Product', productSchema);

const product1 = new Product({
    name: "iPhone X",
    price: 10000000,
    stock: 1
});
// product1.save()

db.products.insertOne({
    name: "iPhone X",
    price: 10000000,
    stock: 1
})