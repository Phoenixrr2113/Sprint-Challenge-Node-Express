const express = require('express'); //
const morgan = require('morgan');

const server = express();

server.use(morgan);

server.get('/', async (req, res) => {
	res.send(`
  <p>Welcome</p>
  `);
});
module.exports = server;
