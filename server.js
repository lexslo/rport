// require express
const express = require('express');
// require mongoose
const mongoose = require('mongoose');
// require routes when set up
const routes = require('./routes');

// declare PORT
const PORT = process.env.PORT || 3001;
// store express instance in app variable
const app = express();

// use express.json
app.use(express.json());
// use express.urlencoded
app.use(express.urlencoded({ extended: true }));

// use routes when set up
app.use(routes);

// connect to mongoose database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/rport', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Log mongo queries being executed
mongoose.set('debug', true);

// listen on PORT
app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));