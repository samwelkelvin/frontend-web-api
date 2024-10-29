//javascriptCopy code
const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
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
    // Exchange authorization code for access token
    const { data } = await axios.post('https://oauth2.googleapis.com/token', {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code,
      redirect_uri: REDIRECT_URI,
      grant_type: 'authorization_code',
    });


    const { access_token, id_token } = data;

    // Use access_token or id_token to fetch user profile
    const { data: profile } = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
      headers: { Authorization: `Bearer ${access_token}` },
    });

      // Code to handle user authentication and retrieval using the profile data
      
    //   console.log(data);

    // console.log(profile);
    
    // console.log(profile.id);
    // console.log(profile.email);
    // console.log(profile.name);
    // console.log(profile.picture);

    req.session.user = {
        profile_id: profile.id,
        email: profile.email,
        name: profile.name,
      picture: profile.picture,
      isAuthenticated: true
    }

    req.session.isAuthenticated = true;
      
    res.redirect('/home');
      
  } catch (error) {

    console.error('Error:', error.response.data.error);

    res.redirect('/signin');

  }

});

// Logout route
router.get('/logout', (req, res) => {
  // Code to handle user logout
  req.session.destroy();
  res.redirect('/signin');

});

module.exports = router;