const mongoose = require('mongoose');

const Book = require('./model/product');
mongoose.connect('mongodb://127.0.0.1:27017/digitalShop').then(e => console.log('connected')).catch(e => console.log('oH No eRRor', e));



// const book1 = new Book({
//     name: "rich dad and poor dad",
//     price: 200,
//     author: 'xyz',
//     category: 'finance',
//     description:'a great book to learn how to manage your finance'
// })


// book1.save().then(r => console.log(r)).catch(e => console.log(e));
const seed = [
    {
        name: "madame bovary",
        price: 180,
        author: "gustave flaubert",
        category: "biography",
        description: "For daring to peer into the heart of an adulteress and enumerate its contents with profound dispassion, the author of Madame Bovary"
    },
    {
        name: 'Anna Karenina',
        price: 356,
        author: "leo tolstoy",
        category: "biography",
        description:"Anna Karenina tells of the doomed love affair between the sensuous and rebellious Anna and the dashing officer, Count Vronsky. "
    },
    {
        name: "war and peace",
        price: 900,
        author: 'leo tostloy',
        category: "history",
        description:"Epic in scale, War and Peace delineates in graphic detail events leading up to Napoleon's invasion of Russia"
    },
    {
        name: 'star wars',
        price: 200,
        author: 'vladimir Nabokov',
        category: 'science-finction',
        description:'every detail about science and friction'
    }
]


Book.insertMany(seed);