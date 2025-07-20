const express = require("express");
const mongoose = require("mongoose");
const {userRouter} = require("./routes/user.js");
const {courseRouter} = require("./routes/course.js");
const {adminRouter} = require("./routes/admin.js");
require('dotenv').config();


const app = express();
const port = process.env.PORT;

app.use(express.json())

app.use("/user", userRouter)
app.use("/course", courseRouter)
app.use("/admin", adminRouter)


async function main(){
    await mongoose.connect(process.env.DB_URL)
    
    app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
    
})
}

main();
