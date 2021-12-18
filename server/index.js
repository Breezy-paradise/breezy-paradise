require('dotenv').config();
const express = require('express');
const session = require('express-session')
const massive = require('massive');
const locationsCtrl = require('./controllers/locations');
const itineraryCtrl = require('./controllers/itinerary');
const { register, login, logout, getUser, usersOnly} = require('./controller/auth');

let { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

app.use(express.json());

app.use(
    session({
        secret: SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 90,    //90 days. 1000 milliseconds * 60sec * 60min * 24hrs * 90days
        }
    })
);

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    }
})
.then((db) => {
    app.set('db', db);
    console.log('Database connection established successfully')
})
.catch(err => {
    console.log('DB setup failed with error', err)
});

// //Locations Endpoints
app.get('/api/locations', locationsCtrl.getAllLocations);
app.get('/api/attractions/:location-id', locationsCtrl.getAttractions);

// //Itinerary Endpoints
app.post('/api/itinerary', itineraryCtrl.addItineraryItem);
app.delete('/api/itinerary/:id', itineraryCtrl.deleteItineraryItem);
app.get('/api/itinerary', itineraryCtrl.getLocationItinerary);
//authorization endpoints
app.post('/api/auth/register', register);
app.post('/api/auth/login', login);
app.post('/api/auth/logout', logout);
app.get('/api/auth/user', getUser);

app.listen(SERVER_PORT, () => console.log(`running on ${SERVER_PORT}`));
