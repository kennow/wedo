const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.send('This is our home page')
})

module.exports = router