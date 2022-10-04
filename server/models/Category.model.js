const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    userID: {
        type: Number,
    }, Category: {
        type: String,
    }, subCategory: {
        type: String
    }, subCategoryNecessary: {
        type: Boolean
    }
})

module.exports = mongoose.model('Category', CategorySchema)