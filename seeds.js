const mongoose = require('mongoose');
const Note = require('./model/noteMod');

mongoose.connect('mongodb://localhost:27017/noteKeeper', { useNewURLParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo: Connected')
    })
    .catch(err => {
        console.log('Mongo: Error', err);
        process.exit(1);
    })

const notesArr = [
    {
        /* date: Date, */
        title: 'Example',
        note: 'Note Test',
        subNote: 'Sub Note Test'
    }
]

Note.insertMany(notesArr)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })