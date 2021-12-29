module.exports = {
    getAllLocations: async (req, res) => {
        try {
            allLocations = await req.app.get('db').locations.get_locations();
            return res.status(200).send(allLocations);
        } catch (e) {
            console.log(e);
            res.status(500).send("Get Locations Error");
        }
    },
    getAttractions: async (req, res) => {
        try {
            attractions = await req.app.get('db').locations.get_attractions();
            return res.status(200).send(attractions);
        } catch (e) {
            console.log(e);
            res.status(500).send("Get Attractions Error");
        }
    }
}