// modules
const uuid = require('uuid');
const fs = require("fs");
const path = require("path");
const e = require("express");

// link
const dataLink = '../data/db.json';

class Course {

    constructor(title) {
        this.title = title;
        this.id = uuid.v4();
    }

    toJSON() {
        return {
            title: this.title,
            id: this.id,
        }
    }

    async save() {

        const course = await Course.getAll();

        course.push(this.toJSON());

        // return new Promise((resolve, reject) => {
        //     fs.writeFile(path.join(__dirname, dataLink),
        //         JSON.stringify(course),
        //         (err => {
        //         if (err) {
        //             reject(err)
        //         } else {
        //             resolve();
        //         }
        //     }))
        // })

    }

    static getAll() {
        return new Promise((resolve, reject) => {
                fs.readFile(
                    path.join(__dirname, dataLink), 'utf-8', (err, content) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(JSON.parse(content));
                        }
                    }
                )
            }
        )

    }

   async getData() {
        let readData = await Course.getAll();
        // return JSON.stringify(readData);
        return readData;
    }
}

module.exports = Course;