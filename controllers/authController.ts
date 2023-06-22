const User = require('../models/user.ts');
const bcrypt = require('bcrypt');

// Register controller
exports.register = (req, res) => {
    const { username, password } = req.body;

    User.checkUsernameExists(username, (err, existingUser) => {
        if (err) {
            console.log('Error finding user');
        } else if (existingUser) {
            // Username already exist
            res.status(400).json({ error: "Username already exists" })
        } else {
            // Hash the password
            bcrypt.hash(password, 10, (err, hashedPassword) => {
                if (err) {
                    console.error('Error hashing password');
                    res.status(500).json({ error: 'Internal Server Error' });
                } else {
                    // Create new user
                    User.create(username, password, (err) => {
                        if (err) {
                            console.log('Error creating user');
                            res.status(500).json({ error: 'Internal Server Error' })
                        }else{
                            res.json({message:'User registerd successfully'})
                        }
                    });
                }
            });
        }
    });
}