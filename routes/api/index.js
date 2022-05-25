// require router from express
const router = require('express').Router();

// define route for each file
const userRoutes = require('./user-routes');

// prefix user
router.use('/user', userRoutes);

// export router
module.exports = router;
