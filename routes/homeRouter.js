const express = require('express')
const router = express.Router()
const db = require('../database')
const { redirectToLogin } = require('../middleware')

router.get('/', redirectToLogin, (req, res) => {
  //Get all existing schedules from the schedules table and user name from the user table
  //TO_CHAR() formats the time in 12hrs
  // console.log(req.session)
     db.any('SELECT u.firstname, u.lastname, s.id, s.user_id, s.day, TO_CHAR(s.start_at, \'fmHH12:MI AM\') as start_at, TO_CHAR(s.end_at, \'fmHH12:MI AM\') as end_at FROM users u, schedules s WHERE u.user_id = s.user_id;')
    .then((result) => {
      res.render('pages/home', {
            schedules: result,   // all schedules and firstname and lastname of user
            login: req.session.loggedin,
            loggedin_user_firstname: req.session.firstname
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