const jwt = require("jsonwebtoken")
require('dotenv').config();
const JWT_ADMIN_SECRET = process.env.JWT_ADMIN_SECRET;

function adminAuth(req, res, next){
    const token = req.headers.token;

    const decoded = jwt.verify(token, JWT_ADMIN_SECRET)
    
    if(decoded){
        req.adminId = decoded.id;
        next();
    }else{
        res.json({
            message: "Unauthorized"
        })
    }
}

module.exports={
    adminAuth,
    JWT_ADMIN_SECRET
}