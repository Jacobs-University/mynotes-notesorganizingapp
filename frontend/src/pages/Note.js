import React, { useState } from 'react';
import Header from '../components/Header';
import NoteForm from '../components/NoteForm';
import NoteTable from '../components/NoteTable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes } from '../actions/noteActions';

const Note = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [currentId, setCurrentId] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useState(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div>
      <Header userInfo={userInfo} />
      <NoteForm
        open={open}
        handleClose={handleClose}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
      <NoteTable
        open={open}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
        setCurrentId={setCurrentId}
      />
    </div>
  );
};

export default Note;
