const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();
// DB Config
const db = require('./config/keys').mongoURI;
// DB Connection

console.log(db);
mongoose
    .connect(db)
    .then(() => console.log('mongoDB connection successful!'))
    .catch((err) => { console.log(`Oh no! MongoDB connection fell through :( following error is reported: ${err}`) });

app.get('/', (req, res) => res.send('Hello World'));

// Use Routes

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
