// import express
const express = require('express');
// import dotenv for configuration of environmental variables
require('dotenv').config();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const path = require('path');


// initialize express app
const app = express();
// initialize the port by either using the environmental PORT  variable or 5000 if unset
const port = process.env.PORT || 5000;

mongoose.connect(process.env.DB, { useNewUrlParser: true})
	.then( () => {
		return console.log(`Database connected successfully`);
	})
	.catch(err => console.log(err));

mongoose.Promise = global.Promise;


// configure CORS to allow scripts from other domains  
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

	next();
});

app.use(bodyParser.json());

app.use('/api', routes);

app.use((err, req, res, next) => {
	console.log(err);
	next()
});


app.listen(port, () => {
	console.log(`Server running on port ${port}`)
});
