// reducers/index.js
import { combineReducers } from 'redux';
import bingozinnenReducer from './bingozinnen/reducer';

const rootReducer = combineReducers({
  bingoInput: bingozinnenReducer,
});

export default rootReducer;
