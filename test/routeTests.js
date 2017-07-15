const app = require("../server.js");
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();

chai.use(require("chai-things"));
chai.use(chaiHttp);

describe("Routes tests", () => {

  //This test should get all users in database
  it("Should get all users in database", (done) => {
    chai.request(app)
      .get("/users/all")
      .end((err, res) => {
        res.should.have.status(200);
        res.should.have.header("content-type", "application/json; charset=utf-8");
        done(err);
      });
  });

  it("Should get all reservations in database", (done) => {
    chai.request(app)
      .get("/reservations")
      .end((err, res) => {
        res.should.have.status(200);
        res.should.have.header("content-type", "application/json; charset=utf-8");
        done(err);
      });
  });

  it("Should fail to post a user to the database because of a missing password", (done) => {
    chai.request(app)
      .post("/users/register")
      .send({ username: "asd"})
      .end((err, res) => {
        res.should.have.status(200);
        res.should.have.header("content-type", "application/json; charset=utf-8");
        res.body.should.have.property("message").eql("No password was given");
        done(err);
      });
  });

  /*it("Should fail to log in the user", (done) => {
    chai.request(app)
      .post("/users/login")
      .send({ username: "notadminm8"})
      .end((err, res) => {
        res.should.have.status(400);
        console.log(res);
        done(err);
      });
  });*/

  it("Should log in the user", (done) => {
    chai.request(app)
      .post("/users/login")
      .send({ username: "notadminm8", password: "qwe123"})
      .end((err, res) => {
        res.should.have.status(200);
        res.should.have.header("content-type", "text/html; charset=utf-8");
        done(err);
      });
  });
});