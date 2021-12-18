require('dotenv').config();
const express = require('express');
const session = require('express-session')
const massive = require('massive');
// const userCtrl = require('./controllers/auth');
const locationsCtrl = require('./controllers/locations');
const itineraryCtrl = require('./controllers/itinerary');

let { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

app.use(express.json());

app.use(
    session({
        secret: SESSION_SECRET,
        resave: true,
        saveUninitialized: true
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
});

//Auth Endpoints
// app.post('/api/auth/register', userCtrl.register);
// app.post('/api/auth/login', userCtrl.login);
// app.post('/api/auth/logout', userCtrl.logout);
// app.get('/api/auth/user', userCtrl.getUser);

// //Locations Endpoints
app.get('/api/locations', locationsCtrl.getAllLocations);
app.get('/api/attractions/:location-id', locationsCtrl.getAttractions);

// //Itinerary Endpoints
app.post('/api/itinerary', itineraryCtrl.addItineraryItem);
app.delete('/api/itinerary/:id', itineraryCtrl.deleteItineraryItem);
app.get('/api/itinerary', itineraryCtrl.getLocationItinerary);

app.listen(SERVER_PORT, () => console.log(`running on ${SERVER_PORT}`));
