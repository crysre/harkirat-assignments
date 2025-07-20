const jwt = require("jsonwebtoken")
require('dotenv').config();
const JWT_USER_SECRET = process.env.JWT_USER_SECRET;


function userAuth(req, res, next){
    const token = req.headers.token;

    const decoded = jwt.verify(token, JWT_USER_SECRET)
    
    if(decoded){
        req.userId = decoded.id;
        next();
    }else{
        res.json({
            message: "Unauthorized"
        })
    }
}



module.exports={
    userAuth,
    JWT_USER_SECRET
}