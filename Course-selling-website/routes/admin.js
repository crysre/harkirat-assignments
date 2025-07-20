const {Router} = require("express");
const {AdminModel, CourseModel} = require("../db");
const bcrypt = require("bcrypt");
const {z} = require("zod")
const {JWT_ADMIN_SECRET, adminAuth} = require("../middleware/admin")
const jwt = require("jsonwebtoken");
const { courseRouter } = require("./course");
const mongoose = require("mongoose");


const adminRouter = Router();


adminRouter.post("/signup", async(req, res)=>{
    const requiredBody = z.object({
        email: z.string().min(3).max(50).email(),
        firstName: z.string().min(2).max(100),
        lastName:z.string().min(2).max(50),
        password:z.string().min(6).max(50)
    })

const parsedData = requiredBody.safeParse(req.body)

if(!parsedData.success){
    return res.status(404).json({
        message:"Wrong Credentials"
    })
}

const {email, firstName, lastName, password} = parsedData.data;

const hashedPassword = await bcrypt.hash(password, 5)
console.log(password);


try{
    await AdminModel.create({
        email:email,
        firstName:firstName,
        lastName:lastName,
        password:hashedPassword
    })

    res.status(200).json({
        message:"You are signed in"
    })
}catch(e){
    console.log(e);
    
}

})


adminRouter.post("/login", async(req, res)=>{
    
    const requiredBody = z.object({
        email: z.string().min(3).max(50).email(),
        firstName: z.string().min(2).max(100),
        lastName:z.string().min(2).max(50),
        password:z.string().min(6).max(50)
    })

const parsedData = requiredBody.safeParse(req.body)

if(!parsedData.success){
    return res.status(404).json({
        message:"Wrong Credentials"
    })
}

const {email, firstName, lastName, password} = parsedData.data;
    
    const findAdmin = await AdminModel.findOne({
        email:email
    })
    const passwordCheck = await bcrypt.compare(password, findAdmin.password)
    console.log(passwordCheck);

    if(passwordCheck){
        const token = jwt.sign({id:findAdmin._id.toString()}, JWT_ADMIN_SECRET)
        res.json({
            token:token
        })
    }else{
        res.status(404).json({
            message:"invalid credentials"
        })
    }
    
})


adminRouter.post("/course", adminAuth, async(req, res)=>{
    const adminId = req.adminId;
    const {title, description, price, imageUrl} = req.body
    

    try{const course = await CourseModel.create({
        creatorId:adminId,
        title,
        description,
        price,
        imageUrl
    })
    res.json({
        message: "Course created",
        courseId: course._id
    })
    }catch(e){
        console.log(e);
        
    }


    
    
})

adminRouter.put("/course", adminAuth, async(req, res)=>{
    const adminId = req.adminId;
    const {title, description, price, imageUrl, courseId} = req.body

    try{await CourseModel.findOneAndUpdate({
        creatorId:adminId,
        _id: courseId
    }, {$set: {title:title, description: description, price: price, imageUrl:imageUrl }});
    res.json({
        message:"updated"
    })
}catch(e){
    res.json({
        message:e
    })
}

})


adminRouter.get("/course/bulk",adminAuth, async (req, res)=>{
    const adminId = req.adminId;
    const courses = await CourseModel.find({
        creatorId:adminId
    })

    res.json({
        courses
    })
    
})

module.exports = {
    adminRouter:adminRouter
}