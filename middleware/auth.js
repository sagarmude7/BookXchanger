const jwt = require('jsonwebtoken')

const auth = (req,res,next)=>{
    try {
        //get token from header
        const token = req.headers.authorization.split(" ")[1];

        //verify token
        if(token){
            const decodedData = jwt.verify(token,process.env.TOKEN_SECRET)
            //attach user id to request object
            req.userId = decodedData?.id
        }

        next()
        
    } catch (err) {
        console.log(err)
    }
}

module.exports = auth

