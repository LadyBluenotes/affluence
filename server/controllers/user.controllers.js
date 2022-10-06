const User = require('../models/User.model')
const validator = require('validator')

const getLogin = (req, res) => {
    // if user is already in valid session, redirect to user page
    res.json({mssg: 'login user'})
}

const loginUser = (req, res, next) => {
    // check if email and password are valid

    // if not valid display error message

    // if valid redirect to user page
    res.json({mssg: 'login user'})
}

const logout = (req, res) => {
    // logout user when button is pressed
    res.json({mssg: 'log out user'})
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