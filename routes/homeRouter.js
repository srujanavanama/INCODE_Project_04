const express = require('express')
const router = express.Router()
const db = require('../database')
const { redirectToLogin } = require('../middleware')

// router.get('/', redirectToLogin, (req, res) => {
router.get('/', (req, res) => {
    res.render('pages/home')
})

module.exports = router