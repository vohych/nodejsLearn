const {Schema, model} = require('mongoose');
const mongoose = require("mongoose");

const courseSchema = [
    new Schema(
        {
            _id: Object,
            name: String,
            title: String,
            price: Number,
        }
    )
]

const user = new Schema({
    first_name: String,
    last_name: String,
    patronymic: String,
    password: String,
    email: String,
    purchased_curses: courseSchema,
    basket: courseSchema,
    birthday: Date,
    token: String,
})

module.exports = model('User', user, 'users');
