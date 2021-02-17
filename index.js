// import express
const express = require('express');
// import dotenv for configuration of environmental variables
require('dotenv').config();

// initialize express app
const app = express();
// initialize the port by either using the environmental PORT  variable or 5000 if unset
const port = process.env.PORT || 5000;

// configure CORS to allow scripts from other domains  
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

	next();
});

app.use((req, res, next) =>{
	res.send('Welcome to Express');
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
});
