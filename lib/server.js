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
/*
 * TODO: IDEAS
 * maybe allow negative number
 * different representations for number (string)
 * api for questioning if number is positive oder not
 * ints and floats as array
 */

router.get('/api/int', function () {
	var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
		var query, min, max, data;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						query = ctx.query;
						min = parseInt(query['min']) || 0;
						max = parseInt(query['max']) || 1000;
						data = parseInt(Math.floor(Math.random() * (max - min)) + min);


						if (data !== null) {

							ctx.body = { type: 'int', value: data, max: max, min: min };
							ctx.status = 200;
						} else {

							ctx.body = { message: 'Status/ not found.' };
							ctx.status = 404;
						}

					case 5:
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

router.get('/api/int/:id', function () {
	var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx, next) {
		var data;
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						data = parseInt(ctx.params.id);
						//TODO: get IntSavedBefore

						if (data !== null) {

							ctx.body = { type: 'int', value: data };
							ctx.status = 200;
						} else {

							ctx.body = { message: 'Status/ not found.' };
							ctx.status = 404;
						}

					case 2:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function (_x3, _x4) {
		return ref.apply(this, arguments);
	};
}());

router.get('/api/float', function () {
	var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(ctx, next) {
		var query, precision, min, max, data;
		return regeneratorRuntime.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						query = ctx.query;
						precision = parseInt(query['precision']) < 21 ? parseInt(query['precision']) : 2;
						min = parseInt(query['min']) || 0;
						max = parseInt(query['max']) || 1000;
						data = (Math.random() * (max - min) + min).toFixed(precision);


						if (data !== null) {

							ctx.body = { type: 'float', value: data, precision: precision, max: max, min: min };
							ctx.status = 200;
						} else {

							ctx.body = { message: 'Status/ not found.' };
							ctx.status = 404;
						}

					case 6:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, undefined);
	}));

	return function (_x5, _x6) {
		return ref.apply(this, arguments);
	};
}());

router.get('/api/float/:id', function () {
	var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(ctx, next) {
		var query, precision, id, data;
		return regeneratorRuntime.wrap(function _callee4$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						query = ctx.query;
						precision = parseInt(query['precision']) || 2;
						id = parseFloat(ctx.params.id);
						//TODO get the saved float

						data = id.toFixed(precision);

						if (data !== null) {

							ctx.body = { type: 'float', value: data, precision: precision };
							ctx.status = 200;
						} else {

							ctx.body = { message: 'Status/ not found.' };
							ctx.status = 404;
						}

					case 5:
					case 'end':
						return _context4.stop();
				}
			}
		}, _callee4, undefined);
	}));

	return function (_x7, _x8) {
		return ref.apply(this, arguments);
	};
}());
/*
 * INITIALIZATION
 */

app.use(function () {
	var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(ctx, next) {
		return regeneratorRuntime.wrap(function _callee5$(_context5) {
			while (1) {
				switch (_context5.prev = _context5.next) {
					case 0:
						_context5.prev = 0;
						_context5.next = 3;
						return next();

					case 3:
						_context5.next = 9;
						break;

					case 5:
						_context5.prev = 5;
						_context5.t0 = _context5['catch'](0);


						ctx.body = { message: 'Internal error: ' + _context5.t0.message };
						ctx.status = _context5.t0.status || 500;

					case 9:
					case 'end':
						return _context5.stop();
				}
			}
		}, _callee5, undefined, [[0, 5]]);
	}));

	return function (_x9, _x10) {
		return ref.apply(this, arguments);
	};
}());

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

			throw 'listen(Number port): port is not a Number';
		}
	}

};