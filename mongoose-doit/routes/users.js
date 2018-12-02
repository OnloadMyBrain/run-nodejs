var express = require('express');
var router = express.Router();
var User = require('../schemas/user');

/* GET users listing. */

// :3000/users/ - 유저정보를 json으로 가져옴
router.get('/', function(req, res, next) {
  User.find({})
  .then((users) => {
    res.json(users);
  })
  .catch((err) => {
    console.error(err);
    next(err);
  });
});

// :3000/users/ POST, save
router.post('/', function(req,res,next){
  const user = new User({
    name : req.body.name,
    age : req.body.name,
    married : req.body.married,
  });
  user.save()
  .then((result) => {
    console.log(result);
    res.status(201).json(result);
  })
  .catch((err) => {
    console.error(err);
    next(err);
  })
})

module.exports = router;
