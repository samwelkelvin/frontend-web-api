const testData = {

MOCK_ALBUMS:
        [
            {
                "userId": 1,
                "id": 1,
                "title": "quidem molestiae enim"
            },
            {
                "userId": 1,
                "id": 2,
                "title": "sunt qui excepturi placeat culpa"
            },
            {
                "userId": 1,
                "id": 3,
                "title": "omnis laborum odio"
            }
        ],

MOCK_ALBUM: {
        "userId": 2,
        "id": 16,
        "title": "ablbum one"
    },

MOCK_ALBUM_PHOTOS:
        [
            {
                "albumId": 16,
                "id": 751,
                "title": "title 1",
                "url": "https://via.placeholder.com/600/9754b2",
                "thumbnailUrl": "https://via.placeholder.com/150/9754b2"
            },
            {
                "albumId": 16,
                "id": 752,
                "title": "title 2",
                "url": "https://via.placeholder.com/600/9754b2",
                "thumbnailUrl": "https://via.placeholder.com/150/9754b2"
            }
        ],
 MOCK_USERS:
        [
            {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough",
                    "zipcode": "92998-3874",
                    "geo": {
                        "lat": "-37.3159",
                        "lng": "81.1496"
                    }
                },
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company": {
                    "name": "Romaguera-Crona",
                    "catchPhrase": "Multi-layered client-server neural-net",
                    "bs": "harness real-time e-markets"
                }
            },
            {
                "id": 2,
                "name": "Ervin Howell",
                "username": "Antonette",
                "email": "Shanna@melissa.tv",
                "address": {
                    "street": "Victor Plains",
                    "suite": "Suite 879",
                    "city": "Wisokyburgh",
                    "zipcode": "90566-7771",
                    "geo": {
                        "lat": "-43.9509",
                        "lng": "-34.4618"
                    }
                },
                "phone": "010-692-6593 x09125",
                "website": "anastasia.net",
                "company": {
                    "name": "Deckow-Crist",
                    "catchPhrase": "Proactive didactic contingency",
                    "bs": "synergize scalable supply-chains"
                }
            }
        ],

    MOCK_USER: {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
     MOCKED_RESPONSE_OBJECT : {
                data: {
                    access_token: "ya29.a0AeDClZAVzQLJE1oG49_jTxCCoiJV7NLs3JLP8mpz0RxQtTBy-Pr9qrhGealquY9y6-B",
                    expires_in: 3600,
                    id_token: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXA",
                    token_type: 'Bearer',
                    scope:'https://www.googleapis.com/auth/userinfo.profile'
                }
    },
    MOCKED_USER_PROFILE: {

        data: {
        
            profile: {

                profile_id: "USERWRWWU2023",
                
                email: "user@gmail.com",
            
                name: "John Doe",
            
                picture: "https:google.com/user/profiles.png"
            
            }
        }
    }
           
}

module.exports = testData