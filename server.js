const express = require('express')
const helmet = require('helmet')

// API ROUTERS
const loginRouter = require('./api/loginRouter')
const registerRouter = require('./api/registerRouter')
const usersRouter = require('./api/usersRouter')


const server = express();

server.use(express.json())
server.use(helmet());


server.use('/api/register', registerRouter);
server.use('api/login', loginRouter);
server.use('api/users', usersRouter);



server.get('/', (req, res) => {
  res.send(`<h1>Hello from the API</h1>`)
})


module.exports = server;