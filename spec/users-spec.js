const request = require("request");

const api = request.defaults({
  baseUrl: 'http://localhost:3000/api',
  json: true
});

describe('Users API Tests:', function () {

  let jwtToken = '';

  beforeAll(function (done) {
    api.post({
      url: '/login',
      body: {
        username: 'John'
      }
    }, function (err, res, body) {
      expect(res.statusCode).toBe(200);
      jwtToken = body.token;
      done();
    });
  });

  it('Get A User', function (done) {
    api.get({
      url: '/users/John',
      headers: {
        'Authorization': 'Bearer ' + jwtToken
      }
    }, function (err, res, body) {
      expect(res.statusCode).toBe(200);
      expect(body.firstName).toBe('John');
      expect(body.lastName).toBe('Doe');
      done();
    });
  });

});
