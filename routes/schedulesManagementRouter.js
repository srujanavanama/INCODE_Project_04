const express = require('express')
const router = express.Router()
const db = require('../database')
const { redirectToLogin } = require('../middleware')

//Display all existing schedules of the user
 router.get('/', redirectToLogin, (req, res) => {
db.any('SELECT u.firstname, u.lastname, s.id, s.day, TO_CHAR(s.start_at, \'fmHH12:MI AM\') as start_at, TO_CHAR(s.end_at, \'fmHH12:MI AM\') as end_at FROM users u INNER JOIN schedules s ON u.user_id=s.user_id WHERE u.user_id = $1  ORDER BY day;', [req.session.userId])
.then((result) => {
    res.render('pages/schedulesManagement', {
        schedules: result,
        login: req.session.loggedin,
        loggedin_user_firstname: req.session.firstname,
        loggedin_user_lastname: req.session.lastname
      })
    })
    
    .catch((err) => {
        res.render("pages/error", {
            message:err.message + err.query,
            login: req.session.loggedin
          });
    })
})

 // Save new schedule to the database
  router.post('/', redirectToLogin, (req, res) => {
    db.none('INSERT INTO schedules (user_id, day, start_at, end_at) VALUES ($1, $2, TO_TIMESTAMP($3, $4), TO_TIMESTAMP($5, $6));', 
        [req.session.userId, Number(req.body.day), req.body.start_at, "HH24:MI", req.body.end_at, "HH24:MI"])        
    .then(() => {
         res.redirect(req.get('referer'))        //reloads the current page
    })
    .catch((err) => {
          res.render("pages/error", {
               message:err.message + err.query
          });
    })
  })

module.exports = router
