<<<<<<< HEAD
const route = require('express').Router();
const {Course} = require('../../db');

route.get('/', (req,res) => {
    Course.findAll().then((courses) => {
        res.status(200).send(courses);
    }).catch((err) => {
        res.status(500).send({
            error: "cannot retrieve courses"
        })
    })
})

route.delete('/', (req,res) => {
    Course.destroy({
        where: {},
        truncate: true
    }).then(() => {
        res.send('successfully deleted courses');
    }).catch(() => {
        res.send('cannot delete courses');
    })
})

route.post('/', (req,res) => {
    Course.create({
        name: req.body.name
    }).then((course) => {
        res.send(course);
    }).catch(() => {
        res.send({
            error: 'cannot add course'
        })
    })
})
=======
const route = require('express').Router();
const {Course} = require('../../db');

route.get('/', (req,res) => {
    Course.findAll().then((courses) => {
        res.status(200).send(courses);
    }).catch((err) => {
        res.status(500).send({
            error: "cannot retrieve courses"
        })
    })
})

route.delete('/', (req,res) => {
    Course.destroy({
        where: {},
        truncate: true
    }).then(() => {
        res.send('successfully deleted courses');
    }).catch(() => {
        res.send('cannot delete courses');
    })
})

route.post('/', (req,res) => {
    Course.create({
        name: req.body.name
    }).then((course) => {
        res.send(course);
    }).catch(() => {
        res.send({
            error: 'cannot add course'
        })
    })
})
>>>>>>> ef80c79c97ddc7c6d9b08ec7b18815bd866dc47b
module.exports = route;