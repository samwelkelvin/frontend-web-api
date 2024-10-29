# How to run this project in development

## For google signins
1. Create .env file and add below code
    ```
        CLIENT_ID = 'google-client-id'
        CLIENT_SECRET = 'client_secret'
        REDIRECT_URI = 'redirect-url/login'

    ```
    - REDIRECT_URI must be authorized JavaScript origins (e.g. http://localhost:3000)
    - rediredirect url must be htpp://youruel/login (must end with /login)
    - Google Auth2 documentation https://developers.google.com/identity/protocols/oauth2/
 
## Requirements
- Node v20.5.0

## Running projects
- Run 'npm install' to install all dependencies
- Run 'npm run local' to launch the app
```
npm install

npm run local

```
