require('dotenv').config();
nodemailer = require('nodemailer');
const express = require('express');
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const path = require('path');
require('events').EventEmitter.defaultMaxListeners = 15;

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
        html: `<h1 style="text-align:center;">BREEZY PARADISE</h1>
        <h4 style="text-align:center;">Thank you for registering to Breezy Paradise. Welcome to the greatest traveling experience you will ever have!</h4>
        <div style="text-align:center;">
            <img src="https://xoxobella.com/wp-content/uploads/2021/08/vacation_instagram_captions_puns_quotes-1.jpg" width="380" height="280" />
        </div>`
    };

    transporter.sendMail(thanksEmail, function(error, info){
        if (error) {
            console.log('Mail not sent');
        } else {
            console.log('Email sent:' + info.messageId);
        }
    });
    },
    sendItinerary: async (req, res) => {
        let email = req.session.user.email;
        let itinerary = req.body.itinerary;
    const transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 587,
        secure: false,
        auth: {
            user: EMAIL_USERNAME,
            pass: EMAIL_PASSWORD,       
        }
    });
    const emailText = itinerary.reduce((acc, curr) => { 
        acc+=`<dt style="text-align:start;margin-bottom:10px;margin-top:10px;font-weight:bold;">Day: #${curr.dayNumber}</dt>  
        <dd style="text-align:start;">Attraction: ${curr.name}</dd>
        <dd style="text-align:start;">Hours: ${curr.durationHours}</dd> 
        <dd style="text-align:start;">Price: $${curr.price}</dd>`
        return acc
    }
        , 
        
        ''
        )
        const information =
            `<h1 style="text-align:center;">BREEZY PARADISE</h1>
        <div style="text-align:center;">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZ6lAaWXL_48DcDLastW4uMCl214J_cN6rw&usqp=CAU" width="380" height="280" />
        </div>
        <h3 style="text-align:center;" width="400;" height="280;">Dear Breezer, Thank you for choosing Breezy Paradise for your next greatest vacation! Here are all the details to your itinerary:</h3>
        <dl>${emailText}</dl>
        `
    
        const itineraryEmail = {
        from: EMAIL_USERNAME,
        to: email,
        subject: 'Upcoming Breezy Paradise Vacation',
        html: information,
    };

    transporter.sendMail(itineraryEmail, function(error, info) {
        if (error) {
            console.log('Mail not sent');
        } else {
            console.log('Email sent:' + info.messageId);
        }
    });
    }
};