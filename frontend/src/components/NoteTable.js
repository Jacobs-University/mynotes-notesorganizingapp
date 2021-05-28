import React from 'react';
import { Button, Card, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MaterialTable from 'material-table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote, deleteNotes } from '../actions/noteActions';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  card: {
    margin: '10px',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize: '1.96rem',
  },
}));

const NoteTable = ({ handleClickOpen, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const notes = useSelector((state) => state.notes);
  console.log(notes);

  const delNote = (id) => {
    dispatch(deleteNote(id));
  };

  const delNotes = (idArr) => {
    dispatch(deleteNotes(idArr));
  };

  return (
    <>
      <div style={{ textAlign: 'right' }}>
        <Button
          variant='contained'
          color='black'
          size='large'
          className={classes.button}
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
        >
          Add Notes
        </Button>
      </div>
      <Card>
        <MaterialTable
          title='Notes Collection'
          columns={[
            { title: 'Title', field: 'title' },
            { title: 'Subject', field: 'subject' },
            { title: 'Keywords', field: 'keywords' },
            { title: 'Main Note', field: 'note' },
            {
              title: 'Edit/Delete',
              field: 'edit',
              render: (rowData) =>
                rowData && (
                  <>
                    <IconButton
                      color='primary'
                      onClick={() => {
                        setCurrentId(rowData._id);
                        handleClickOpen();
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color='secondary'
                      onClick={() => {
                        delNote(rowData._id);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </>
                ),
            },
          ]}
          data={notes}
          actions={[
            {
              tooltip: 'Remove All Selected Notes',
              icon: 'delete',
              onClick: (evt, data) => delNotes(data.map((a) => a._id)),
            },
          ]}
          options={{
            actionsColumnIndex: -1,
            exportButton: true,
            selection: true,
          }}
        />
      </Card>
    </>
  );
};

export default NoteTable;
