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
    image: {data: Buffer, contentType: String},
    dog_friendly: {type:Boolean},
    make_public: {type:Boolean}
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