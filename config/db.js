const mongoose = require('mongoose')

//Connect to database
const connectDB = async()=>{
    try{
        const conn =await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify:false
        })
        console.log(`MongoDB connected ${conn.connection.host} `)
    }catch(err){
        console.log(`Error occured:${err.message}`)
        process.exit(1)
    } 
}

// mongodb+srv://Bookxchanger:Book@12341234@bookxchanger.hvboa.mongodb.net/Booxchanger?retryWrites=true&w=majority

module.exports = connectDB