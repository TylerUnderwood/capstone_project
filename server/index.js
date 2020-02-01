const express = require('express');
const bodyParser = require('body-parser');
// const usersRouter = require('./routers/users');
// const authRouter = require('./routers/auth');
const charactersRouter = require('./routers/characters');
const { logger } = require('./middleware')
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(logger)
// app.use('/api/users', usersRouter)
// app.use('/api/auth', authRouter)
app.use('/api/characters', charactersRouter)

// app.get('/', (req, res) => {
// 	res.send('<h1>Welcome to the server yo!!<h1>')
// })

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(express.static(path.join(__dirname, "../build")));

app.get('*', (req, res) => {
	console.log('GETTING');
	res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
	console.log(`Web server is listening on port ${port}!`);
});
