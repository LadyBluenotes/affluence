const User = require('../models/User.model')

const getLogin = (req, res) => {

}

const loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email })
        if (!user) {
            res.status(401).json({
                message: 'Login was not successful.',
                error: "Email not found."
            })
        } else if (user && (await user.comparePassword(password))){
            res.json({
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            })

        } else {

            res.status(200).json({
                message: "Successful login.",
                user
            })
        }
    } catch(err) {
        res.status(400).json({
            message: "Error has occured.",
            err: err.message
        })
    }
}

const logout = (req, res) => {

}

const createUser = async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;

    if (password.length < 8) {
        return res.status(400).json({ message: "Please ensure password is a minimum of 8 characters long." })
      }

    const existUser = await User.findOne({ email });
    if (existUser) {
        const error = new Error("Email already in use. Please try another.");
        return res.json({ msg: error.message });
    }

    try {
        const user = await User.create({ firstName, lastName, email, password });
        
        res.status(200).json({
            message: "User successfully created.",
            user,
          });

    }catch (Error){
        res.status(400).json({
            message: "Error creating user.",
            error: err.mesage,
          })
    }
}

module.exports = { getLogin, loginUser, createUser, logout }