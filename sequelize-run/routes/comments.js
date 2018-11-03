var express = require('express');
var {User, Comment} = require('../models');

var router = express.Router();

// /comments/1 => 1번 사람이 쓴 모든 댓글 로딩
router.get('/:id', function(req,res,next){
	Comment.findAll({
		include:{
			model:User,
			where:{id:req.params.id},
		},
	})
	.then((comments)=>{
		console.log(comments);
		res.json(comments);
	})
	.catch((err)=>{
		console.error(err);
		next(err);
	})
})

// USER POST /users => 사용자 등록
router.post('/', function (req, res, next) {
	Comment.create({
			commenter: req.body.id,
			comment: req.body.comment,
		})
		.then((result) => {
			console.log(result);
			res.status(201).json(result);
		})
		.catch((err) => {
			console.error(err);
			next(err);
		})
});
module.exports = router;

// Update
router.patch('/:id', function(req,res,next){
	Comment.update({
		comment:req.body.comment,
	},{
		where: {id:req.params.id}
	})
	.then((result)=>{
		res.json(result);
	})
	.catch((err)=>{
		console.error(err);
		next(err);
	})
});

// DELETE
router.delete('/:id', function(req,res,next){
	Comment.destroy({
		where: {id:req.params.id}
	})
	.then((result)=>{
		res.json(result);
	})
	.catch((err)=>{
		console.error(err);
		next(err);
	})
});

module.exports = router;