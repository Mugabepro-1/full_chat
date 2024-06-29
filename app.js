const bodyParser = require('body-parser')
const express =require('express')
const mongoose =require('mongoose')
const morgan = require('morgan')
const app = express()

app.use(bodyParser.json())
app.use(morgan('tiny'))




const port  = process.env.port || 3000
app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`)
})

mongoose
.connect('mongodb://127.0.0.1:27017/chat')
.then(()=>{
    console.log('Connected to mongodb')
})
.catch(()=>{
    console.log('Failed to conect to mongodb')
})

