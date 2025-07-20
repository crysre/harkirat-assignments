const jwt = require("jsonwebtoken")
require('dotenv').config();
const JWT_USER_SECRET = process.env.JWT_USER_SECRET;
const JWT_ADMIN_SECRET = process.env.JWT_ADMIN_SECRET


function userAuth(req, res, next){
    const token = req.headers.token;

    const check = jwt.verify(token, JWT_USER_SECRET)
    
    if(check){
        req.userId = check.id;
        next();
    }else{
        res.json({
            message: "Unauthorized"
        })
    }
}


function adminAuth(req, res, next){
    const token = req.headers.token;

    const check = jwt.verify(token, JWT_ADMIN_SECRET)
    
    if(check){
        req.userId = check.id;
        next();
    }else{
        res.json({
            message: "Unauthorized"
        })
    }
}

module.exports={
    userAuth,
    adminAuth,
    JWT_USER_SECRET,
    JWT_ADMIN_SECRET
}