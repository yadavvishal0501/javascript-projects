//model directory  for defining a model schema 
const mongoose = require('mongoose');

//defining a schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    author: {
        type: String,
        required:true
    },
    category: {
        type: String,
        enum:['history','science-finction','self-help','biography','finance']
    },
    description: {
        type: String,
        min: [3, 'minimum 3 words to describe'],
        max:[20,'no more space']
    }
})

const Book =  mongoose.model('Book', productSchema);


//export these model on instance of scchema so we can use it any where else.

module.exports = Book;