//import required libraries

//import express for routimg
const express = require('express');
const router = express.Router();

//import google auth function
const getUserDetails = require("./google-auth-request");

//import dotenv to read environment variables
require('dotenv').config();

//set client id and client secret for google aouth
const CLIENT_ID = process.env.CLIENT_ID;

const REDIRECT_URI = process.env.REDIRECT_URI;

// Initiates the Google Login flow
router.get('/auth/google', (req, res) => {

  const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=profile email`;

    res.redirect(url);
  
});

// Callback URL for handling the Google Login response
router.get('/login', async (req, res) => {
  
  const { code } = req.query;

  try {

    const profile = await getUserDetails(code);
    
        //set authentication details into session
          req.session.user = {
              profile_id: profile.id,
              email: profile.email,
              name: profile.name,
              picture: profile.picture,
              isAuthenticated: true
            }
      
          //set authentication staus to true (will be to track user login status throughtout the application)
          req.session.isAuthenticated = true;
            
    //redirect to home page
    res.redirect('/home');
    
  } catch (error) {

     console.error(error)

    // console.error('Error:', error.response.data.error);

    res.redirect('/signin');

  }

});

// Logout route
router.get('/logout', (req, res) => {

  //destroy session data and redirect to signin page
  req.session.destroy();

  res.redirect('/signin');

});

module.exports = router;
