const {Schema, model} = require('mongoose');
const mongoose = require("mongoose");

const client = new Schema({
    name: String,
    email: String,
    purchasedCurses:  [new Schema({
        _id: Object,
        name: String,
        title: String,
        price: Number,
    })]
})

module.exports = model('Client', client, 'clients');
