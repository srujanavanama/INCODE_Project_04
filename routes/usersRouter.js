const express = require('express')
const router = express.Router()
const db = require('../database')
const { redirectToLogin } = require('../middleware')

router.get('/:uid', redirectToLogin, (req, res) => {
      db.any('SELECT u.user_id, u.firstname, u.lastname, u.email, s.id, s.day, to_char(s.start_at,\'fmHH12:MI AM\') as start_at, \
             to_char(s.end_at,\'fmHH12:MI AM\') as end_at \
             FROM users u INNER JOIN schedules s ON u.user_id=s.user_id WHERE u.user_id = $1 ORDER BY firstname, day;', [req.params.uid])   
      .then((result) => {
          res.render('pages/users', {
            result: result,
            login: req.session.loggedin,
            loggedin_user_firstname: req.session.firstname
         })       
      })
      
      .catch((err) => {
          res.render("pages/error", {
              message:err.message + err.query
            });
      })

  })

  module.exports = router