const {Router}= require("express"); //You’re importing just the Router function from Express for concise route handling. 
const adminMiddleware = require("../middleware/admin"); //double dots indicate that the file is locted in parent directory
const router = Router();  //You’re creating a router instance to define routes, likely protected by adminMiddleware. same as express.Router()
const {Admin, Course} = require('../db/index')

//doesnot mean this handles the /signup endpoint 
//it handles /admin/signup logic
//Admin Routes
router.post('/signup',(req,res)=>{
    //implement admiin signup logic
const username= req.body.username;
const password= req.body.password;
console.log(username)
console.log(password)
            

// check if a user with this username already exists
Admin.create({
    username:username, 
    password:password

})
.then(()=>{
    res.json({
        msg: "Admin Created succesfully!!"
    })

})
.catch((err)=>{
    console.log(err)
})


})




router.post('/courses',adminMiddleware,(req,res)=>{

    //implement course creation logic

    const title = req.body.title;
    const description = req.body.description;
    const imageLink =req.body.imageLink;
    const price= req.body.price;

    //zod for checking the inputs

    Course.create({
        title,
        description,
        imageLink,
        price
    })
    .then((newCourse)=>{
        console.log(newCourse)
        res.json({
            msg:"Course Created Successfully!!",courseId: newCourse._id
    
        })
    })
   
   

});





router.get('/courses',adminMiddleware, async (req, res)=>{   //protected by admin middleware
    //implement fetching all courses logic
const response =await Course.find({});
res.json({
    Courses: response
})

});



module.exports = router ;


/*  some directory things ***/

/* Single Dot (.) vs. Double Dots (..)
. → Current directory (e.g., ./helper.js means a file in the same folder).
.. → Parent directory (e.g., ../middleware/admin.js means one level up).

*/
