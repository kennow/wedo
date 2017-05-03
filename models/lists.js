const mongoose = require('mongoose')

const listSchema = mongoose.Schema({
	user: { type: String, required: true },
	password: { type: String, required: true },
	lists: { type: Array }
	// title: { type: String, required: true },
	// details: { type: Array },
	// create_at: { type: Date },
	// update_at: { type: Date },
	// isChecked: { type: Array }
})

module.exports = mongoose.model('List', listSchema)