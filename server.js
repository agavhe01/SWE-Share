// simple server
const express = require('express');

// Require the mongo DB
const connectDB = require('./config/db');

// intialize app var with express
const app = express();

// Connect Database
connectDB();

// single endpoint
app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));