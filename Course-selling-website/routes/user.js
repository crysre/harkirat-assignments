const {Router} = require("express")
const jwt = require("jsonwebtoken");
const {z} = require("zod")
const {UserModel, CourseModel, PurchasesModel} = require("../db.js");
const bcrypt = require("bcrypt")
const {userAuth, JWT_USER_SECRET} = require("../middleware/user.js");


const userRouter = Router();

userRouter.post('/login', async(req, res)=>{
    
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
    
    try{
        
    const user = await UserModel.findOne({
        email:email
    })

    const passwordCheck = await bcrypt.compare(password, user.password)
    console.log(passwordCheck);
    
    
    if(passwordCheck){
        const token = jwt.sign({id:user._id.toString()},JWT_USER_SECRET)
        console.log(token);
        res.status(200).json({
            token: token
        })
    }

    }catch(e){
        console.log(e)
        res.json({
            message:"Error"
        })
    }

})

userRouter.post('/signup', async (req, res)=>{
    
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


    try{
        await UserModel.create({
            email:email,
            firstName:firstName,
            lastName: lastName,
            password:hashedPassword
        })

        res.status(200).json({
            message:"You're signed up"
        })
    }catch(e){
        console.log(e);
        res.json({
            message:"Error"
        })
        
    }
    
})



userRouter.get('/purchases',userAuth, async(req, res)=>{
    const userId = req.userId;
    const puchases = await PurchasesModel.find({
        userId
    })

    const courseData = await CourseModel.find({
        _id: { $in: puchases.map(x=>x.courseId)}
    })

    console.log(puchases);
    
    res.json({
        puchases,
        courseData
    })

})

module.exports = {
    userRouter:userRouter
}