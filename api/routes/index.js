var express = require('express');
var router = express.Router();
const ObjectID = require('mongodb').ObjectID;

/* GET home page. */

router.get('/appointments', (req, res, next) => {
  req.collection.find({})
  .toArray()
  .then(results => res.json(results))
  .catch(error => res.send(error));
});

router.get('/appointments/:id', (req, res, next) => {
  const { id } = req.params;
  const _id = ObjectID(id);

  req.collection.find({_id})
  .toArray()
  .then(results => res.json(results))
  .catch(error => res.send(error));
});

router.get('/appointments/range/:rangeStart&:rangeEnd', (req, res, next) => {
    
    const rangeStart = req.params.rangeStart
    const rangeEnd = req.params.rangeEnd;

    req.collection.find({})
    .toArray()
    .then(results => res.send(results.filter(function(obj){
      return obj.appointmentDate >= rangeStart && obj.appointmentDate <= rangeEnd;
    })))

    .catch(error => res.send(error))
});

router.post('/appointments', (req, res, next) => {
  const { appointmentDate, name, email, time } = req.body;
  if (!appointmentDate || !name || !email) {
    return res.status(400).json({
      message: 'Appointment Date, Name and email are required',
    });
  }

  const car = {
    model: '',
    make: ''
  }

  const payload = { appointmentDate, name, email, time, car };

  
  req.collection.insertOne(payload)
    .then(result => res.json(result.ops[0]))
    .catch(error => res.send(error));
  
});

router.delete('/appointments/delete/:id', (req, res, next) => {
  const { id } = req.params;
  const _id = ObjectID(id);

  req.collection.deleteOne({ _id })
    .then(result => res.json(result))
    .catch(error => res.send(error));
});

router.put('/appointments/:id&:appointmentDate&:time&:name&:email', (req, res, next) => {
    const { id } = req.params;
    const _id = ObjectID(id);

    const appointmentDate = req.params.appointmentDate
    const time = req.params.time
    const name = req.params.name
    const email = req.params.email;

   let found = req.collection.find({_id});

   console.log(found)

    if (found != undefined) {
      req.collection.update({_id}, {appointmentDate:appointmentDate, time:time, name:name, email:email});
      //req.collection.update({_id}, {appointmentDate:req.body.appointmentDate, time:req.body.time, name:req.body.name, email:req.body.email});
      res.sendStatus(204);
    }
    else {
        res.sendStatus(404);
    }
});

module.exports = router;
