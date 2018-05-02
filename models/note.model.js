import mongoose, { Schema } from 'mongoose';

const NoteSchema = new Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

export default mongoose.model('Note', NoteSchema);
