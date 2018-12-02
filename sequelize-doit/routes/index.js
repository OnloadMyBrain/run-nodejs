var express = require('express');
var router = express.Router();
var User = require('../models').User;

/* GET home page. */
router.get('/', function(req, res, next) {
	// DB 모든 user 정보를 다 가져옴. sequelize.pug 페이지를 띄워야함
	// res.render('index', { title: 'Express' });
	User.findAll()
	.then((users)=> {
		res.render('sequelize', {users});
	})
	.catch((err)=> {
		console.error(err);
		next(err);
	});
});

module.exports = router;
