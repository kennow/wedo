const mongoose = require('mongoose')

const listSchema = mongoose.Schema({
	title: { type: String, required: true },
	details: { type: Array },
	create_at: { type: Date },
	update_at: { type: Date },
	isChecked: { type: Array }
})

module.exports = mongoose.model('List', listSchema)