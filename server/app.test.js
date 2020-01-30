const request = require('supertest');
const app = require('./app');

const endpoint = request(app);

describe('API endpoint with /:id', () => {

  it('should respond with every item except the id given', async () => {
    await endpoint
      .get('/3')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .then((response) => {
        const data = response.body;
        expect(data.length).toBe(9);
      });
  });

  it('should return with a 500 error if something went wrong', async () => {
    await endpoint
      .get('/Foobar')
      .expect(404);
  });
});
