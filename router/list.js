const express = require('express')
const router = express.Router()
const List = require('../models/lists')

//查看清单
router.get('/list', (req, res) => {
	List.find({})
	.sort({ update_at: -1})
	.then(lists => {
		res.json(lists)
	})
	.catch(err => {
		res.json(err)
	})
})
//添加清单
router.post('/list', (req, res) => {
	List.create(req.body, (err, list) => {
		if(err) {
			res.json(err)
		} else {
			res.json(list)
		}
	})
})
//通过ObjectId查询单个list
router.get('/list/:id', (req, res) => {
	List.findById(req.params.id)
	.then(list => {
		res.json(list)
	})
	.catch(err => {
		res.json(err)
	})
})
//更新list
router.put('/list/:id', (req, res) => {
	List.findOneAndUpdate({_id: req.params.id},
		{$set: { title: req.body.title,
			details: req.body.details,
			create_at: req.body.create_at,
			update_at: req.body.update_at,
			isChecked: req.body.isChecked
		 }}, {
		 	new : true
		 })
		.then(list => res.json(list))
		.catch(err => res.json(err))
})
//删除列表
router.delete('/delete/:id', (req, res) => {
	List.findOneAndRemove({
		_id: req.params.id
	})
	.then(list => res.send(`${list.title}删除成功`))
	.catch(err => res.json(err))
})

module.exports = router