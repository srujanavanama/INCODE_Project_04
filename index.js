const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const session = require('express-session');

// router files
const loginRouter = require('./routes/loginRouter');
const signupRouter = require('./routes/signupRouter');
const logoutRouter = require('./routes/logoutRouter');
const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userRouter');

const app = express();

const PORT = process.env.PORT || 3000;

// view engine and layouts
app.set('view engine', 'ejs')
app.use(expressLayouts)

// app.get('/login', (req,res) => {
//     res.render('pages/login')
// })

// parse post data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// look for static files in the public folder
app.use(express.static('public'))

// session
app.use(session({
    cookie: {
      maxAge: 60 * 60 * 1000, // 1 hour
      // secure: false must be true if served via HTTPS & flase if served via HTTP
    },
    name: 'mrcoffee',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }));

app.use('/login', loginRouter)
app.use('/signup', signupRouter)
app.use('/logout', logoutRouter)
app.use('/home', homeRouter)
app.use('/user', userRouter)

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
})