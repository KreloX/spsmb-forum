const Forum = require('../models/forums')
const date = new Date()

exports.getAll = async (req, res) => {
    try {
        const result = await Forum.find()
        if (result && result.length !== 0) {
            return res.status(200).send({
                msg: 'Forums found!',
                payload: result,
            })
        }
        res.status(404).send({ msg: 'Forums not found' })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.getById = async (req, res) => {
    try {
        const result = await Forum.findById(req.params.id)
        if (result) {
            return res.status(200).send({
                msg: 'Forum found',
                payload: result,
            })
        }
        res.status(404).send({ msg: 'Forum not found' })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.create = async (req, res) => {
    try {
        const data = new Forum({
            createdDate: date,
            header: req.body.header,
            text: req.body.text,
            user: req.body.user,
            isLocked: false,
        })
        const result = await data.save()
        if (result) {
            return res.status(201).send({
                msg: 'Forum was created',
                payload: result,
            })
        }
        res.status(500).send({
            msg: 'Forum was not created',
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.delete = async (req, res) => {
    try {
        const result = await Forum.findByIdAndDelete(req.params.id)
        if (result) {
            return res.status(200).send({
                msg: 'Forum deleted',
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
            createdDate: date,
            header: req.body.header,
            text: req.body.text,
            user: req.body.user,
            isLocked: false,
        }
        const result = await Forum.findByIdAndUpdate(req.params.id, data)
        if (result) {
            return res.status(200).send({
                msg: 'Forum updated',
                payload: result,
            })
        }
        res.status(500).send({
            msg: 'Forum was not updated',
        })
    } catch (error) {
        res.status(500).send(error)
    }
}
