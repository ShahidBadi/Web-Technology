const mongoose = require('mongoose');

const schema = mongoose.Schema({
    facultyname: String,
    facultyMobile: Number,
    facultyEmail: String,
});

module.exports = mongoose.model("Student",schema);