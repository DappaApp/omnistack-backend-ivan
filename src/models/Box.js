const mongoose = require('mongoose');

const Box = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    // Pega o ID, do model FILE
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Box', Box);