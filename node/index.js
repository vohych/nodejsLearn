const CourseRepository = require('./custom_modules/CourseRepository');
const Course = new CourseRepository();
const express = require('express');
const cors = require('cors');
const app = express();
const {Router} = require("express");
const router = Router();
const uuid = require('uuid');

const bodyParser = require('body-parser');
const mongoose = require("mongoose");

app.use(bodyParser.json());

router.post('');
router.post('/edit/:uid');
router.post('/api/create');
router.post('/api/login-user');

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
    create_one = apiString + 'create',
    aggregation = apiString + 'aggregation',
    strong_search = apiString + 'clients',
    allClients = apiString + 'strong-search',
    userAuth = apiString + 'login-user',
    buyCourse = apiString + ':uid/buy',
    create_user = apiString + 'create-user';

const apiList = {
    get_all,
    get_one,
    update_one,
    create_one,
    delete_one,
    strong_search: strong_search + '?type=strict|flex&value=text',
    aggregation,
    buyCourse,
    allClients,
    create_user,
    userAuth,
}

try{
    mongoose.connect('mongodb://root:root_password@mongo_db:27017').then();
}catch (e) {
    console.log(e)
}


const auth = require("./middleware/login-user");
const routers = express.Router();

app.use(auth);

app.get('/', (req, res) => {
    res.send(apiList)
})

app.get(get_all, (req, res) => {
    Course.getAll().then(data => {
        res.send(data);
    })
})

app.get(get_one, (req, res) => {
    Course.getAll().then(() => {
        res.send({get_one: get_one + ':uid'});
    })
})

app.get(get_one + '/:uid', (req, res) => {
    Course.getOneById(req.params.uid).then(data => {
        res.send(data);
    })
})

app.post(update_one, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    res.send(req.body);
    const name = req.body.name;
    const title = req.body.title;
    const price = req.body.price;
    Course.updateOneById(req.params.uid, name, title, price).then();
    return res.status(200);
})

app.post(create_one, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    res.send(req.body);
    Course.createOne(req.body.name, req.body.title, req.body.price).then();
    return res.status(200);
})

app.delete(delete_one, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    res.send(req.body);
    Course.deleteOneById(req.params.uid).then();
    return res.status(200);
})

app.get(strong_search, async (req, res) => {
    if (!req.query.type) {
        return res.sendStatus(400);
    } else {
        if (req.query.type === 'strict') {
            const result = Course.strongSearch(req.query.value).then();
            return res.status(200).json(await result);
        } else {
            const result = Course.flexSearch(req.query.value).then();
            return res.status(200).json(await result);
        }
    }
})

app.get(aggregation, async (req, res) => {
    if (!req) {
        return res.send(res.sendStatus(400))
    }
    const result = Course.aggregation();
    return res.status(200).json(await result);
})

app.post(buyCourse, async (req, res) => {
    if (!req) {
        return res.send(res.sendStatus(400))
    }

    const data = {
        _id: req.params.uid,
        name: req.body.name,
        email: req.body.email,
    }
    const result = await Course.buyCourse(data).then();
    return res.status(200).json({result});
})

app.get(allClients, async (req, res) => {
    if (!req) {
        return res.send(res.sendStatus(400))
    }
    const result = await Course.getClients();
//    console.log(result.length)
    return res.status(200).json(result);
})

app.post(create_user, async (req, res) => {
    if (!req) {
        return res.send(res.sendStatus(400))
    }
    const body = {
        first_name: req.body.name,
        last_name: '',
        patronymic: '',
        password: req.body.password,
        email: req.body.email,
        birthday: ''
    }
    await Course.createUser(body);
    return res.status(200);

})

app.post(userAuth, async (req,res)=>{
    if (!req) {
        return res.send(res.sendStatus(400))
    }
    const data = {
        email: req.body.email,
        password: req.body.password
    }
    const result = await Course.loginUser(data);
    let clientResult;

    if (result){
//        console.log(result);
        clientResult = {user: result ,status: {code: 200}}
    }else {
        clientResult = {user: null, status: {code: 404}}
    }
    return res.status(200).json(clientResult)
})

