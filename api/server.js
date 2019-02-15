const express = require('express'); //
const morgan = require('morgan');
const actionRouter = require('./routes/actionsRouter');
const projectRouter = require('./routes/projectsRouter');

const server = express();

server.use(express.json());

// server.use(morgan());

server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);

server.get('/', async (req, res) => {
	res.send(`
  <p>Welcome</p>
  `);
});
module.exports = server;
