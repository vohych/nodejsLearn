const CourseRepository = require('./custom_modules/CourseRepository');
const express = require('express');
const cors = require('cors');
const app = express();
const {Router} = require("express");
const router = Router();

const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

router.post('');
router.post('/edit/:uid');
router.post('/api/create');

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
    strong_search = apiString + 'strong-search';

const apiList = {
    get_all,
    get_one,
    update_one,
    create_one,
    delete_one,
    strong_search: strong_search + '?type=strict|flex&value=text',
    aggregation,
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
    CourseRepository.getAll().then(() => {
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
    console.log(req.body)
    if (!req.body) return res.sendStatus(400);
    res.send(req.body);
    const name = req.body.name;
    const title = req.body.title;
    const price = req.body.price;
    CourseRepository.updateOneById(req.params.uid, name, title, price).then();
    return res.status(200);
})

app.post(create_one, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    res.send(req.body);
    CourseRepository.createOne(req.body.name, req.body.title, req.body.price).then();
    return res.status(200);
})

app.delete(delete_one, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    res.send(req.body);
    CourseRepository.deleteOneById(req.params.uid).then();
    return res.status(200);
})

app.get(strong_search, async (req, res) => {
    if (!req.query.type) {
        return res.sendStatus(400);
        // res.send(res.query.type);
    } else {
        console.log(req.query)
        if (req.query.type === 'Strict') {
            const result = CourseRepository.strongSearch(req.query.value).then();
            return res.status(200).json(await result);
        } else {
            const result = CourseRepository.flexSearch(req.query.value).then();
            return res.status(200).json(await result);
        }

    }
})

app.get(aggregation, async (req, res) => {
    const result = CourseRepository.aggregation();
    return res.status(200).json(await result);
})
