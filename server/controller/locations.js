module.exports = {
    getAllLocations: async (req, res) => {
        try {
            const allLocations = await req.app.get('db').locations.get_locations();
            return res.status(200).send(allLocations);
        } catch (e) {
            console.log(e);
            res.status(500).send("Get Locations Error");
        }
    },
    getLocation: async (req, res) => {
        try {
            const location = await req.app.get('db').locations.get_location(req.params.id);
            return res.status(200).send(location[0]);
        } catch (e) {
            console.log(e);
            res.status(500).send("Get Location Error");
        }
    },
    getAttractions: async (req, res) => {
        try {
            const attractions = await req.app.get('db').locations.get_attractions(req.params.location_id);
            return res.status(200).send(attractions);
        } catch (e) {
            console.log(e);
            res.status(500).send("Get Attractions Error");
        }
    }
}