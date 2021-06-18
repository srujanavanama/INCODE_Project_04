const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require('../database');
const { redirectToHome } = require('../middleware')

router.get('/', redirectToHome, (req,res) => {
    console.log('is connected')
    res.render('pages/login', {
        message: req.query.message,
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
    const userId = existingUser.id;

    bcrypt.compare(req.body.password, hash, function (err, result) {
      if(result) {
        // if successful, create session and redirect
        // res.send(req.session);
        req.session.userId = existingUser.id;
        res.redirect('home');
      } else {
        console.log(err)
        res.redirect('/login?message=Incorrect%20login%20details')
      }
    })
  })
  .catch((err) => {
    res.render("pages/error", {
        message:err.message + err.query
      });
  })

  // does password match user password

  // if successfull, create session and redirect
})

module.exports = router