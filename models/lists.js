const mongoose = require('mongoose')

const chidrenSchema = mongoose.Schema({
  title: String,
  details: Array,
  create_at: Date,
  update_at: Date,
  isChecked: Array
})

const listSchema = mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  lists: [chidrenSchema]
    // title: { type: String, required: true },
    // details: { type: Array },
    // create_at: { type: Date },
    // update_at: { type: Date },
    // isChecked: { type: Array }
})

module.exports = mongoose.model('List', listSchema)