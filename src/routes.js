import React from "react";
import { Routes, Route } from "react-router-dom";
import Attractions from "./components/Attractions";
import Locations from "./components/Locations";

export default (
    <Routes>
        <Route path='/breezy-paradise/location/:id' component={Attractions} />
        <Route path='/breezy-paradise' component={Locations} />
        <Route path='/' component={Locations} />
    </Routes>
)