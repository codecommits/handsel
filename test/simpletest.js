var request = require('supertest'),
	app = require('../app');

describe('Handsel', function() {
	it('Welcome to Express', function(done) {
		request(app).get('/')
		.expect(200)
		.expect(/Welcome to Express/, done);
	});
});