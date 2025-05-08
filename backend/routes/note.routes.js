import { Router } from 'express';
import {
  createNote,
  editNote,
  deleteNote,
  singleNote,
  getAllNotes
} from '../controllers/note.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = Router();

// Secure routes with JWT middleware
router.route('/create-note').post(verifyJWT, createNote);
router.route('/').get(verifyJWT, getAllNotes);
router.route('/:id').get(verifyJWT, singleNote);
router.route('/edit/:id').put(verifyJWT, editNote);
router.route('/delete/:id').delete(verifyJWT, deleteNote);

export default router;
