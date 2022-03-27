const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema(
    {
        companyid:{type:String},
        position:{type:String},
        description:{type:String},
        city:{type:String},
        openingdate:{type:String},
        closingdate:{type:String},
 
        
    }
);
const Openings = mongoose.model("openings", schema);
module.exports = Openings;  