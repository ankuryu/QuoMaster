const {Quoitm} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let items = null
      const qno = req.query.qno
      if (qno) {
        songs = await Quoitm.findAll({
          where: { qno:qno}
                     
        })
                 
      } else {
        items = await Quoitm.findAll({
          limit: 10
        })
      }
      res.send(quotes)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the items'
      })
    }
  },
  async show (req, res) {
    try {
      const item = await Quoitm.findById(req.params.qno)
      res.send(item)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to get the item'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Quoitm.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the item'
      })
    }
  },
  async put (req, res) {
    try {
      await Quoitm.update(req.body, {
        where: {
          qno: req.params.qno
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the item'
      })
    }
  }
}
