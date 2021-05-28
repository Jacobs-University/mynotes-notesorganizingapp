import express from 'express';
const router = express.Router();
import {
  createNote,
  getNotes,
  deleteNote,
  deleteMultiNotes,
  updateNote,
} from '../controller/noteController.js';

import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(protect, createNote);
router.route('/').get(protect, getNotes);
router.route('/:id').delete(protect, deleteNote).put(protect, updateNote);
router.route('/delete').post(protect, deleteMultiNotes);

export default router;
