const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require('../database');
const { redirectToHome } = require('../middleware')

router.get('/', redirectToHome, (req,res) => {
    res.render('pages/login', {
        message: req.query.message,
        successMessage: req.query.successMessage,
        login: req.session.loggedin
    })
})

router.post('/', redirectToHome, (req,res) => {
    // has the user entered both email and password
  if(req.body.email === '' && req.body.password === '') {
    res.redirect('/login?message=Please%20insert%20both%20email%20and%20password.')
  }

  // does user exist
  db.oneOrNone('SELECT * FROM users WHERE email = $1', [req.body.email.toLowerCase()])
  .then((existingUser) => {
    // if not return error
    if(!existingUser) {
      return res.redirect('/login?message=Incorrect%20login%20details')
    }

    // if so does password match user password?
    // res.send(existingUser)
    const email = existingUser.email;
    const hash = existingUser.password;
    const userId = existingUser.user_id;

    // check if the entered password matches with the database password
    bcrypt.compare(req.body.password, hash, function (err, result) {
      if(result) {
        // if successful, create session and redirect to home
        req.session.userId = userId;
        req.session.firstname = existingUser.firstname
        req.session.lastname = existingUser.lastname
        req.session.loggedin = true;
        res.redirect('home');
      } else {
       // console.log(err)
        res.redirect('/login?message=Incorrect%20login%20details')
      }
    })
  })
  .catch((err) => {
    res.render("pages/error", {
        message:err.message + err.query,
        login: req.session.loggedin
      });
  })
})

module.exports = router