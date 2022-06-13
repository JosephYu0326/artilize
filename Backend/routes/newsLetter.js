const express = require("express");
const router = express.Router();
const db = require("../modules/mysql_config");
const https = require("https");

router.route('/')
.post(async (req, res, next) => {
    const firstname = req.body.fName;
    const lastname = req.body.lName;
    const email = req.body.email;

   const data = {
       members:[
           {
               email_address:email,
               status:"subscribed",
               merge_fields:{
                   FNAME:firstname,
                   LNAME:lastname
               }
           }
       ]
   };

   const jsonData = JSON.stringify(data);
   const url = process.env.MAILCHIMP_API;
   const options = {
       method:"POST",
       auth:process.env.MAILCHIMP_AUTH,
   }
   
   const request = https.request(url,options,function(response){
    
    response.on("data",function(data){
        res.send(JSON.parse(data));
        console.log(JSON.parse(data));
    })
   })

   request.write(jsonData);
   request.end();
});

module.exports = router;