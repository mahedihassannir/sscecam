const { Schema, default: mongoose } = require("mongoose");

const registerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        min: 2,
        max: 30
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }




},
    { timestamps: true }
);


const register = mongoose.model("accounts", registerSchema);

module.exports = register;