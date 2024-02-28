const { default: mongoose, model } = require("mongoose");

const result = mongoose.Schema({

    name: {
        type: String,
        required: true,

    },
    father: {
        type: String,
        required: true,

    },
    mother: {
        type: String,
        required: true,

    },
    roll: {
        type: Number,
        required: true
    },
    reg: {
        type: Number,
        required: true
    },
    bangla: {
        type: String,
        required: true

    },
    english: {
        type: String,
        required: true

    }



}, { timeStamps: true });

const addResult = model("model", result);

module.exports = addResult;


