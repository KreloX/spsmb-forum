const Thread = require('../models/threads')

exports.getAll = async (req, res) => {
    try {
        const result = await Thread.find()
        if (result && result.length !== 0) {
            return res.status(200).send({
                msg: 'Threads found!',
                payload: result,
            })
        }
        res.status(404).send({ msg: 'Threads not found' })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.count = async (req, res) => {
    try {
        Thread.countDocuments().then((count) => {
            res.status(200).send({ msg: 'Count of threads', payload: count })
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.getInRange = async (req, res) => {
    try {
        const start = parseInt(req.params.start)
        const amount = parseInt(req.params.amount)
        Thread.find()
            .sort({ createdDate: -1 })
            .skip(start)
            .limit(amount)
            .then((result) => {
                res.status(200).send({ msg: 'Threads found!', payload: result })
            })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.getByAuthor = async (req, res) => {
    try {
        const result = await Thread.find({ author: req.params.author })
        if (result) {
            return res.status(200).send({
                msg: 'Threads found',
                payload: result,
            })
        }
        res.status(404).send({ msg: 'Threads not found' })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.getById = async (req, res) => {
    try {
        const result = await Thread.findById(req.params.id)
        if (result) {
            return res.status(200).send({
                msg: 'Threads found',
                payload: result,
            })
        }
        res.status(404).send({ msg: 'Threads not found' })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.create = async (req, res) => {
    try {
        const data = new Thread({
            createdDate: new Date(),
            title: req.body.title,
            text: req.body.text,
            author: req.body.author,
            locked: false,
        })
        const result = await data.save()
        if (result) {
            return res.status(201).send({
                msg: 'Thread was created',
                payload: result,
            })
        }
        res.status(500).send({
            msg: 'Thread was not created',
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.delete = async (req, res) => {
    try {
        const result = await Thread.findByIdAndDelete(req.params.id)
        if (result) {
            return res.status(200).send({
                msg: 'Thread deleted',
            })
        }
        res.status(500).send({ msg: 'Something went wrong' })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.update = async (req, res) => {
    try {
        const data = {
            title: req.body.title,
            text: req.body.text,
        }
        const result = await Thread.findByIdAndUpdate(req.params.id, data)
        if (result) {
            return res.status(200).send({
                msg: 'Thread updated',
                payload: result,
            })
        }
        res.status(500).send({
            msg: 'Thread was not updated',
        })
    } catch (error) {
        res.status(500).send(error)
    }
}
