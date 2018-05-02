import mongoose from 'mongoose';
import Note from './models/note.model';

const notes = [
  {
    title: 'Note 1',
    content: 'https://i.imgur.com/po7UezG.jpg',
  },
  {
    title: 'Note 2',
    content: 'https://i.imgur.com/pE0C9E0.jpg',
  },
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/notes');

// Go through each movie
notes.map(data => {
  // Initialize a model with movie data
  const note = new Note(data);
  // and save it into the database
  note.save();
});