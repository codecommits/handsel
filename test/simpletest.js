var request = require('supertest'),
	app = require('../app');

describe('Handsel', function() {
	it('Welcome to test party', function(done) {
		request(app).get('/')
		.expect(200)
		.expect(/Hello Handsel Please test me again/, done);
	});
});