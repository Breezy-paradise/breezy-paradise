require('dotenv').config();
const express = require('express');
const session = require('express-session')
const massive = require('massive');

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

app.listen(SERVER_PORT, () => console.log(`running on ${SERVER_PORT}`));
