const express = require('express'); //
const morgan = require('morgan');
const actionRouter = require('./routes/actionsRouter');

const server = express();

server.use(express.json());

// server.use(morgan());

server.use('/api/actions', actionRouter);

server.get('/', async (req, res) => {
	res.send(`
  <p>Welcome</p>
  `);
});
module.exports = server;
