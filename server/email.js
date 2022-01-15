require('dotenv').config();
nodemailer = require('nodemailer');
const express = require('express');

let { EMAIL_USERNAME, EMAIL_PASSWORD } = process.env;

const app = express();
app.use(express.json());

module.exports = {
    thanksForRegistering: (req, res) => {
        let email = req.body.email;
    
    const transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 587,
        secure: false,
        auth: {
            user: EMAIL_USERNAME,
            pass: EMAIL_PASSWORD,       
        }
    });
    
    const thanksEmail = {
        from: EMAIL_USERNAME,
        to: email, // '544744b251-687e65@inbox.mailtrap.io'
        subject: 'Breezy Paradise Thanks You!',
        html: '<h1>Thank you for registering to Breezy Paradise. Welcome to the greatest traveling experience you will ever have!</h1>',
    };

    transporter.sendMail(thanksEmail, function(error, info){
        if (error) {
            console.log('Mail not sent');
        } else {
            console.log('Email sent:' + info.messageId);
        }
    });
    },
    sendItinerary: (req, res) => {
        let email = req.body.email;
    
    const transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 587,
        secure: false,
        auth: {
            user: EMAIL_USERNAME,
            pass: EMAIL_PASSWORD,       
        }
    });
    
    const itineraryEmail = {
        from: EMAIL_USERNAME,
        to: email,
        subject: 'Upcoming Breezy Paradise Vacation',
        html: '<h1>Dear {{username}},</h1><p>Thank you for choosing Breezy Paradise for your next greatest vacation! Here are all the details to your itinerary:</p>',
    };

    transporter.sendMail(itineraryEmail, function(error, info){
        if (error) {
            console.log('Mail not sent');
        } else {
            console.log('Email sent:' + info.messageId);
        }
    });
}
};