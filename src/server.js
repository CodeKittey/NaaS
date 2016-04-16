
//var polyfill   = require('babel-polyfill');
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

 router.get('/api/int/:id', async (ctx, next) => {
	var data = null;
	if (data !== null) {

		ctx.body   = JSON.stringify(data, null, '\t');
		ctx.status = 200;

	} else {

		ctx.body   = { message: 'Status/ not found.' };
		ctx.status = 404;

	}

});

router.get('/api/int/:id', async (ctx, next) => {
	var data = null;
	if (data !== null) {

		ctx.body   = JSON.stringify(data, null, '\t');
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
