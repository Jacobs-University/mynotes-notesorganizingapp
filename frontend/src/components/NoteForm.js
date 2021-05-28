import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DialogActions,
  TextField,
  DialogContentText,
  DialogContent,
  DialogTitle,
  Dialog,
  Button,
} from '@material-ui/core';

import { createNote, updateNote } from '../actions/noteActions';


const NoteForm = ({ currentId, setCurrentId, open, handleClose }) => {
  const dispatch = useDispatch();

  const initialState = {
    title: '',
    subject: '',
    keywords: '',
    note: '',
  };

  const [noteData, setNoteData] = useState(initialState);

  const noteDetails = useSelector((state) =>
    currentId ? state.notes.find((c) => c._id === currentId) : null
  );

  useEffect(() => {
    if (noteDetails) setNoteData(noteDetails);
  }, [noteDetails]);

  const clearData = () => {
    setNoteData(initialState);
    setCurrentId(0);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
    if (currentId === 0) dispatch(createNote(noteData));
    else dispatch(updateNote(currentId, noteData));
    clearData();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='form-dialog-title'
    >
      <DialogTitle id='form-dialog-title'> Add your Notes Here !!!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {`To ${
            currentId === 0 ? 'add' : 'update'
          } your notes from here`}
        </DialogContentText>

        <TextField
          autoFocus
          margin='dense'
          id='title'
          label='Title'
          type='text'
          fullWidth
          value={noteData.title}
          onChange={(e) =>
            setNoteData({ ...noteData, title: e.target.value })
          }
        />
        <TextField
          autoFocus
          margin='dense'
          id='subject'
          label='Subject'
          type='test'
          fullWidth
          value={noteData.subject}
          onChange={(e) =>
            setNoteData({ ...noteData, subject: e.target.value })
          }
        />
        <TextField
          autoFocus
          margin='dense'
          id='keywords'
          label='Keywords'
          type='text'
          fullWidth
          value={noteData.keywords}
          onChange={(e) =>
            setNoteData({ ...noteData, keywords: e.target.value })
          }
        />
        <TextField
          autoFocus
          margin='dense'
          id='note'
          label='Add your Notes Here'
          type='text'
          fullWidth
          value={noteData.note}
          onChange={(e) =>
            setNoteData({ ...noteData, note: e.target.value })
          }
        />

      </DialogContent>
      <DialogActions>
        <Button color='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button color='black' onClick={handleSubmit}>
          {`${currentId === 0 ? 'Add' : 'Update'} Notes`}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NoteForm;
