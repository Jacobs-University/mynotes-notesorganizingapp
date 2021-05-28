import {
  NOTE_CREATE,
  NOTE_DELETE,
  NOTE_DELETE_ALL,
  NOTE_FETCH_ALL,
  NOTE_UPDATE,
} from '../constants/noteConstant';

export const noteReducer = (notes = [], action) => {
  switch (action.type) {
    case NOTE_FETCH_ALL:
      return action.payload;
    case NOTE_CREATE:
      return [...notes, action.payload];

    case NOTE_UPDATE:
      return notes.map((c) =>
        c._id === action.payload._id ? action.payload : c
      );

    case NOTE_DELETE:
      return notes.filter((c) => c._id !== action.payload);

    case NOTE_DELETE_ALL:
      return notes.filter(function (c) {
        return action.payload.indexOf(c._id) === -1;
      });

    default:
      return notes;
  }
};

/**
 *
 *
 *
 *
 */
