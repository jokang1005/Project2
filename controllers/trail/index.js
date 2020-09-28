//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const {Router} = require("express");
const bcrypt = require("bcryptjs")
const Trail = require("../../models/trail")
const auth = require("../authmiddleware")

///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////

const router = Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////

//Index
router.get("/", auth, async(req,res) => {
    try{
    const trails = await Trail.find({username: req.session.username})
    res.render("trail/index.jsx", {trails})
} catch {err} {
    console.log(err)
}
})

//New
router.get("/new", (req,res) => {
    res.render("trail/new.jsx")
})

//Destroy


//Update


//Create


//Edit


//Show

module.exports = router;