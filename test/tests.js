const app = require("../server.js");
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();

chai.use(require("chai-things"));
chai.use(chaiHttp);

describe("General routes Tests", () => {
  
  //This test gets the index view.
  it("Should get the index view", (done) => {
    chai.request(app)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
        res.should.have.header("content-type", "text/html; charset=utf-8");
        done(err);
      });
  });
});