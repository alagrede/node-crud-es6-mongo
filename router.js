import express, { Router } from 'express';
import * as notes from './controllers/note.controller';

// Initialize the router
const router = Router();

// Create a new Note
router.post('/notes', notes.create);

// Retrieve all Notes
router.get('/notes', notes.findAll);

// Retrieve a single Note with noteId
router.get('/notes/:noteId', notes.findOne);

// Update a Note with noteId
router.put('/notes/:noteId', notes.update);

// Delete a Note with noteId
router.delete('/notes/:noteId', notes.deleted);

export default router;