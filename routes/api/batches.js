<<<<<<< HEAD
const route = require('express').Router();

const {Batch} = require('../../db');

route.get('/', (req,res) => {
    Batch.findAll().then(batches => {
        res.status(200).send(batches);
    }).catch((err) => {
        res.status(500).send({
            error: 'cannot retrieve batches',
            msg: err
        })
    })
})

route.post('/', (req,res) => {
    Batch.create({
        name: req.body.name,
        year: parseInt(req.body.year),
        courseId: parseInt(req.body.courseId)
    }).then(() => {
        res.send("batch added successfully");
    }).catch(() => {
        res.send("could not add batch");
    });
});

route.delete('/', (req,res) => {
    Batch.destroy({
        where:{},
        truncate: true
    }).then(() => {
        res.send('bathces deleted successfully');
    }).catch(() => {
        res.send('cannot delete batches');
    });
});

=======
const route = require('express').Router();

const {Batch} = require('../../db');

route.get('/', (req,res) => {
    Batch.findAll().then(batches => {
        res.status(200).send(batches);
    }).catch((err) => {
        res.status(500).send({
            error: 'cannot retrieve batches',
            msg: err
        })
    })
})

route.post('/', (req,res) => {
    Batch.create({
        name: req.body.name,
        year: parseInt(req.body.year),
        courseId: parseInt(req.body.courseId)
    }).then(() => {
        res.send("batch added successfully");
    }).catch(() => {
        res.send("could not add batch");
    });
});

route.delete('/', (req,res) => {
    Batch.destroy({
        where:{},
        truncate: true
    }).then(() => {
        res.send('bathces deleted successfully');
    }).catch(() => {
        res.send('cannot delete batches');
    });
});

>>>>>>> ef80c79c97ddc7c6d9b08ec7b18815bd866dc47b
module.exports = route;