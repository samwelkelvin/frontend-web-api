const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const authRoutes = require('./authRoutes');

const session = require('express-session');

app.use(express.json());

function isLoggedIn(request, response, next) {
    
    //request.session.isAuthenticated ? next() : response.sendStatus(401);
        
    request.session.isAuthenticated ? next() : response.render('login', { title: 'Login' });

   
}
 
//Static files
app.use(express.static('public'));
app.use('/css',express.static(__dirname + 'public/css'));
app.use('/js',express.static(__dirname + 'public/js'));
app.use('/img',express.static(__dirname + 'public/img'));

//Set views
app.set('views','./views');
app.set('view engine', 'ejs');

//set up express sessions
app.use(
  session({
    name: 'AuthCookie',
    secret: "This is a secret.. shhh don't tell anyone",
    saveUninitialized: true,
    resave: false,
    //cookie: {maxAge: default}
  })
);

//home page route
app.get('/', function (request, response) {
    response.render('index',{title:'Home page',aunthenticatedUser : request.session.user});
});

app.get('/photo/:id', isLoggedIn , function (request, response) {
    
    response.render('protected-views/photo', { title: 'Dashboard', aunthenticatedUser: request.session.user,photo_id : request.params.id });
    
});

app.get('/home', isLoggedIn , function (request, response) {
    
    response.render('protected-views/home', { title: 'Dashboard',aunthenticatedUser : request.session.user });
    
});

app.get('/user/:id', isLoggedIn , function (request, response) {

    response.render('protected-views/user', { title: 'User details',aunthenticatedUser : request.session.user,user_id : request.params.id });
    
});

app.get('/album/:id', isLoggedIn , function (request, response) {

    response.render('protected-views/album', { title: 'Album details',aunthenticatedUser : request.session.user,album_id : request.params.id});
    
});

app.get('/users', isLoggedIn , function (request, response) {
    
    response.render('protected-views/users', { title: 'Users',aunthenticatedUser : request.session.user });
    
});

app.get('/albums', isLoggedIn , function (request, response) {

    response.render('protected-views/albums', { title: 'Albums',aunthenticatedUser : request.session.user});
    
});

app.get('/signin', function (request, response) {

    if (request.session.isAuthenticated == true) return response.redirect('/home');
    
    if (request.session.isAuthenticated !== true) return response.render('login', { title: 'Login' });
    
    next();
    
});

/**** auth with google server side */
app.get('/sign-with-google', function (request, response) {

    if (request.session.isAuthenticated) return response.redirect('/home');
    
    if (request.session.isAuthenticated !== true) return response.redirect('/auth/google');
    
    next();
    
});

app.use('/', authRoutes);

// Listen
app.listen(port, () => {

    console.info(`App staterted Visit htt://localhost:${port}`)

});