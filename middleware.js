// redirect to login page if user is not logged in
const redirectToLogin = (req, res, next) => {
    if(!req.session.loggedin) {
        res.clearCookie('mrcoffee'); //name we defined while creating the session
        res.redirect('/login');
    } else {
        next()
    }
}

// redirect to Home page if user is logged in
const redirectToHome = (req, res, next) => {
    if(req.session.loggedin) {
        res.redirect('/home')
    } else {
        next()
    }
}

module.exports = { redirectToLogin,  redirectToHome }