const Comment = require('../models/comments')

exports.getAll = async (req, res) => {
    try {
        const result = await Comment.find()
        if (result && result.length !== 0) {
            return res.status(200).send({
                msg: 'Comments found!',
                payload: result,
            })
        }
        res.status(404).send({ msg: 'Comments not found' })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.getById = async (req, res) => {
    try {
        const result = await Comment.findById(req.params.id)
        if (result) {
            return res.status(200).send({
                msg: 'Comment found',
                payload: result,
            })
        }
        res.status(404).send({ msg: 'Comment not found' })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.getByThreadId = async (req, res) => {
    try {
        const result = await Comment.find({ threadId: req.params.threadId })

        if (result) {
            return res.status(200).send({
                msg: 'Comments found!',
                payload: result,
            })
        }
        res.status(404).send({ msg: 'Comments not found' })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.create = async (req, res) => {
    try {
        const data = new Comment({
            text: req.body.text,
            author: req.body.author,
            date: new Date(),
            threadId: req.body.threadId,
        })
        const result = await data.save()
        if (result) {
            return res.status(201).send({
                msg: 'Comment was created',
                payload: result,
            })
        }
        res.status(500).send({
            msg: 'Comment was not created',
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.delete = async (req, res) => {
    try {
        const result = await Comment.findByIdAndDelete(req.params.id)
        if (result) {
            return res.status(200).send({
                msg: 'Comment deleted',
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
            text: req.body.text,
        }
        const result = await Comment.findByIdAndUpdate(req.params.id, data)
        if (result) {
            return res.status(200).send({
                msg: 'Comment updated',
                payload: result,
            })
        }
        res.status(500).send({
            msg: 'Comment was not updated',
        })
    } catch (error) {
        res.status(500).send(error)
    }
}
