
const supertest = require("supertest");

const app = require("../app");

const mockResponse = {

    render: jest.fn()
    
}

describe("Test routes ", () => {

    it("Landing page, should return status code of 200", async () => {

        const response = await supertest(app,mockResponse).get("/");
        
        expect(response.status).toBe(200);
        

    });

    it("Home should return 200", async () => {

        const response = await supertest(app).get("/home");

        expect(response.status).toBe(200);

    });


    it("when page route doesent exist 404", async () => {

         const response = await supertest(app).get("/no-such-route");
         
        expect(response.status).toBe(404);

    });

})