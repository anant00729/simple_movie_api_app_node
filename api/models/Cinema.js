const mongoose = require('mongoose')
const cinemaSchema = mongoose.Schema

// 1 cinema -> n

const cinemaModel = cinemaSchema({
    cinemaName : String, 
    movies : [{ type :  mongoose.Schema.Types.ObjectId,ref : 'movies' }]
})

module.exports = mongoose.model('cinemas', cinemaModel)