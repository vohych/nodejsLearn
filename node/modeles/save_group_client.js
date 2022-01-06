const {Schema, model} = require('mongoose');
const mongoose = require("mongoose");

const saveGroupClient = new Schema({
    name: String,
    email: String,
    totalCourse: String,
    profit: String,
})

module.exports = model('ClientsStatisticCache', saveGroupClient, 'clients_statistic_cache');
