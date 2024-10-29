//import axios to help make api call
const axios = require('axios');

//import dotenv to read environment variables
require('dotenv').config();

const tryGoogleAuth = async (code) => {

    try {
                
            // Use the Google OAuth 2.0 API to get an access token

            // Exchange authorization code for access token
            
            const { data } = await axios.post('https://oauth2.googleapis.com/token', {

                client_id: process.env.CLIENT_ID,
                
                client_secret: process.env.CLIENT_SECRET,
            
                code,
            
                redirect_uri: process.env.REDIRECT_URI,
            
                grant_type: 'authorization_code',
            
            });


            //const { access_token, id_token } = data;

        const { access_token } = data;
        

            // Use access_token or id_token to fetch user profile
            const { data: profile } = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
            
                headers: { Authorization: `Bearer ${access_token}` },
                
            });
        
        console.log(profile);
        
        
        return profile;

    } catch (error) {

        throw new Error(error)
        
    }

}

module.exports = tryGoogleAuth;