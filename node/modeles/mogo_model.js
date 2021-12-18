const {Schema, model} = require('mongoose');


const course = new Schema({
    name: String,
    title: String,
    price: Number,
})

module.exports = model('Course', course, 'courses');
