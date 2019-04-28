//import app from '../index';
const server = require('../index')
const chai = require('chai');
const expect = chai.expect;
chai.should();
chai.use(require('chai-http'));


describe("Get Request", () => {

    //const server = "http://localhost:3006"
    it("It should get 5 day of weather report", (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.to.have.status(200);
                done();
            })
    });

    it('should get Array', (done1) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.body.should.be.a('array');
                done1();
            })
    });

    it('Array is not empty and getting 5 day data', (done2) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.body.length.should.be.eql(5);
                done2();
            })
    })
})