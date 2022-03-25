// require('dotenv').config();
const PORT = 3000;
const db_source = './database/webpage.db'

const path = require('path');
const express = require('express');
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);


const session = require('express-session');
const sqlite = require('sqlite3').verbose();

const session_values = {
	secret: '4445645645645645656456',
	resave: 'true',
	saveUninitialized: true
}

const auth = (req, res, next) => {
	if (req.session && req.session.user === 'harp' && req.session.admin) {
		return next();
	}
	else {
		return res.sendStatus(401);
	}
}

const routes = ['/getacoach', '/trainers', '/tools', '/becomeacoach', '/register', '/aboutus', '/contactus', '/joinus']

app.use('/', express.static(path.join(__dirname, '/frontend/build/')));


app.get(routes, (req, res) => {
	res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});


io.on('connection', (socket) => {

});

http.listen(PORT, () => {
	console.log('Server running on PORT: ', PORT);
});
