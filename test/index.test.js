const express = require("express");

const app = express();
//import express-session
const session = require('express-session');

app.use(express.json());


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

const mockResponse = {

    render: jest.fn()
    
}

describe('Test routes', () => {
    app.get('/', function (mockRequest, mockResponse) {
            
            const user = mockRequest.session.user;

        return mockResponse.render('index', { aunthenticatedUser: user });
        
    })
    
     test('testing for landing page', () => { 
        // expect(mockRequest.session).toHaveBeenCalled();
        expect(mockResponse.render()).toBe()
    })
    

})