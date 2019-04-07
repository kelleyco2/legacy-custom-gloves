
const nodemailer = require('nodemailer');
require('dotenv').config()

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth: {
        type: "login",
        user: process.env.MY_EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
})

module.exports = {

sendQuestion: (req,res,next) => {
    const { name, email, message} = req.body;
     
             let mailOptions = {
                 from:  email, // sender address
                 to: process.env.MY_EMAIL, // list of receivers
                 subject: 'Question from Legacygloves.com', 
                 text: `${name}
                        ${email}
                        ${message}` 
               };
             
             transporter.sendMail(mailOptions, (error, response) => {
                 if (error) {
                     return console.log(error);
                 }else{
                     res.status(200).send(response)
                    } 
             });
         
  }

}