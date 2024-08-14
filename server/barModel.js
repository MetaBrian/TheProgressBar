const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const barSchema  = new Schema({
    title: {type: String, required: true},
    startValue: {type: Number, min:0, max:100, required: true }
})

const Bar = mongoose.model("Bar", barSchema);

module.exports = Bar;