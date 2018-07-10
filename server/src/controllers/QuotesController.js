const {
  quotop
} = require('../models')

module.exports = {
    index(req, res, next){

      quotop.findAll({
        attributes: ['id', 'qno', 'qdt', 'pname']
      }).then(quotes => {
        var qnew = [];
        for (i = 0; i < quotes.length; i++) {
          quo = quotes[i];
          if (quo.pname != null) {
            qnew.push(quo)
          }
        }
        //   console.log("get quotations")
        //   console.log(qnew[0].qno);
        res.send(qnew);
      });
    },
  show(req, res, next)  {
    var qid = req.params.id;
    //  console.log(qid);
    quotop.findOne({
        where: {
          "id": qid
        }
      })
      .then((response) => {
        //		console.log(response);
        res.send(response);
        //		res.send({pname:"jango",paddr:" xyz lane"});
        res.end('OK');
      })
      .catch((error) => {
        console.log(error);
      });
  },
  post(req, res, next)  {
    var quote = req.body;
    //	console.log('add route');
    //	console.log(quote);
    //  var qt2 = {qno:"00005",qdt:"2018-11-01",pname:"Maruti",paddr:"jango",enqno:"01",enqdt:"2018-11-01",qamt:0}
    quotop.create(quote).then(console.log("Added Quote"))
    res.end('OK');
  },
  put(req, res, next)  {
    var qid = req.params.id;
    /*	console.log(req.params);
      console.log(qid);
    	console.log(req.body);
    	*/
    quote = req.body;
    quotop.update(quote, {
        where: {
          "id": qid
        }
      })
      .then((response) => {
        res.end('OK')
      })
      .catch((error) => {
        console.log(error)
      });
  },
  remove(req, res, next)  {
    var qid = req.params.id;
    // console.log(qid);
    quotop.destroy({
        where: {
          "id": qid
        }
      })
      .then((response) => {
        res.end('OK')
      })
      .catch((error) => {});
  }
}