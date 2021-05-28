import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import Note from '../model/noteModel.js';

const createNote = asyncHandler(async (req, res) => {
  const { title, subject, keywords, note } = req.body;

  console.log(req.body);

  const newNote = new Note({
    user: req.user._id,
    title,
    subject,
    keywords,
    note,
  });

  try {
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

const deleteNote = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send('Incorrect ID');
  }
  await Note.findByIdAndRemove(id);
  res.json({ message: 'Note deleted successfully.' });
});

const deleteMultiNotes = asyncHandler(async (req, res) => {
  if (req.body.length > 0) {
    await Note.deleteMany({
      _id: {
        $in: req.body,
      },
    });
    res.json({ message: 'Notes are deleted successfully.' });
  } else {
    res.status(400).json({ message: 'No Ids found' });
  }
});

const updateNote = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, subject, keywords, note } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Note with id: ${id}`);

  const existNote = await Note.findById(id);
  existNote.title = title || existNote.title;
  existNote.subject = subject || existNote.subject;
  existNote.keywords = keywords || existNote.keywords;
  existNote.note = note || existNote.note;

  const updatedNote = await existNote.save();

  res.json(updatedNote);
});

export {
  createNote,
  getNotes,
  deleteNote,
  deleteMultiNotes,
  updateNote,
};
