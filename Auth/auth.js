const User = require("../model/User");

exports.register = async (req, res, next) => {
    const { name, email, password } = req.body;

    if ( password.length < 6 ) {
        return res.status(400).json({ message: "Password less than 6 characters "});
    }

    try {
        await User.create({
            name,
            email,
            password,
        }).then(user => 
            res.status(200).json({
                message: "User Successfully created",
                user,
            })
        )
    } catch(err) {
        res.status(401).json({
            message: "User not successfully created",
            error: err.message,
        })
    }
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body
    // check if email and password is provided
    if(!email || !password) {
        return res.status(400).json({
            message: "Username or Password not present",
        })
    }

    try {
        const user = await User.findOne( { email, password })
        if(!user) {
            res.status(401).json({
                 message: "Login not successful",
                 error: "User not found",
            }) 
        } else {
            res.status(200).json({
                message:" Login successful",
                user,
            })
        }
    }  catch(error) {
        res.status(400).json( {
            message: "An error occurred",
            error: error.message,
        })
    }
 }