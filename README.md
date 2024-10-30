# About this project - production
- This is a node application which takes data from external (https://jsonplaceholder.typicode.com/) api and displays it to the user

## For google signins

- This project uses google authentication as  authentication provider for logging in.

1. Create .env file in root directory of project and add below code
    ```
        CLIENT_ID = 'enter your google-client-id'
        CLIENT_SECRET = 'enter you google client_secret'
        REDIRECT_URI = 'production-server-redirect-url/login'
    ```
    - REDIRECT_URI must be authorized JavaScript origins (e.g. https://example.com)
    - rediredirect url must be htpp://youruel/login (must end with /login) eg (https://example.com/login)
    - Google Auth20 documentation https://developers.google.com/identity/protocols/oauth2/
 
## View live app
  -Visit this app via https://developers.google.com
  - You can also use ngrok to view the app on your local machine