// variable var and let

// constant const 

const express = require('express')
const mongoose = require('mongoose')
const moviesRoute = require('./api/routes/movies')
const bodyParser = require('body-parser')


const app = express()

// DB URL : 
// GET POST DELETE PUT INSERT PATCH
// USE

mongoose.connect('mongodb://anant007:anant007@ds161112.mlab.com:61112/movies-db-onkar')
.then(()=>console.log('Successfully connected to mongo DB'))
.catch(err => console.log('err.message :', err.message))

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())




app.get('/getAllMovies', (req,res)=>{
    res.json(data)
})


app.use('/movies',moviesRoute)


app.use((req,res)=>{
    res.json({message : 'welcome to the movies api app'})
})

app.listen(3000,()=>{
    console.log('the app is running on port number 3000');
})