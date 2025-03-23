const mongoose = require('mongoose');  //it contains all schema of the database

//connect to mongoose
mongoose.connect('mongodb+srv://sai123:UQgIJdWsJSnWyaP3@task-man.lcbwb.mongodb.net/course_selling').then(()=>{ console.log("connected")})
.catch((err)=>{
    console.log(err)
});

//Define schema 
const AdminSchema = new mongoose.Schema({
username: String,
password: String

})

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]

})

const CourseSchema= new mongoose.Schema({
title: String,
description: String,
imageLink: String,
price:Number
});

const Admin = mongoose.model('Admin',AdminSchema);
const User = mongoose.model('User',UserSchema);
const Course = mongoose.model('Course',CourseSchema);

module.exports={
    Admin,User,Course
}