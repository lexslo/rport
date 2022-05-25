// require router from express
const router = require('express').Router();

// define route for each file
const userRoutes = require('./user-routes');

// prefix /users
router.use('/users', userRoutes);

// export router
module.exports = router;
