// require express
const express = require('express');
// require sequelize
const sequelize = require('sequelize');
// require routes when set up

// declare PORT
const PORT = process.env.PORT || 3001;
// store express instance in app variable
const app = express();

// use express.json
app.use(express.json());
// use express.urlencoded
app.use(express.urlencoded({ extended: true }));

// use routes when set up

// sync sequelize models to database, listen on port
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on PORT ${3001}`));
});