const express = require('express')
const route = express.Router()
const Movie = require('../models/Movies')


// async await 
route.post('/insertMovie', async (req,res)=>{
    const movieTitle = req.body.movieTitle
    const movieBanner = req.body.movieBanner

    try {
        const movie = new Movie({movieTitle,movieBanner})

        const createdMovie = await movie.save()

        res.json({status : 0 , movieObject : createdMovie})



        
    }catch(err){

    }

    
    res.json(req.body)



})
module.exports = route