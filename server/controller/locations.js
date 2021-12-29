module.exports = {
    getAllLocations: async (req, res) => {
    //Here we have an Error
    allLocations = await req.app.get('db').get_locations();
    return res.status(200).send(allLocations);
    },
    getAttractions: async (req, res) => {
    attractions = await req.app.get('db').get_attractions();
    return res.status(200).send(attractions);        
    }
}