// require model(s)
const User = require('../models/User');

// userController CRUD operations
const userController = {

    getAllUsers(req, res) {
        User.find()
            // remove __v from results
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    }
}

// export userController
module.exports = userController;