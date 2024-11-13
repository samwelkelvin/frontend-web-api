//this file performs data tests from APIs and fetch and post requests

const functionObj = require("../helpers.js");

const testData = require("./test-data.js");

const axios = require('axios');

const googleAuth = require("../google-auth-request.js");

beforeEach(() => {

    //jest.resetAllMocks();

   // fetch.mockClear();

})

function simulateFetch(mockData) {

    jest.spyOn(global, 'fetch').mockResolvedValue({

            ok: true,
            
            json: jest.fn().mockResolvedValue(mockData)

    })

}

describe('Test for albums points', () => {

    it('/albums Should return array of objects for albums', async () => {
       
       simulateFetch(testData.MOCK_ALBUMS);
         
        const response = await functionObj.getApiData("https://jsonplaceholder.typicode.com/albums");

         //expected object type

       const expectedAlbumsObj = {

            userId: expect.any(Number),
            
            id: expect.any(Number),
                    
            title: expect.any(String)
                    
        }
        
         //response should be an array of objects
        expect([...response]).toEqual([expectedAlbumsObj,expectedAlbumsObj,expectedAlbumsObj]);

        //fetch must be called once
        expect(fetch).toHaveBeenCalled();

    })
    
    it('/albums/16 Should return single album data as object', async () => {

        simulateFetch(testData.MOCK_ALBUM);
    
        const response = await functionObj.getApiData("https://jsonplaceholder.typicode.com/albums/16");

        //check if its an object

        const expectedAlbumObj = {

            userId: expect.any(Number),

            id: expect.any(Number),

            title: expect.any(String)

        }
        
        expect(response).toEqual(expectedAlbumObj);

        //fetch must be called once
        expect(fetch).toHaveBeenCalled();

    });

    it('/albums/16/photos Should return an array of object containing album photos', async () => {
       
        simulateFetch(testData.MOCK_ALBUM_PHOTOS);
         
        const response = await functionObj.getApiData("https://jsonplaceholder.typicode.com/albums/16/photos");

         //expected object type

         const expectedPhotoObj = {

            albumId: expect.any(Number),

            id: expect.any(Number),

             title: expect.any(String),

             url: expect.any(String),

             thumbnailUrl: expect.any(String)
            
        }
        
         //response should be an array of objects
        expect([...response]).toEqual([expectedPhotoObj,expectedPhotoObj]);

        //fetch must be called once
        expect(fetch).toHaveBeenCalled();

    })

   
  it('/photos/653 Should Update photo title and return an object of the photo details', async () => {
       
      const payLoadObj =  {
				id: 653,
				title: "This is a new photo"
      }
      
        simulateFetch(testData.PHOTO_TITLE_UPDATE_RESPONSE);
         
        const response = await functionObj.updateApiData("https://jsonplaceholder.typicode.com/photos/653",payLoadObj);

         //expected object type

         const expectedPhotoUpdateObj = {

            albumId: expect.any(Number),

            id: expect.any(Number),

            title: expect.any(String),

            url: expect.any(String),

            thumbnailUrl: expect.any(String)
            
        }
        
        //response should be an array of objects
      expect(response).toEqual(expectedPhotoUpdateObj);
      
      expect(response.id).toEqual(payLoadObj.id);

      expect(response.title).toEqual(payLoadObj.title);

        //fetch must be called once
        expect(fetch).toHaveBeenCalled();

    })

    
    it('Should handle error when fetching data', async () => {

        global.fetch.mockImplementationOnce(
            () => Promise.reject(
                new Error('Failed to fetch')
            )
        );

        await expect(functionObj.getApiData("https://jsonplaceholder.typicode.com/albums/1")).
            
            rejects.toThrow('Failed to fetch');
        
    });


    it('Error simulation while fetching data', async () => {

        const errorMessage = "Network error";
       
        jest.spyOn(global, 'fetch').mockRejectedValue(new Error(errorMessage));

        await expect(functionObj.getApiData("https://jsonplaceholder.typicode.com/albums")).
            
        rejects.toThrow(errorMessage);
        
    });
    
})

describe('Test for users endpoints', () => {

     //expected object type
        const expectedUserObj = {

                id:expect.any(Number),
                name:expect.any(String),
                username: expect.any(String),
                email: expect.any(String),
                address: {
                    street: expect.any(String),
                    suite: expect.any(String),
                    city: expect.any(String),
                    zipcode: expect.any(String),
                        geo: {
                            lat: expect.any(String),
                            lng: expect.any(String)
                        }
                },
                phone: expect.any(String),
                website: expect.any(String),
                company: {
                    name:expect.any(String),
                    catchPhrase: expect.any(String),
                    bs: expect.any(String)
                    }
            }
        
    
    it('/users Should return array of objects for users', async () => {
       
        simulateFetch(testData.MOCK_USERS);
         
        await expect(functionObj.getApiData("https://jsonplaceholder.typicode.com/users")).resolves.toBe(testData.MOCK_USERS);
        
        const response = await functionObj.getApiData("https://jsonplaceholder.typicode.com/users");

        //response should be an array of objects
        expect([...response]).toEqual([expectedUserObj, expectedUserObj]);

        //fetch must be called once
        expect(fetch).toHaveBeenCalled();

    });


    it('/users/1 Should return single objects with  user details', async () => {
        
            simulateFetch(testData.MOCK_USER);
            
            const response = await functionObj.getApiData("https://jsonplaceholder.typicode.com/users/1");

            //response should be an array of objects
            expect(response).toEqual(expectedUserObj);

            //fetch must be called once
            expect(fetch).toHaveBeenCalled();

    });
    
    it('Error simulation  while fetching data', async () => {

        const errorMessage = "Network error";
       
        jest.spyOn(global, 'fetch').mockRejectedValue(new Error(errorMessage));

        await expect(functionObj.getApiData("https://jsonplaceholder.typicode.com/users")).
            
        rejects.toThrow(errorMessage);
        
    });
   
})

describe("Testing for google auth via axios", () => {

    const authorizationCode = "ACCESWTYUFFLowpdpdJFLD9JDLD";
    
    it('Get access token - should return access token', async () => {

        //mock axios post form axios object to prevent reset for the fake mock
        axios.post = jest.fn().mockResolvedValue(testData.MOCKED_RESPONSE_OBJECT)

        const response = await googleAuth.getAccessToken(authorizationCode);

        //access token in response should be equal to access token in mock obj
        expect(response.access_token).toEqual(testData.MOCKED_RESPONSE_OBJECT.data.access_token);
        
        expect( axios.post).toHaveBeenCalled();

        expect( axios.post).toHaveBeenCalledTimes(1);   

    })

    it('Get user profile data - should return user obj with profile data', async () => {
       
        const access_token = 'ya29.a0AeDClZAVzQLJE1oG49_jTxCCoiJV7NLs3JLP8mpz0RxQtTBy-Pr9qrhGealquY9y6-B';

        const expectedUserProfileObj = {

            profile: {

                profile_id: expect.any(String),
                
                email: expect.any(String),

                name: expect.any(String),
                            
                picture: expect.any(String)
                            
            }
        }

        //mock axios post form axios object to prevent reset for the fake mock
        axios.get = jest.fn().mockResolvedValue(testData.MOCKED_USER_PROFILE)

        const response = await googleAuth.getProfileData(access_token);

        //console.log(response);

        expect(response).toEqual(expectedUserProfileObj);

        //profile id in response should equal profile id in mock data
        expect(response.profile.profile_id).toEqual(testData.MOCKED_USER_PROFILE.data.profile.profile_id);
        
        expect(axios.get).toHaveBeenCalled();

        expect(axios.get).toHaveBeenCalledTimes(1);

    });
    
    
})