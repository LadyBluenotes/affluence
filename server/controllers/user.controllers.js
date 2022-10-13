const User = require('../models/User.model');

const getLogin = (req, res) => {
    try {
        if (req.user) {
            res.json({
                msg: 'User already logged in.'
            })
          }
    } catch(err) {
        res.json({
            msg: err.message
        })
    }
}

const loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email })
        
        if (!user) {

            res.status(401).json({
                msg: 'Login was not successful.',
                error: 'Email not found.'
            })

        } else if (user && (await user.comparePassword(password))){
            req
            res.status(200).json({
                msg: 'Login successful',
                "user": {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    hashPassword: user.password
                }
            })
            // redirect to home page
        }
    } catch(err) {
        res.status(400).json({
            message: "Error has occured.",
            err: err.message
        })
    }
}

const logout = (req, res) => {
    req.session.destroy(function (error) {
        if (error) next(error);
        else res.status(200).json({ message: "Succesfully disconnected." });
      });
}

const createUser = async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;

    if ( !email || !password ) {
        return res.status(401).json({ msg: 'Password and email are required.' })
    }

    if (password.length < 8) {
        return res.status(400).json({ msg: "Please ensure password is a minimum of 8 characters long." })
      }

    const existUser = await User.findOne({ email });
    if (existUser) {
        const error = new Error("Email already in use. Please try another.");
        return res.json({ msg: error.message });
    }

    try {
        const user = await User.create({ firstName, lastName, email, password });
        res.cookie('email', email)
        console.log(req.session)
        res.status(200).json({
            message: "User successfully created.",
            user,
          });

          //redirect to home page
    }catch (err){
        res.status(400).json({
            message: "Error creating user.",
            error: err.message
          })
    }
}

module.exports = { getLogin, loginUser, createUser, logout }