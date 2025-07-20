const {Router} = require("express");
const {CourseModel, PurchasesModel} = require("../db")
const mongoose = require("mongoose");
const { userAuth } = require("../middleware/user");
const courseRouter = Router();

courseRouter.post('/purchase',userAuth,  async(req, res)=>{
    const userId = req.userId;
    const courseId = req.body.courseId;

    const purchased = await PurchasesModel.create({
        courseId,
        userId
    })

    res.json({
        message: "Purchase Initiated"
    })
})

courseRouter.get('/preview', async(req, res)=>{
    const courses = await CourseModel.find({});
    res.json({
        courses
    })
})

module.exports ={
    courseRouter: courseRouter
}