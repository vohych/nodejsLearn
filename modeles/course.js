const uuid = require('uuid');
const fs = require("fs");
const path = require("path");

class Course {
    constructor(title, price, img) {
        this.title = title;
        this.price = price;
        this.img = img;
        this.id = uuid.v4();
    }

    async save() {
        const course = await Course.getAll();
        console.log(course, 'fewfwe')


    }

    static getAll() {
        return new Promise((resolve, reject) => {
                fs.readFile(
                    path.join(__dirname, '..', 'data', 'db.json'), 'utf-8', (err, content) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(JSON.parse(content));
                        }
                    }
                )
            }
        )

    }
}

module.exports = Course;