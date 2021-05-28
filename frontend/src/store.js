import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { noteReducer } from './reducers/noteReducer';

import { authReducer } from './reducers/authReducer';

const reducers = combineReducers({
  notes: noteReducer,
  userLogin: authReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = { userLogin: { userInfo: userInfoFromStorage } };

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
