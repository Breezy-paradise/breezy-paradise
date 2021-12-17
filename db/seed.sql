CREATE TABLE travel_user (
    id SERIAL PRIMARY KEY,
    username VARCHAR(150) NOT NULL UNIQUE,
    email VARCHAR(150) NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE location (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    image TEXT NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE attraction (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    image TEXT NOT NULL,
    description TEXT NOT NULL,
    location_id INTEGER REFERENCES location(id) NOT NULL,
    duration_hours INTEGER NOT NULL,
    price FLOAT NOT NULL
);

CREATE TABLE user_itinerary (
    id SERIAL PRIMARY KEY,
    day_num INTEGER NOT NULL,
    user_id INTEGER REFERENCES travel_user(id) NOT NULL,
    attraction_id INTEGER REFERENCES attraction(id) NOT NULL
);
