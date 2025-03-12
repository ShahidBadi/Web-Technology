const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    categoryImage:String,
    categoryName: String
});

module.exports = mongoose.models.Category || mongoose.model('Category', categorySchema);