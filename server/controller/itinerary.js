module.exports = {
  addItineraryItem: async (req, res) => {
    try {
      console.log(req.body)
      const { id } = req.session.user
      const { dayNumber, attractionId } = req.body
      const userItinerary = await req.app
        .get('db')
        .user_itinerary.create_itinerary([dayNumber, id, attractionId])
      return res.status(200).send(userItinerary)
    } catch (e) {
      console.log(e)
      res.status(500).send('Add Itinerary Error')
    }
  },
  deleteItineraryItem: async (req, res) => {
    try {
      await req.app
        .get('db')
        .user_itinerary.delete_itinerary(req.params.id, req.session.user.id)
      return res.sendStatus(200)
    } catch (e) {
      console.log(e)
      res.status(500).send('Delete Itinerary Error')
    }
  },
  getLocationItinerary: async (req, res) => {
    try {
      const getUserItinerary = await req.app
        .get('db')
        .user_itinerary.get_user_itinerary(
          req.params.location_id,
          req.session.user.id
        )
      return res.status(200).send(getUserItinerary)
    } catch (e) {
      console.log(e)
      res.status(500).send('Get Location Itinerary Error')
    }
  },
}
