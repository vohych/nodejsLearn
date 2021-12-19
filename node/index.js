// const dirNameForModule = './custom_modules/';
// const pathModule = require( dirNameForModule + 'path_module');
// const mkDirModule = require( dirNameForModule + 'fs_ref');
// const osRef = require( dirNameForModule + 'os_ref');
// const eventsModule = require( dirNameForModule + 'eventsModule');

// const fs = require('fs');
// const path = require('path');
// const http = require('http');
//
// const server = http.createServer((req, res)=>{
//
//     if(req.method === 'GET'){
//         res.writeHead(200, {
//             'Content-Type': 'text/html'
//         })
//
//         if (req.url === '/'){
//             fs.readFile(
//                 path.join(__dirname, 'views', 'index.hbs'), 'utf-8', (err, content)=>{
//                     if (err){
//                         throw err
//                     }
//
//                     res.end(content)
//                 }
//             )
//         }
//
//     } else if (req.method === 'POST'){
//         const body = [];
//         console.log(body)
//         req.on('data', data =>{
//             body.push(Buffer.from(data));
//             console.log(data, 'data');
//         })
//
//         req.on('end', () =>{
//             console.log(body.toString());
//         })
//
//         fs.readFile(
//             path.join(__dirname, 'views', ''), 'utf-8', (err, content)=>{
//
//                 if (err){
//                     throw err
//                 }
//
//                 res.end(content);
//
//             }
//         )
//     }
//
// })


// server.listen(3000, ()=>{
// console.log('Server is run via port 3000')
// })

//
// const express = require('express');
// const path = require("path");
// const app = express();
//
//
// app.get('/' ,(req,res)=>{
//
//     res.status(200);
//     res.sendFile(path.join(__dirname, 'views', 'index.hbs'));
//
// })
//
// app.get('/about', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'views', ''))
// })
//
//
// const PORT = process.env.PORT || 3000;
//
// app.listen(PORT, ()=>{
//
//     console.log('--------->' + PORT);
//
// })
//
// const includeModeles = require('./modeles/course');
//
// const course = new includeModeles('dwef');
//
// course.save();
//
// const express = require('express');
// const path = require("path");
// const app = express();
// const fs = require('fs')
//
//
//
// const  getData = course.getData();
//
// app.get('/' ,(req,res)=>{
//
//     res.status(200);
//             if (req.url === '/') {
//                 fs.readFile(
//                     path.join(__dirname, 'views', 'index.hbs'), 'utf-8', async (err, content) => {
//                         if (err) {
//                             throw err
//                         }
//
//                         console.log(getData)
//
//
//                         res.end(JSON.stringify(await getData))
//                     }
//                 )
//             }
//     // res.redirect(req.get('/'));
// })
//
// const PORT = process.env.PORT || 3000;
//
// app.listen(PORT, ()=>{
//
//     console.log('--------->' + PORT);
//
// })

//user root
//pwd ukMmQvT7a7vk77V

// const hbs = exphbs.create({
//     defaultLayout: 'main',
//     extname: 'hbs',
// })
//
// app.engine('hbs', hbs.engine);
// app.set('view engine', 'hbs');
// app.set('views', 'views');
//
// app.use(express.urlencoded({extended: false}));
//
// app.get('/', (req, res) => {
//     res.render('index', {title: 'fwefwe'});
//     console.log(new Date('D-M-Y'))
// })
//
// app.post('/', (req, res) => {
//     const obj = JSON.parse(JSON.stringify(req.body));
//     CourseRepository.createOne(JSON.stringify(obj));
//     res.redirect('/courses')
// })
//
//
// app.get('/courses', async (req, res) => {
//     CourseRepository.getAll().then(list => {
//         res.render('courses', {
//             courses: list.map((item) => {
//                 return {
//                     _id: item._id,
//                     name: item.name,
//                     title: item.title,
//                     price: item.price
//                 }
//             }),
//
//         });
//     })
// })
//
// app.get('/edit', (req, res) => {
//     CourseRepository.getAll().then(list => {
//         res.render('edit', {
//             courses: list.map((item) => {
//                 return {
//                     _id: item._id,
//                     name: item.name,
//                     title: item.title,
//                     price: item.price
//                 }
//             }),
//
//         });
//     })
// })
// console.log('adasd')
// app.get('/api/get-all', (res, req) => {
//     CourseRepository.getAll().then(list => {
//         return list;
//     })
// })

// CourseRepository.getAll().then(data => {
//
// })


const CourseRepository = require('./custom_modules/CourseRepository');
const express = require('express');
const cors = require('cors');
const app = express();
// const createServer = express.createServer();
const {Router, request} = require("express");
// const {get} = require("mongoose");
const router = Router();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

router.post('/edit/:uid');
router.post('');

const PORT = process.env.PORT || 8080;


app.use(cors());
app.listen(PORT, () => {
    console.log('--------->' + PORT);
})

const apiString = '/api/';
const get_all = apiString + 'get-all',
    get_one = apiString + 'get-one',
    update_one = apiString + 'edit/:uid',
    delete_one = apiString + 'delete/:uid',
    create_one = apiString + 'create'

const apiList = {
    get_all,
    get_one,
    update_one,
    create_one,
    delete_one,
}

app.get('/', (req, res) => {
    res.send(apiList)
})
app.get(get_all, (req, res) => {
    CourseRepository.getAll().then(data => {
        res.send(data);
    })
})
app.get(get_one, (req, res) => {
    CourseRepository.getAll().then(data => {
        res.send({get_one: get_one + ':uid'});
    })
})

app.get(get_one + '/:uid', (req, res) => {
    CourseRepository.getOneById(req.params.uid).then(data => {
        console.log(data);
        res.send(data);
    })
})

app.post(update_one, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    res.send(req.body);
    const name = req.body.name;
    const title = req.body.title;
    const price = req.body.price;
    CourseRepository.updateOneById(req.params.uid, name, title, price).then();
    return res.status(200);
})

app.post(create_one, (req, res, body) => {
    if (!req.body) return res.sendStatus(400);
    res.send(req.body);
    CourseRepository.createOne(req.body.name, req.body.title, req.body.price).then();
    return res.status(200);
})


app.post(create_one, (req, res, body) => {
    if (!req.body) return res.sendStatus(400);
    res.send(req.body);
    CourseRepository.deleteOneById(req.body.name).then();
    return res.status(200);
})

app.delete(delete_one, (req, res)=>{
    if (!req.body) return res.sendStatus(400);
    res.send(req.body);
    CourseRepository.deleteOneById(req.params.uid).then();
    return res.status(200);
})

