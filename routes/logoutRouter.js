const express = require('express')
const router = express.Router()
const { redirectToLogin, redirectToHome } = require('../middleware')

router.get('/', redirectToLogin, (req, res) => {
  req.session.destroy(function(err) {
      if(err) {
          console.log(err)
          res.send(err.message)
      } else {
          res.clearCookie('mcoffe_sid');
          res.redirect('/login')
      }
  })
  console.log(req.session)
})

router.post('/', redirectToHome, (req,res) => {

})

module.exports = router