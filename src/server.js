
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
 * ints and floats as array
 */


 router.get('/api/int', async (ctx, next) => {
	var query = ctx.query;
	var allowNegative = query['allowNegative'] === 'true';

	var max = parseInt(query['max'], 10) || 1000;
	var min = (parseInt(query['min'], 10) || 0) < 0 && allowNegative !== true ? 0 : (parseInt(query['min'], 10) || 0);
	var count = parseInt(query['count'], 10)  < 122 ? parseInt(query['count'], 10) : 1;

	var arrInt = []; arrInt.length = count;
	var i = 0;
	while ( i < count ) { arrInt[i] = parseInt(Math.floor(Math.random() * (max - min)) + min, 10); i++; }

	var data = count > 1 ? arrInt : arrInt[0];

	if (data !== null) {

		ctx.body   = {type: 'int', value: data, max: max, min: min};
		ctx.status = 200;

	} else {

		ctx.body   = { message: 'Status/ not found.' };
		ctx.status = 404;

	}

});

router.get('/api/int/:id', async (ctx, next) => {

	var data = parseInt(ctx.params.id, 10);
//TODO: get IntSavedBefore
	if (data !== null) {

		ctx.body   = {type: 'int', value: data};
		ctx.status = 200;

	} else {

		ctx.body   = { message: 'Status/ not found.' };
		ctx.status = 404;

	}

});

router.get('/api/float', async (ctx, next) => {
	var query = ctx.query;
	var precision = ((parseInt(query['precision'], 10) < 21) ? parseInt(query['precision']) : 2);
	var allowNegative = query['allowNegative'] === 'true';

	var min = (parseInt(query['min'], 10) || 0) < 0 && allowNegative !== true ? 0 : (parseInt(query['min'], 10) || 0);
	var max = parseInt(query['max'], 10) || 1000;
	var count = parseInt(query['count'], 10) < 122 ? parseInt(query['count'], 10) : 1;

	var arrFloat = []; arrFloat.length = count;
	var i = 0;
	while ( i < count ) { arrFloat[i] = parseFloat(((Math.random() * (max - min)) + min).toFixed(precision)); i++; }

	var data = count > 1 ? arrFloat : arrFloat[0];

	if (data !== null) {

		ctx.body   = {type: 'float', value: data, precision: precision, max: max, min: min};
		ctx.status = 200;

	} else {

		ctx.body   = { message: 'Status/ not found.' };
		ctx.status = 404;

	}

});

router.get('/api/float/:id', async (ctx, next) => {
	var query = ctx.query;
	var precision = parseInt(query['precision'], 10) || 2;
	var id = parseFloat(ctx.params.id);
	//TODO get the saved float
	var data = parseFloat(id.toFixed(precision));
	if (data !== null) {

		ctx.body   = {type: 'float', value: data, precision: precision};
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
