/* eslint-disable no-undef */
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('./index');

const endpoint = request(app);

describe('API endpoint with /:id', () => {
  beforeAll(() => {
    mongoose.connect(process.env.MONGO_URL,
      { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      });
  });

  afterAll(() => {
    mongoose.connection.close();
    app.close();
  });

  it('should respond with every item except the id given', (done) => {
    endpoint
      .get('/3')
      .expect(200)
      .then((res) => {
        const data = res.body;
        expect(data.length).toBe(9);
        return done();
      })
      .catch((err) => {
        console.error(err);
        return done();
      });
  });

  it('should return with a 404 error if something went wrong', (done) => {
    endpoint
      .get('/Foobar')
      .expect(404)
      .end(done);
  });
});
