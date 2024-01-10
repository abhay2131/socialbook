// const User = require("../model/User");
const User = require('../model/user');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const jsonSecret = process.env.jsonSecret



exports.register = async (req, res, next) => {
    const { name, email, password } = req.body;

    if ( password.length < 6 ) {
        return res.status(400).json({ message: "Password less than 6 characters "});
    }
    
    bcrypt.hash(password, 10).then(async (hash) => {
        await User.create({
            name,
            email,
            password: hash,
        })
          .then((user) => {
            res.status(200).json({
                message: "User successfully created",
                user,
            })
          })
          .catch((error) => {
            res.status(400).json({
                message: "User not successfully created",
                error: error.message,
            })
          })
    })
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body
    // check if email and password is provided
    if(!email || !password) {
        return res.status(400).json({
            message: "email or Password not present",
        })
    }

    try {
        const user = await User.findOne( { email })
        if(!user) {
            res.status(400).json({
                 message: "Login not successful",
                 error: "User not found",
            }) 
        } else {
            // compare the given password with the hashed password 
            bcrypt.compare(password, user.password).then( function (result) {
                result 
                ? res.status(200).json({
                    message: "Login successful",
                    user,
                })
                : res.status(400).json({
                    message: "Login not succesful"
                });
            })
        }
    }  catch(error) {
        res.status(400).json( {
            message: "An error occurred",
            error: error.message,
        })
    }
 }

 exports.getUsers = async(req, res, next) => {

 }



