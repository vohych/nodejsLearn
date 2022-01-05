const mongoose = require("mongoose");
const Course = require('../modeles/course');
const Client = require('../modeles/client');
const {Schema, model} = require('mongoose');

class CourseRepository {

    async createOne(name, title, price) {

        await Course.create({name, title, price});
    }

    async getAll() {

        return Course.find();
    }

    async getOneById(id) {

        return Course.findById(id);
    }

    async updateOneById(id, name, title, price) {

        await Course.findOne({_id: id}).updateOne({name, title, price}).clone();
    }

    async deleteOneById(id) {

        await Course.findOne({_id: id}).deleteOne().clone();
    }

    async strongSearch(data) {

        const result = await Course.find({$or: [{name: data}, {title: data}]});
        return result;
    }

    async flexSearch(data) {
        const searchRegx = new RegExp(data)

        const result = await Course.find({$or: [{name: {$regex: searchRegx}}, {title: {$regex: searchRegx}}]});
        return result;
    }

    async aggregation() {
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
        return aggregation;
    }

    async buyCourse(data) {
        try {
            const findCourse = await Course.findById({_id: data._id});
            const findClient = await Client.findOne({email: data.email});

            if (findCourse) {
                if (findClient) {
                    const id = findClient._id;
                    const courseExist = findClient.purchasedCurses.some((course) => {
                        return course._id.toString() === findCourse._id.toString()
                    });
                    !courseExist && await Client.updateOne({
                            _id: id
                        },
                        {$push: {purchasedCurses: findCourse}}
                    ).exec()
                    return {response: {client: 'exist', course: 'added'}, status: {code: 200}};
                } else {
                    await Client.create({name: data.name, email: data.email});
                    const findClient = await Client.findOne({email: data.email});
                    const id = findClient._id;
                    await Client.updateOne(
                        {_id: id},
                        {$push: {purchasedCurses: findCourse}}
                    )
                    return {response: {client: 'created', course: 'added'}, status: {code: 200}};

                }
            } else {
                return {response: {error: 'course not found', status: {code: 404}}};
            }
        } catch (e) {
            return {response: {error: e, type: 'catch'}}
        }
    }

}

module.exports = CourseRepository;
