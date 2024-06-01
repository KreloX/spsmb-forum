const User = require('../models/users')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const crypto = require('crypto')
const Agenda = require('agenda')
const { emailPassword, mongoAddress } = require('../secret')

const agenda = new Agenda({ db: { address: mongoAddress } })
agenda.define('void password token', async (job) => {
    const { username } = job.attrs.data
    await User.findOneAndUpdate({ username: username }, { passwordToken: null })
})
;(async function () {
    await agenda.start()
})()

const transporter = nodemailer.createTransport({
    host: 'smtp.seznam.cz',
    port: 587,
    auth: {
        user: 'spsmb.forum@seznam.cz',
        pass: emailPassword,
    },
})

exports.getAll = async (req, res) => {
    try {
        const result = await User.find()
            .select('-password')
            .select('-passwordToken')
        if (result && result.length !== 0) {
            return res.status(200).send({
                msg: 'Users found!',
                payload: result,
            })
        }
        res.status(404).send({ msg: 'Users not found' })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.getByUsername = async (req, res) => {
    try {
        const result = await User.findOne({ username: req.params.username })
            .select('-password')
            .select('-passwordToken')
        if (result) {
            return res.status(200).send({
                msg: 'User found',
                payload: result,
            })
        }
        res.status(404).send({ msg: 'User not found' })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.delete = async (req, res) => {
    try {
        const result = await User.findByIdAndDelete(req.params.id)
        if (result) {
            return res.status(200).send({
                msg: 'User deleted',
            })
        }
        res.status(500).send({ msg: 'Something went wrong' })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.update = async (req, res) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 10)

        const data = {
            username: req.body.username,
            email: req.body.email,
            password: hash,
        }
        const result = await User.findByIdAndUpdate(req.params.id, data)
        if (result) {
            return res.status(200).send({
                msg: 'User updated',
                payload: result,
            })
        }
        res.status(500).send({
            msg: 'User was not updated',
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.register = async (req, res) => {
    try {
        if (req.body.password != req.body.confirmPassword) {
            return res.status(400).send({
                msg: 'Password mismatch',
            })
        }

        const hash = await bcrypt.hash(req.body.password, 10)

        const data = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            createdDate: new Date(),
        })
        const result = await data.save()
        if (result) {
            return res.status(201).send({
                msg: 'User created',
                payload: {},
            })
        }
        res.status(500).send({
            msg: 'User was not created',
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (!user) {
            return res.status(400).send({
                msg: 'No such user',
            })
        }

        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (err) {
                return res.status(400).send({
                    msg: 'Passwords could not be compared',
                })
            }

            if (result) {
                return res.status(200).send({
                    msg: 'User was logged in',
                })
            } else {
                return res.status(400).send({
                    msg: 'User could not be logged in',
                })
            }
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.requestReset = async (req, res) => {
    try {
        const token = crypto.randomBytes(16).toString('hex')
        const result = await User.findOneAndUpdate(
            { username: req.body.username },
            { passwordToken: token }
        )
        await agenda.schedule('in 10 minutes', 'void password token', {
            username: req.body.username,
        })
        const info = await transporter.sendMail({
            from: '"SPŠMB Fórum" <spsmb.forum@seznam.cz>', // sender address
            to: result.email, // list of receivers
            subject: '[SPŠMB Fórum] Password reset', // Subject line
            text: `Reset your password by clicking the following link: http://localhost:5173/auth/reset/${token}`, // plain text body
            html: `
            <p>Reset your password by clicking the following link:</p>
            <a href="http://localhost:5173/auth/reset/${token}">Reset your password</a>
            `, // html body
        })
        res.status(200).send({
            msg: 'Reset email sent',
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.updatePassword = async (req, res) => {
    try {
        if (req.body.password != req.body.confirmPassword) {
            return res.status(400).send({
                msg: 'Password mismatch',
            })
        }
        const hash = await bcrypt.hash(req.body.password, 10)
        const result = await User.findOneAndUpdate(
            { passwordToken: req.params.token },
            { password: hash, passwordToken: null }
        )
        if (result) {
            return res.status(200).send({
                msg: 'User password changed',
            })
        }
        res.status(500).send({
            msg: 'User password was not changed',
        })
    } catch (error) {
        res.status(500).send(error)
    }
}
