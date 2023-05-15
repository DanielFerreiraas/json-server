const jsonServer = require('json-server');
const data = require('./db.json');

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

router.db._.mixin({
  write: () => true
});

server.listen(process.env.PORT || 5000, () => {
  console.log('JSON Server is running');
});
