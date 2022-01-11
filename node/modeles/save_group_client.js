const {Schema, model} = require('mongoose');
const mongoose = require("mongoose");

const saveGroupClient = new Schema(
    {
        name: String,
        email: String,
        totalCourse: Number,
        profit: Number,
        lastModifiedDate: { type: Date, expires: 300 },
    },
);

module.exports = model('ClientsStatisticCache', saveGroupClient, 'clients_statistic_cache');
