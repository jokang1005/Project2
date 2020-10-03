///////////////////////////////////
// IMPORT SCHEMA AND MODEL
///////////////////////////////////
const {Schema, model} = require("mongoose")

////////////////////////////////////
// CREATE SCHEMA
////////////////////////////////////

const trailSchema = new Schema({
    username: {type: String, required: true},
    name: {type:String, required: true},
    image: {type: String, required: true},
    dog_friendly: {type:Boolean},
    public: {type:Boolean}
},
{timestamps: true}
)

////////////////////////////////////
// CREATE MODEL
////////////////////////////////////

const Trail = model("trail", trailSchema)

////////////////////////////////////
// EXPORT MODEL
////////////////////////////////////

module.exports = Trail;