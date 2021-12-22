module.exports = {
    addItineraryItem: async (res, req) => {
        const { id } = req.session.user;
        const { dayNumber, attractionId } = req.body;
        const userItinerary = await req.app.get('db').create_itinerary([dayNumber, id, attractionId]);
        return res.status(200).send(userItinerary);
    },
    deleteItineraryItem: async (res, req) => {
        req.app.get('db').user_itinerary.delete_itinerary(req.params.id)
        .then(_ => res.sendStatus(200))
    },
    getLocationItinerary: async (res, req) => {
        getUserItinerary = await req.app.get('db').get_user_itinerary();
        return res.status(200).send(getUserItinerary);
    }
}