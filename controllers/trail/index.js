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
} catch(err) {
    console.log(err)
}
})

//New
router.get("/new", (req,res) => {
    res.render("trail/new.jsx")
})

//Destroy
router.delete("/:id", auth, async(req,res) => {
    try{
        await Trail.findByIdAndRemove(req.params.id)
        res.redirect("/trail/")
    } catch(err) {
        console.log (err)
    }
})

//Update
router.put("/:id", auth, async (req,res) => {
    if (req.body.dog_friendly === "on") {
        req.body.dog_friendly = true;
    } else {
        req.body.dog_friendly = false;
    }
    // try {
        req.body.username = req.session.username
        await Trail.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true},
            (err, updatedModel) => {
                res.redirect("/trail")
            }
        )})
            // res.redirect('/trail/')
    // } catch(err) {
    //     console.log(err)
    // }


//Create
router.post("/", auth, async(req,res) => {
    if (req.body.dog_friendly === 'on') {
        req.body.dog_friendly = true;
    } else {
        req.body.dog_friendly = false;
    }
    try{
    req.body.username = req.session.username
    const newTrail = await Trail.create(req.body)
    res.redirect("/trail/")
    } catch(err) {
        console.log(err)
    }
})

//Edit
router.get("/:id/edit", auth, async (req,res) => {
    try{
        const trail = await Trail.findById(req.params.id)
        res.render("trail/edit.jsx", {trail})
    } catch(err) {
        console.log(err)
    }
})

//Show
router.get("/:id", auth, (req,res) => {
    try{
        Trail.findById(req.params.id, (err, foundTrail)=> {
            console.log(foundTrail)
            res.render("trail/show.jsx", {trails: foundTrail})
        })
    } catch(err) {
        console.log(err)
    }
})

module.exports = router;