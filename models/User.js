// require mongoose Schema and model
const { Schema, model } = require('mongoose');

// create new schema with user data
const UserSchema = new Schema(
    {
        username: {
            type: String,
            trim: true,
            required: 'Must enter username',
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+\@.+\../, 'Must enter a valid email address']
        },
        password: {
            type: String,
            required: true,
            minlength: 8
        }
    }
)

const User = model('User', UserSchema);

module.exports = User;