// require express router
const router = require('express').Router();

// import all controllers
const {
    getAllUsers,
    addUser
} = require('../../controllers/user-controller');

// api/users endpoint
// GET all and POST
router
    .route('/')
    .get(getAllUsers)
    .post(addUser);

// api/users/:id
// GET by id, PUT, DELETE

// export router
module.exports = router;