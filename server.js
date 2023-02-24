// simple server
const express = require('express');

// intialize app var with express
const app = express();

// single endpoint
app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));