const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    /* date: {
        type: Date,
        required: true
    }, */
    title: {
        type: String
    },
    note: {
        type: String,
    },
    subNote: {
        type: String
    }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;