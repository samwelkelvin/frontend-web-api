//import express
const express = require("express");

const app = express();

//import express-session
const session = require('express-session');

//import dotenv to read environment variables
require('dotenv').config();

//set client id and client secret for google aouth
const CLIENT_ID = process.env.CLIENT_ID;

const REDIRECT_URI = process.env.REDIRECT_URI;

app.use(express.json());

//middleware function to check for authentication before granting access to the route
function isLoggedIn(request, response, next) {
    
    //request.session.isAuthenticated ? next() : response.sendStatus(401);
        
    request.session.isAuthenticated ? next() : response.render('login', { title: 'Login',CLIENT_ID:CLIENT_ID,REDIRECT_URI,REDIRECT_URI });

   
}

//configuration how to serve static files mainly css,js and images
app.use(express.static('public'));

app.use('/css', express.static(__dirname + 'public/css'));

app.use('/js', express.static(__dirname + 'public/js'));

app.use('/img', express.static(__dirname + 'public/img'));

//Set views for ejs templating engine
app.set('views', './views');

app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);

//set up express sessions
app.use(

    session({
      
        name: 'AuthCookie',
        
        secret: "secretString123",
    
        saveUninitialized: true,
    
        resave: false,
    
        //cookie: {maxAge: default}
        
    })
    
);

//landing page route
app.get('/', function (request, response) {

    response.render('index', { title: 'Home page', aunthenticatedUser: request.session.user });
    
});


//photo information route
app.get('/photo/:id', isLoggedIn , function (request, response) {
    
    response.render('protected-views/photo', { title: 'Dashboard', aunthenticatedUser: request.session.user,photo_id : request.params.id });
    
});


//home page route
app.get('/home', isLoggedIn , function (request, response) {
    
    response.render('protected-views/home', { title: 'Dashboard',aunthenticatedUser : request.session.user });
    
});

//get user by id route
app.get('/user/:id', isLoggedIn , function (request, response) {

    response.render('protected-views/user', { title: 'User details',aunthenticatedUser : request.session.user,user_id : request.params.id });
    
});

//get album by id route
app.get('/album/:id', isLoggedIn , function (request, response) {

    response.render('protected-views/album', { title: 'Album details',aunthenticatedUser : request.session.user,album_id : request.params.id});
    
});


//get users route
app.get('/users', isLoggedIn , function (request, response) {
    
    response.render('protected-views/users', { title: 'Users',aunthenticatedUser : request.session.user });
    
});

//get albums route
app.get('/albums', isLoggedIn , function (request, response) {

    response.render('protected-views/albums', { title: 'Albums',aunthenticatedUser : request.session.user});
    
});

//signin route. if a loggedin user comes to this route redirect to home page
app.get('/signin', function (request, response) {

    if (request.session.isAuthenticated) {

        return response.redirect('/home');

    }
    
    if (request.session.isAuthenticated !== true) {

        return response.render('login', { title: 'Login',CLIENT_ID:CLIENT_ID,REDIRECT_URI,REDIRECT_URI });

    }
    
    next();
    
});

// if logged in user visits sign-with-google redirect to home otherwise try to authenticate
app.get('/sign-with-google', function (request, response) {

    if (request.session.isAuthenticated) {
        return response.redirect('/home');
    }
    
    if (request.session.isAuthenticated !== true) {
        return response.redirect('/auth/google');
    }
    
    next();
    
});

module.exports = app;
