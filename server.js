require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();

const routes = ['/getacoach', '/trainers', '/tools', '/becomeacoach', '/register', '/aboutus', '/contactus', '/joinus']

app.use('/', express.static(path.join(__dirname, '/frontend/build/')));


app.get(routes, (req, res) => {
	res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});


app.listen(process.env.PORT, () => {
	console.log('Server running on PORT: ', process.env.PORT);
});
