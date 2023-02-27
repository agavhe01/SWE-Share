// simple server
const express = require('express');

// path module
const path = require('path');

// Require the mongo DB
const connectDB = require('./config/db');

// intialize app var with express
const app = express();

// Connect Database
connectDB();

/// Init middlewre
app.use(express.json({ extended: false }));

// single endpoint disabled at deploy
//app.get('/', (req, res) => res.send('API Running'));

// define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Serve static assets in production

// check for pod
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
