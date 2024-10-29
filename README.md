# About this project
- This is a node application which takes data from external (https://jsonplaceholder.typicode.com/) api and displays it to the user

## For google signins

- This project uses google authentication as  authentication provider for logging in.

1. Create .env file in root directory of project and add below code
    ```
        CLIENT_ID = 'enter your google-client-id'
        CLIENT_SECRET = 'enter you google client_secret'
        REDIRECT_URI = 'redirect-url/login'
    ```
    - REDIRECT_URI must be authorized JavaScript origins (e.g. http://localhost:3000)
    - rediredirect url must be htpp://youruel/login (must end with /login) eg (http://localhost:3000/login)
    - Google Auth2 documentation https://developers.google.com/identity/protocols/oauth2/
 
## Requirements
- Node v20.5.0

## Dependencies
    "axios": "^1.7.7",
    "dotenv": "^16.4.5",
    "ejs": "^3.1.10",
    "express": "^4.21.1",
    "express-session": "^1.18.1",
    "nodemon": "^3.1.7"
    
    - All included in package.json

## Running projects

- This project uses port 3000

- Run 'npm install' to install all dependencies
    ```
    npm install

    ```
- Run 'npm run local' to launch the app

    ```
    npm run local

    ```
