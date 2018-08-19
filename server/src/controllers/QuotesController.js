const {
  Quotop
} = require('../models')

module.exports = {
    index(req, res, next){

      Quotop.findAll({
        attributes: ['id', 'qno', 'qdt', 'pname']
      }).then(quotes => {
	      console.log(quotes);
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
	      res.end('OK');
      });
    },
  show(req, res, next)  {
    var qid = req.params.id;
	  console.log("qid",qid)
	  console.log('reqparam',req.params);
    //  console.log(qid);
    Quotop.findOne({
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
    Quotop.create(quote).then(console.log("Added Quote"))
    res.end('OK');
  },
  put(req, res, next)  {
    var qid = req.params.id;
    /*	console.log(req.params);
      console.log(qid);
    	console.log(req.body);
    	*/
    quote = req.body;
    Quotop.update(quote, {
        where: {
          "id": qid
        }
      })
      .then((response) => {
        res.send(response);
        res.end('OK');
      })
      .catch((error) => {
        console.log(error)
      });
  },
  remove(req, res, next)  {
    var qid = req.params.id;
    // console.log(qid);
    Quotop.destroy({
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
