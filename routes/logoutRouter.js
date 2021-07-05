const express = require('express')
const router = express.Router()
const { redirectToLogin, redirectToHome } = require('../middleware')

router.get('/', redirectToLogin, (req, res) => {
  req.session.destroy(function(err) {
      if(err) {
          //console.log(err)
          res.send(err.message)
      } else {
          res.clearCookie('mrcoffee');
          res.redirect("/login?successMessage=Logout%20Successful,%20Please%20Login%20Again%20to%20Continue");
      }
  })
 // console.log(req.session)
})

router.post('/', redirectToHome, (req,res) => {

})

module.exports = router