var express = require("express");
var bodyparser = require("body-parser");
const Openings = require("../models/Openings");
var jsonparser = bodyparser.json();
const router = express.Router();



router.post("/save", async (req, res) => {
    let body = req.body;
    console.log(body);
    console.log(res.data);
    
    let  job_list = new Openings();
    if (body.data.id != "") {
         job_list= await  Openings.findById(body.data.id);
    }
    job_list.position = body.data.position;
    job_list.companyid = body.data.companyid;
    job_list.description = body.data.description;
    job_list.city = body.data.city;
    job_list.openingdate = body.data.openingdate;
    job_list.closingdate = body.data.closingdate;

 
    
    job_list.save().then(result => {
        res.end(JSON.stringify(result));
    }, err => {
        res.end(JSON.stringify(err));
    });

});
router.post("/list", async (req, res) => {
    let job_list = await Openings.find();
    res.json({ data: job_list });
});
router.post("/get", async (req, res) => {
    let body = req.body;
    let job_list = await Openings.findById(body.data.id);
    res.json({ data: job_list });
});
router.post("/delete", async (req, res) => {
    let body = req.body;
    await Openings.findByIdAndDelete(body.data.id);
    let data = {
        "data":
        {
            "status": "success"
        }
    }
    res.end(JSON.stringify(data));
});
module.exports = router;     