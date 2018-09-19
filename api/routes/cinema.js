const express = require('express')
const route = express.Router()
const Cinema = require('../models/Cinema')


route.post('/insertCinema', async (req,res)=>{
    const cinemaName = req.body.cinemaName
    const movies = req.body.movies

    const cinema = new Cinema({cinemaName , movies})

    const savedCinema = await cinema.save()
    res.json({status : 1 , savedCinema})
})

route.get('/getSingleCinemaMovies',(req,res)=>{
    
})


module.exports = route