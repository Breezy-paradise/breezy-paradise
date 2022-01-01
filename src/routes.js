import React from "react";
import { Routes, Route } from "react-router-dom";
import AttractionsView from "./components/AttractionsView";
import Locations from "./components/Locations";

export default (
    <Routes>
        <Route path='/breezy-paradise/location/:id' element={ <AttractionsView />} />
        <Route path='/breezy-paradise' element={ <Locations />} />
        <Route path='/' element={ <Locations />} />
    </Routes>
)