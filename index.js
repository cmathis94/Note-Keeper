const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override')

const app = express();
const path = require('path');
const Note = require('./model/noteMod');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));

mongoose.connect('mongodb://localhost:27017/noteKeeper', { useNewURLParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo: Connected')
    })
    .catch(err => {
        console.log('Mongo: Error', err);
        process.exit(1);
    })

app.get('/notes', async (req, res) => {
    const notes = await Note.find({})
    res.render('notes/index.ejs', { notes })
})

app.post('/notes', async (req, res) => {
    const newNote = new Note(req.body);
    await newNote.save();
    res.redirect('/notes')
})

app.listen(3000, () => {
    console.log('Port: 3000');
})