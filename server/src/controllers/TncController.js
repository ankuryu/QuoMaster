const {Quote} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let quotes = null
      const search = req.query.search
      if (search) {
        songs = await Song.findAll({
          where: {
            $or: [
              'title', 'artist', 'genre', 'album'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        quotes = await Quote.findAll({
          limit: 10
        })
      }
      res.send(quotes)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the songs'
      })
    }
  },
  async show (req, res) {
    try {
      const quote = await Song.findById(req.params.qno)
      res.send(quote)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the Quote'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Quote.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the song'
      })
    }
  },
  async put (req, res) {
    try {
      await Song.update(req.body, {
        where: {
          qno: req.params.qno
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the song'
      })
    }
  }
}
