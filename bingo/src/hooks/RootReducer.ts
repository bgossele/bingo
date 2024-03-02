// reducers/index.js
import { combineReducers } from 'redux';
import bingoOutputReducer from './bingoOutput/reducer';
import bingozinnenReducer from './bingozinnen/reducer';

const rootReducer = combineReducers({
  bingoInput: bingozinnenReducer,
  bingoOutput: bingoOutputReducer,
});

export default rootReducer;
