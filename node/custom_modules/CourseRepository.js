const Course = require('../modeles/mogo_model')
const mongoose = require("mongoose");

class CourseRepository {
    static connected = false;

    static constructor() {
        this.connect().then();
    }

    static async connect() {
        if (this.connected) return;

        try {
            await mongoose.connect('mongodb://root:root_password@mongo_db:27017');
            this.connected = true;
        } catch (e) {
            console.error('MongoDB Connection Error:', e);
        }
    }

    static async createOne(name, title, price) {
        // console.log(name, title, price)
        await this.connect();
        await Course.create({name, title, price});
    }

    static async getAll() {
        await this.connect();
        return Course.find();
    }

    static async getOneById(id) {
        await this.connect();
        return Course.findById(id);
    }

    static async updateOneById(id, name, title, price) {
        await this.connect();
        await Course.findOne({_id: id}).updateOne({name, title, price});
    }

    static async deleteOneById(id) {
        await this.connect();
        await Course.findOne({_id: id}).deleteOne();
    }

    static async strongSearch(data) {
        await this.connect();
        const search = await Course.find({$or: [{name: data}, {title: data}]}).clone()
        return search;
    }

    static async flexSearch(data) {
        const searchRegx = new RegExp(data)
        await this.connect();
        const search = await Course.find({$or: [{name: {$regex: searchRegx}}, {title: {$regex: searchRegx}}]}).clone()
        return search;
    }

    static async aggregation(data) {
        await this.connect();
        const aggregation = await Course
            .aggregate(
                [
                    {
                        $group: {
                            _id: "$price",
                            count: {$count: {}},
                            courses: {$push: {_id: '$_id', name: '$name'}}
                        }
                    },
                    {
                        $project: {
                            _id: 0,
                            price: "$_id",
                            count: 1,
                            courses: 1
                        }
                    }
                ]
            );
        console.log(aggregation)
        return aggregation;
    }
}

module.exports = CourseRepository;
