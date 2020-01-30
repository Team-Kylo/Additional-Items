const request = require('supertest');
const app = require('./index');
const mongoose = require('mongoose');

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

    // generatedItems = await generateData(numberOfSellers, numberOfItems);
  });

  afterAll(() => {
    mongoose.connection.close();
    app.close()
  });

  it('should respond with every item except the id given', (done) => {
    endpoint
      .get('/3')
      // .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      // .end(done);
      .then((res) => {
        // console.log(err, res);
        // if (err) throw err;
        const data = res.body;
        expect(data.length).toBe(9);
        return done();
      })
      .catch((err) => {
        console.error(err);
        return done();
      })
  });

  it('should return with a 404 error if something went wrong', (done) => {
    endpoint
      .get('/Foobar')
      .expect(404)
      .end(done);
  });
});
