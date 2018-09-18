const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    movieTitle : String, 
    movieBanner : String
})

module.exports = mongoose.model('movies', movieSchema)