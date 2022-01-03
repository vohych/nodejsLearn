const mongoose = require("mongoose");
const Course = require('../modeles/course');
const Client = require('../modeles/client');

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
//        console.log(aggregation)
        return aggregation;
    }

    static async buyCourse(data) {

        await this.connect();
        const findCourse = await Course.findById(data._id).clone();
        const findClient = await Client.findOne({email: data.email}).clone();
        const isEmptyClient = await Client.find().clone();

        if (findCourse && isEmptyClient) {
            if (findClient) {
                await Client.findById({_id: findClient._id}).updateOne({buysCourse: findCourse})

                console.log(await Client.find())
            } else {
                await Client.create({name: data.name, email: data.email})
                console.log('Client created')
            }
//            return findCourse;
        } else {
            return {error: 'Course not found'};
        }

    }

}

module.exports = CourseRepository;
