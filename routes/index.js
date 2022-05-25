// require router from express
const router = require('express').Router();

// require files from api directory
const apiRoutes = require('./api');

// use api prefix
router.use('/api', apiRoutes);

// export router
module.exports = router;

