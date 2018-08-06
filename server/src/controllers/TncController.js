const {Quotc} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let tnc = null
        tnc = await Quotc.findAll({
        })
      res.send(tnc)
	res.end('Ok')
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the Quotc'
      })
    }
  },
  async show (req, res) {
    try {
      const tnc= await Quotc.findById(req.params.id)
      res.send(tnc)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the Tnc'
      })
    }
  },
  async post (req, res) {
    try {
      const tnc = await Quotc.create(req.body)
      res.send(tnc)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the Tnc '
      })
    }
  },
  async put (req, res) {
    try {
      await Quotc.update(req.body, {
        where: {
          qno: req.params.qno
        }
      })
      res.send(req.body)
	res.end('Ok')
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the Tnc'
      })
    }
  },
	async remove (req,res){
		try {
			await Quotc.destroy({ where : {qno : req.params.qno } })
			res.end('Ok')
			
		
		} catch (err) {

		}
	
	}
}
