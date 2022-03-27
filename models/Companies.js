const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema(
    {
        name:{type:String},
        address:{type:String},
        city:{type:String},

    }
);
const Companies = mongoose.model("companies", schema);
module.exports = Companies;  