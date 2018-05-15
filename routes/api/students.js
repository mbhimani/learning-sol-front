const route = require('express').Router()

const {Student} = require('../../db');

const {Batch_Student} = require('../../db');

route.get('/', (req,res) => {
    Student.findAll().then((responce) => {
        res.status(200).send(responce);
    }).catch((err) => {
        res.status(500).send({
            err: "cannot get students"
        })
    })
})

route.post('/', (req,res) => {
    Student.create({
        name: req.body.name
    }).then((student) => {
        res.send(student);
    }).catch((err) => {
        res.send({
            err: "cannot post student"
        })
    })
})

route.get('/:id', (req,res) => {
    Student.findOne({
        where: {
            id: req.params.id
        }
    }).then(student => {
        res.send(student)
    }).catch(err => {
        res.send({
            err: "cannot retrieve student"
        })
    })
})

route.delete('/', (req,res) => {
    Student.destroy({
        where: {},
        truncate: true
    }).then(() => {
        res.send('deleted successfully')
    })
})

route.post('/enroll', (req,res) => {
    Batch_Student.create({
        studentId: parseInt(req.params.studentId),
        batchId: parseInt(req.params.batchId)
    }).then(item => {
        res.send(item)
    }).catch(err => {
        res.send(err)
    })
})

route.get('/:id/batches', (req,res) => {
    Batch_Student.findAll({
        where: {
            studentId: parseInt(req.params.id)
        },
        include: {
            model: Batch
        }
    }).then(responce => {
        res.send(responce)
    }).catch(err => {
        res.send(err)
    })
})

module.exports = route