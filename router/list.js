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
module.exports = router