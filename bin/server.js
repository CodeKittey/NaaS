#!/usr/bin/env node

var port   = parseInt(process.env.PORT, 10) || 1337;
var server = require('../lib/server');

if (server !== null) {
	server.listen(port);
}
