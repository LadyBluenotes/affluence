const User = require('../models/User.model')

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

    try {
        const user = await User.create({ firstName, lastName, email, password });
        res.status(200).json(user);

    }catch (error){
        res.status(400).json({Error: error.message})
    }

    // check if user is in db
    // if user is in db display error message
    // if user is not in db, create user and redirect to user page
}

module.exports = { getLogin, loginUser, createUser, logout }