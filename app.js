import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import productRouter from './src/routes/products.js'
import customerRouter from './src/routes/customers.js';

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(productRouter);
app.use(customerRouter);

mongoose.connect('mongodb://127.0.0.1:27017/shoppingDB', {
    useNewUrlParser: true
});

app.get('/', (req, res) => {
    res.send("HOME");
})

app.listen(port, () => {
    console.log(`Server is Running in Port: ${port}`)
})