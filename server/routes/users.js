const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Users = require('../models/Users');
const nodemailer = require("nodemailer");


/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "yugshah0106",
        pass: "Sanketss@123"
    }
});

var rand,mailOptions,host,link;
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/
router.get('/send',function(req,res){
        rand=Math.floor((Math.random() * 100) + 54);
	host=req.get('host');
	link="http://"+req.get('host')+"/api/users/verify?id="+rand;
	mailOptions={
		to : req.query.to,
		subject : "Please confirm your Email account",
		html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>"
	}
	console.log(mailOptions);
	smtpTransport.sendMail(mailOptions, function(error, response){
   	 if(error){
        	console.log(error);
		res.end("error");
	 }else{
        	console.log("Message sent: " + response.message);
		res.end("sent");
    	 }
});
});

router.get('/verify',function(req,res){
console.log(req.protocol+":/"+req.get('host'));
if((req.protocol+"://"+req.get('host'))==("http://"+host))
{
	console.log("Domain is matched. Information is from Authentic email");
	if(req.query.id==rand)
	{
		console.log("email is verified");
		res.end("<h1>Email "+mailOptions.to+" is been Successfully verified");
	}
	else
	{
		console.log("email is not verified");
		res.end("<h1>Bad Request</h1>");
	}
}
else
{
	res.end("<h1>Request is from unknown source");
}
});


// http://localhost:3001/api/users/send?to=yug2all@gmail.com

/*--------------------Routing Over----------------------------*/
// router.get('/',(req,res) => Users.findAll()
// .then( user => {
//   res.sendStatus(200);
// })
// .catch(err => console.log(err)));
//
// router.get('/add',(req,res) => {
//  const data = {
//    name:"test",
//    email:"test@gmail.com"
//  }
//
// let {name,email} = data;
//
// Users.create({
//   name,
//   email
// })
//
// })

module.exports = router;
