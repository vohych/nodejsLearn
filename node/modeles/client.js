const {Schema, model} = require('mongoose');

const client = new Schema({
    name: String,
    email: String,
    buysCourse:  {
        name: String,
        title: String,
        price: Number,
    }
})

module.exports = model('Client', client, 'clients');
