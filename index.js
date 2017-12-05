var db = require('./db.js');
var jsonServer = require('json-server');

var server = jsonServer.create();
var router = jsonServer.router(db());
var middlewares = jsonServer.defaults();

router.render = function (req, res) {
  res.jsonp({
    type: 'FeatureCollection',
    features: res.locals.data
  });
};

server.use(middlewares);
server.use(router);

server.listen(3000, function () {
  console.log('Server is running on 3000 port');
});
