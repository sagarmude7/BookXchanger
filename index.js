const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

//port
const PORT = process.env.PORT || 5000;


//Loads .env file contents into | process.env.
dotenv.config({path:'./config/config.env'})

const app = express()

//connect to database
connectDB()


//body parser middleware for accepting json
app.use(express.json({limit:"30mb",extended:true}))

//middleware for accepting data from forms
app.use(express.urlencoded({limit:"30mb",extended:true}))

// //sending and receiving images data through form or json
// //limit : Controls the maximum request body size.
// app.use(body_parser.json({limit:"30mb",extended:true}))
// app.use(body_parser.urlencoded({limit:"30mb",extended:true}))

//cross origin request
app.use(cors())

//routes
app.use('/books/',require('./routes/books'))
app.use('/users/',require('./routes/users'))

app.listen(PORT,()=>console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`))