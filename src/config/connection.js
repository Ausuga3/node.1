const mongoose = require('mongoose')

const URI = "mongodb+srv://ausuga3:usuga@adso2846458.hnkr9.mongodb.net/Adso58"

mongoose.connect(URI)

module.exports = mongoose;