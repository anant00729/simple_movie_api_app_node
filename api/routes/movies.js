const express = require('express')
const route = express.Router()
const Movie = require('../models/Movies')


route.get('/dummy', (req,res)=>{
    res.json({name : 'Dummy'})
})

// async await 
route.post('/insertMovie', async (req,res)=>{
    const movieTitle = req.body.movieTitle
    const movieBanner = req.body.movieBanner

    try {
        const movie = new Movie({movieTitle,movieBanner})
        const createdMovie = await movie.save()
        res.json({status : 1 , movieObject : createdMovie})
    }catch(err){
        res.json({status : 0 , error : err.message})
    }
})


route.get('/getAllMovies', async (req,res)=>{
    try {

        const allMovies = await Movie.find()

        res.json({status : 1, allMovies : allMovies})


    }catch(err){
        res.json({status : false , messsage : err.message})
    }
})

module.exports = route