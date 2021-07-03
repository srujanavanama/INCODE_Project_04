const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const session = require('express-session');
const methodOverride = require('method-override'); // to override HTTP POST method to implent HTTP DELETE method

// router files
const loginRouter = require('./routes/loginRouter');
const signupRouter = require('./routes/signupRouter');
const logoutRouter = require('./routes/logoutRouter');
const homeRouter = require('./routes/homeRouter');
const usersRouter = require('./routes/usersRouter');
const schedulesManagementRouter = require('./routes/schedulesManagementRouter');
const deleteRouter = require('./routes/deleteRouter');


const app = express();

const PORT = process.env.PORT || 3000;

// view engine and layouts
app.set('view engine', 'ejs')
app.use(expressLayouts)

// parse post data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Override HTTP POST method for using HTTP DELETE method
app.use(methodOverride('_method'));

// look for static files in the public folder
app.use(express.static('public'))

// session
app.use(session({
    cookie: {
      maxAge: 60 * 60 * 1000, // 1 hour
      // secure: false must be true if served via HTTPS & false if served via HTTP
    },
    name: 'mrcoffee',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }));

  //Routes
app.use('/', loginRouter)
app.use('/login', loginRouter)
app.use('/signup', signupRouter)
app.use('/logout', logoutRouter)
app.use('/home', homeRouter)
app.use('/users', usersRouter)
app.use('/schedules-management', schedulesManagementRouter)
app.use('/delete', deleteRouter)

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
})