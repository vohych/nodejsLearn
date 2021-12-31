const {Schema, model} = require('mongoose');


const course = new Schema({
    name: String,
    title: String,
    price: Number,
})

const client = new Schema({
    name: String,
    email: String,
})

module.exports = model('Course', course, 'courses');
module.exports = model('Client', client, 'client');
