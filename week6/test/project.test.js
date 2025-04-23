const expect = require("chai").expect;
const request = require("request");
const Project = require("../models/Project"); // Import your Project model

describe("Project API", function () {
    const baseUrl = "http://localhost:3000";

    it("returns status 200 for root endpoint", function (done) {
        request(baseUrl, function (error, response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it("Response has correct structure (statusCode, data, message)", function (done) {
        request.get(`${baseUrl}/api/projects`, function (error, response, body) {
            const resBody = JSON.parse(body);
            expect(resBody).to.have.all.keys("statusCode", "data", "message");
            done();
        });
    });

    it("has CORS headers enabled", function (done) {
        request.get(`${baseUrl}/api/projects`, function (error, response) {
            expect(response.headers["access-control-allow-origin"]).to.equal("*");
            done();
        });
    });

    it("returns 404 for invalid route", function (done) {
        request.get(`${baseUrl}/api/invalid`, function (error, response) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
});