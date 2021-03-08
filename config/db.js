const mongoose = require('mongoose')

//Connect to database
const connectDB = async()=>{
    try{
        const conn =await mongoose.connect(`mongodb+srv://Bookxchanger:Book@12341234@bookxchanger.hvboa.mongodb.net/Booxchanger?retryWrites=true&w=majority`,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB connected ${conn.connection.host} `)
    }catch(err){
        console.log(`Error occured:${err.message}`)
        process.exit(1)
    } 
}

module.exports = connectDB