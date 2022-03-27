var express = require("express");
var bodyparser = require("body-parser");
var jsonparser = bodyparser.json();
const Admin = require("../models/Admins");
const router = express.Router();

router.post("/login", async(req, res)=>{

    let body = req.body;
    console.log(body)

    // let admin = await Admin.find().and([{email: body.data.email}, {password: body.data.password}]);
    let admin= await Admin.find().and([{email: body.data.email},{password:body.data.password}]);
    console.log(body);
    console.log(data);

    let data = {
        "data":
        {
            "status":"failed"
        }
    }
    if(admin.length != 0)
    {
        let authkey = (Math.random() + 1).toString(36).substring(2);

        admin = await Admin.findById(admin[0]._id);
        admin.authkey = authkey;
        admin.save();
        data = {
            "data":
            {
                "status":"success",
                "id":admin._id,
                "name":admin.name,
                "email":admin.email,
                "authkey":authkey
            }
        }
    }
    res.end(JSON.stringify(data));
});

module.exports = router;