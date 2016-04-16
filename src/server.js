
var polyfill   = require('babel-polyfill');
var Koa        = require('koa');
var BodyParser = require('koa-bodyparser');
var Router     = require('koa-router');
var cors = require('kcors');

const app    = new Koa();
const router = new Router();

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
 * ints/doubles in an array
 */


 router.get('/api/int', async (ctx, next) => {
	var query = ctx.query;
	var min = parseInt(query['min']) || 0;
	var max = parseInt(query['max']) || 1000;
	var data = parseInt(Math.floor(Math.random() * (max - min)) + min);

	if (data !== null) {

		ctx.body   = {type: 'int', value: data};
		ctx.status = 200;

	} else {

		ctx.body   = { message: 'Status/ not found.' };
		ctx.status = 404;

	}

});

router.get('/api/int/:id', async (ctx, next) => {
   var data = null;
   //TODO: get IntSavedBefore
   if (data !== null) {

	   ctx.body   = {type: 'int', value: data};
	   ctx.status = 200;

   } else {

	   ctx.body   = { message: 'Status/ not found.' };
	   ctx.status = 404;

   }

});

router.get('/api/double', async (ctx, next) => {
	var query = ctx.query;
	var dez = parseInt(query['dez']) || 2;
	var min = parseInt(query['min']) || 0;
	var max = parseInt(query['max']) || 1000;
	var frac = Math.pow(10, dez);

	var data = Math.round((Math.random() * (max - min) + min)*frac)/frac;

	if (data !== null) {

		ctx.body   = {type: 'double', value: data, dez: dez, max: max, min: min};
		ctx.status = 200;

	} else {

		ctx.body   = { message: 'Status/ not found.' };
		ctx.status = 404;

	}

});

router.get('/api/double/:id', async (ctx, next) => {
	var query = ctx.query;
	var dez = parseInt(query['dez']) || 2;
	var frac = Math.pow(10, dez);
	//TODO get the saved double
	var data = Math.round((Math.random() * (max - min) + min)*frac)/frac;
	if (data !== null) {

		ctx.body   = {type: 'double', value: data, dez: dez};
		ctx.status = 200;

	} else {

		ctx.body   = { message: 'Status/ not found.' };
		ctx.status = 404;

	}

});
/*
 * INITIALIZATION
 */

app.use(async (ctx, next) => {

	try {

		await next();

	} catch(err) {

		ctx.body   = { message: 'Internal error: ' + err.message };
		ctx.status = err.status || 500;

	}

});

/*
 * MODULE
 */

module.exports = {

	listen: function(port) {

		port = typeof port === 'number' ? (port | 0) : null;

		if (port !== null) {

			app.listen(port);

			console.log('Listening on null:' + port);

			return true;

		} else {

			throw 'listen(Number port): port is not a Number';

		}

	}

};
