const User = require('../models/users')
const bcrypt = require("bcrypt")

exports.getAll = async (req, res) => {
    try {
        const result = await User.find()
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

exports.getById = async (req, res) => {
    try {
        const result = await User.findById(req.params.id)
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
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(req.body.password, salt);

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

        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(req.body.password, salt);

        const data = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
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
                console.error('Error comparing passwords:', err);
                return res.status(400).send({
                    msg: 'Passwords could not be compared',
                });
            }
        
        if (result) {
            console.log('Passwords match');
            return res.status(200).send({
                msg: 'User was logged in',
            });
        } else {
            console.log('Passwords do not match');
            return res.status(400).send({
                msg: 'User could not be logged in',
            });
        }
        });
        
    } catch (error) {
        res.status(500).send(error)
    }
}
