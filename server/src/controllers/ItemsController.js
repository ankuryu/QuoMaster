const {Quoitm} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let items = null
      const qno = req.params.qno
        items = await Quoitm.findAll()
      res.send(items)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the items'
      })
    }
  },
	async additms (req,res) {
		try{
			const items = await Quoitm.bulkCreate( req.body)
			res.send(items)
			res.end('OK');
		} catch(err) {
			res.status(500).send({
				error: 'an error has occured trying to upload bulk items'
			})
		}

	},
  async show (req, res) {
    try {
      const item = await Quoitm.findById(req.params.id)
      res.send(item)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to get the item'
      })
    }
  },
  async post (req, res) {
    try {
      const items = await Quoitm.create(req.body)
      res.send(items)
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
         id: req.params.id
        }
      })
      res.send(req.body)
	    res.end('OK');
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the item'
      })
    }
  },
	async remove (req,res) {
	try {
	  await Quoitm.destroy({
		  where : {qno: req.params.qno}
	  
	  }).then((response)=> {
		  res.end('Ok')
	  })
	} catch(err){}

	}
}
