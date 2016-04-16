'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var polyfill = require('babel-polyfill');
var Koa = require('koa');
var BodyParser = require('koa-bodyparser');
var Router = require('koa-router');
var cors = require('kcors');

var app = new Koa();
var router = new Router();

app.use(cors());
app.use(BodyParser({
	extendTypes: {
		json: ['application/json'] // will parse application/x-javascript type body as a JSON string
	}
}));
app.use(router.routes());
app.use(router.allowedMethods());
/*
 * ROUTES
 */

router.get('/api/Status', function () {
	var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
		var data;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						data = null;

						if (data !== null) {

							ctx.body = JSON.stringify(data, null, '\t');
							ctx.status = 200;
						} else {

							ctx.body = { message: 'Status/ not found.' };
							ctx.status = 404;
						}

					case 2:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function (_x, _x2) {
		return ref.apply(this, arguments);
	};
}());

/*
 * INITIALIZATION
 */

app.use(function () {
	var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx, next) {
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.prev = 0;
						_context2.next = 3;
						return next();

					case 3:
						_context2.next = 9;
						break;

					case 5:
						_context2.prev = 5;
						_context2.t0 = _context2['catch'](0);


						ctx.body = { message: 'Internal error: ' + _context2.t0.message };
						ctx.status = _context2.t0.status || 500;

					case 9:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined, [[0, 5]]);
	}));

	return function (_x3, _x4) {
		return ref.apply(this, arguments);
	};
}());

// app.use(async (ctx, next) => {
//
// 	ctx.body = 'Hello World';
//
// });

/*
 * MODULE
 */

module.exports = {

	listen: function listen(port) {

		port = typeof port === 'number' ? port | 0 : null;

		if (port !== null) {

			app.listen(port);

			console.log('Listening on null:' + port);

			return true;
		} else {

			throw "listen(Number port): port is not a Number";
		}

		return false;
	}

};