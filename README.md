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
    - Google Auth20 documentation https://developers.google.com/identity/protocols/oauth2/
 
## Requirements
- Node v23.1.0

## Running projects

- This project uses port 3000

- Run 'npm install' to install all dependencies
    ```
    npm install

    ```
    - ### Note: You may get a warning when installing depencies for eslint for using common js 
        (node:16888) ExperimentalWarning: CommonJS module C:\Program Files\nodejs\node_modules\npm\node_modules\debug\src\node.js is loading ES Module C:\Program Files\nodejs\node_modules\npm\node_modules\supports-color\index.js using require().
        Support for loading ES Module in require() is an experimental feature and might change at any time
        (Use `node --trace-warnings ...` to show where the warning was created)

        - ignore the warnig

- To run linting with eslint

    ```
        npm run lint

    ```
- To run test  run

    ```
        npm run test

    ```
- Run 'npm run demo' to launch the app

    ```
    npm run demo

    ```
