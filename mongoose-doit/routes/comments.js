var express = require('express');
var router = express.Router();
var Comment = require('../schemas/comment');

// :3000/comments/[id]	json

router.get('/:id', function(req,res,next){
	Comment.find({commenter:req.params.id}).populate('commenter')
	.then((comments) => {
		console.log(comments);
		res.json(comments);
	})
	.catch((err) => {
    console.error(err);
    next(err);
  });
})

// :3000/comments/ comments save
router.post('/', function(req,res,next){
	const comment = new Comment({
		commenter : req.body.id,
		comment : req.body.comment
	});
	comment.save()
	.then((result) => {
		return Comment.populate(result, {path : 'commenter'});
	})
	.then((result) => {
		res.status(201).json(result);
	})
	.catch((err) => {
		console.error(err);
		next(err);
	});
});

// :3000/comments/[id] update
router.patch('/:id', function(req,res,next){
	Comment.update({_id: req.params.id}, {comment: req.body.comment})
	.then((result) => {
		res.json(result);
	})
	.catch((err) => {
		console.error(err);
		next(err);
	});
});

// :300/comments/[id] delete
router.delete('/:id', function(req,res,next){
	Comment.remove({_id: req.params.id})
	.then((result) => {
		res.json(result);
	})
	.catch((err) => {
		console.error(err);
		next(err);
	})
})

module.exports = router;
