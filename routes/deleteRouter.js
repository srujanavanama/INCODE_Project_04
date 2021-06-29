const express = require('express')
const router = express.Router()
const db = require('../database')
const { redirectToLogin } = require('../middleware')

// router.get('/', redirectToLogin, (req, res) => {
router.delete('/:schid', (req, res) => {
    db.none('DELETE FROM schedules WHERE id = $1;', [req.params.schid])
    .then(() => {  
         res.redirect(req.get('referer'))        //Method-1 to reload the current page
      // res.redirect('/schedules-management')  //Method-2 to reload the current page
    })
    
    .catch((err) => {
        res.render("pages/error", {
            message:err.message + err.query
          });
    })
})

module.exports = router
