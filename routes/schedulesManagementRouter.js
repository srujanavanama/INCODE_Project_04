const express = require('express')
const router = express.Router()
const db = require('../database')
const { redirectToLogin } = require('../middleware')

<<<<<<< HEAD
//Display all existing schedules of the user
// router.get('/', redirectToLogin, (req, res) => {
router.get('/', (req, res) => {
=======
router.get('/', redirectToLogin, (req, res) => {
// router.get('/', (req, res) => {
>>>>>>> 705d8eb29944af38728c587b746df5d632d49386
  //console.log("user id: " + req.session.userId)
  const uid = 1
  //#TODO: Replace uid with req.session.userId
 
  //db.any('SELECT u.firstname, u.lastname, s.id, s.day, s.start_at, s.end_at FROM users u INNER JOIN schedules s ON u.user_id=s.user_id WHERE u.user_id = $1  ORDER BY day;', [uid])
   db.any('SELECT u.firstname, u.lastname, s.id, s.day, TO_CHAR(s.start_at, \'fmHH12:MI AM\') as start_at, TO_CHAR(s.end_at, \'fmHH12:MI AM\') as end_at FROM users u INNER JOIN schedules s ON u.user_id=s.user_id WHERE u.user_id = $1  ORDER BY day;', [uid])

  .then((result) => {
    res.render('pages/schedulesManagement', {
        schedules: result,
        login: req.session.loggedin
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
  router.post('/', (req, res) => {
    const user_id = 1

    //#TODO: Replace uid with req.session.userId
<<<<<<< HEAD
    console.log("start_at: " + req.body.start_at)
    console.log("end_at: " + req.body.end_at)
    console.log("body: " + req.body)


     let current_date = new Date()       // Returns Tue Dec 12 2017 11:18:30 GMT+0530 (IST) {}
     console.log("current date: " + current_date)

    // db.none('INSERT INTO schedules (user_id, day, start_at, end_at) VALUES ($1, $2, $3, $4);', 
    //     [Number(user_id), Number(req.body.day), "2021/06/29 08:30:00", "2021/06/29 05:30:00"])
    db.none('INSERT INTO schedules (user_id, day, start_at, end_at) VALUES ($1, $2, TO_TIMESTAMP($3, $4), TO_TIMESTAMP($5, $6));', 
        [user_id, Number(req.body.day), req.body.start_at, "HH24:MI", req.body.end_at, "HH24:MI"])        

    .then(() => {
         res.redirect(req.get('referer'))        //reloads the current page
    })
    .catch((err) => {
          res.render("pages/error", {
               message:err.message + err.query
          });
    })
  })
=======
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
  //              message:err.message + err.query,
  //              login: req.session.loggedin
  //         });
  //   })
  // })
>>>>>>> 705d8eb29944af38728c587b746df5d632d49386

module.exports = router

  