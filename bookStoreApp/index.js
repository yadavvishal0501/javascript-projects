//import express
const express = require('express');
// Creates an Express application. The express() function is a top-level function exported by the express module.
const app = express()
const path = require('path');
const Book = require('./model/product')
const mongoose = require('mongoose');
const methodOverride = require('method-override');

mongoose.connect('mongodb://127.0.0.1:27017/digitalShop').then(e => console.log('connected')).catch(e => console.log('oH No eRRor', e));

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method')); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const categories = ['history', 'science-finction', 'self-help', 'biography', 'finance'];

app.get('/products', async function (req, res) {
    const { category } = req.query;
    if (category) {
        const book = await Book.find({ category })
        res.render('index', { book, category })
    } else {
        const book = await Book.find({})
        res.render('index', { book ,category:'ALL'});
    }
})
// create new book
app.get('/products/new',(req, res)=>{
    res.render('new',{categories});
})

//the details submitted by post the data is in response body which will be redirected to all products

app.post('/products', async (req, res) => {
    const newBook = new Book(req.body);
    await newBook.save();
    console.log(newBook);
    res.redirect(`/products/${newBook._id}`);
})
//show details

app.get('/products/:id', async (req, res) => {
    const {id} = req.params;
    const Product = await Book.findById(id);

    res.render('show', { Product }); 
})

//edit book details

app.get('/products/:id/edit', async(req, res) => {
    const { id } = req.params;
    const Product = await Book.findById(id);
    res.render('edit', { Product ,categories}); 
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const Product = await Book.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${Product._id}`)
    
})

// deleteing book

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    await Book.findByIdAndDelete(id, req.body);
    res.redirect(`/products`);
})





app.listen('3000', (req, res) => {
    console.log('listening on port 8000');
})
