import axios from 'axios';

import {
  NOTE_CREATE,
  NOTE_UPDATE,
  NOTE_DELETE,
  NOTE_DELETE_ALL,
  NOTE_FETCH_ALL,
} from '../constants/noteConstant';

export const createNote = (form) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post('/note', form, config);
    dispatch({ type: NOTE_CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchNotes = () => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get('/note', config);
    dispatch({ type: NOTE_FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteNote = (id) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.delete(`/note/${id}`, config);
    dispatch({ type: NOTE_DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const deleteNotes = (idArr) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.post(`/note/delete`, idArr, config);
    dispatch({ type: NOTE_DELETE_ALL, payload: idArr });
  } catch (error) {
    console.log(error);
  }
};

export const updateNote = (id, form) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(`/note/${id}`, form, config);
    console.log(data);
    dispatch({ type: NOTE_UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
