const express = require('express')
const router = express.Router()
const db = require('../database')
const { redirectToLogin } = require('../middleware')

// router.get('/', redirectToLogin, (req, res) => {
router.get('/', (req, res) => {
  //console.log("user id: " + req.session.userId)
  const uid = 3
  //#TODO: Replace uid with req.session.userId
  db.any('SELECT id, day, TO_CHAR(start_at, \'fmHH12:MI AM\') as start_at, TO_CHAR(end_at, \'fmHH12:MI AM\') as end_at FROM schedules WHERE user_id = $1;', [uid])
  .then((result) => {
    res.render('pages/schedulesManagement', {
        schedules: result
      })
    })
    
    .catch((err) => {
        res.render("pages/error", {
            message:err.message + err.query
          });
    })
})

 // Save schedule to the database
  // router.post('/', (req, res) => {
  //   const user_id = 3
    //#TODO: Replace uid with req.session.userId
  //   console.log("start_at: " + req.body.start_at)
  //   console.log("end_at: " + req.body.end_at)

  //   // let current_date = new Date()
  //   // let current_date = new Date("" + req.body.start_at)
  //   // console.log("current date: " + current_date)

  //   // req.body.start_at = new Date( req.body.start_at)
  //   // req.body.end_at = new Date(req.body.end_at)
  //   db.none('INSERT INTO schedules (user_id, day, start_at, end_at) VALUES ($1, $2, $3, $4);', 
  //       [Number(user_id), Number(req.body.day), req.body.start_at, req.body.end_at])
  //   //db.none('INSERT INTO schedules (user_id, day, start_at, end_at) VALUES ($1, $2, $3, $4);', 
  //       //[Number(req.session.user_id), Number(req.body.day), req.body.start_at, req.body.end_at])        
  //   .then(() => {
  //        res.redirect(req.get('referer'))        //reloads the current page
  //   })
  //   .catch((err) => {
  //         res.render("pages/error", {
  //              message:err.message + err.query
  //         });
  //   })
  // })

module.exports = router

  