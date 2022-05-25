// require router from express
const router = require('express').Router();

// require files from api directory
const apiRoutes = require('./api');

// use api prefix
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('<h1>404 Error</h1>');
});

// export router
module.exports = router;

