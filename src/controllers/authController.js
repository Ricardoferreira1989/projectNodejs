const express = require('express')

const User = require('../models/user')

const router = express.Router()

router.post('/register', async(req, res) => {
    const { nome } = req.body;
    try {
        //const user = await User.create(req.body)
        const user = await User.create({ nome });

        return res.send({ user })
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed'})
    }
})

module.exports = app => app.use('/auth', router)