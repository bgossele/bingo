// reducers/index.js
import { combineReducers } from 'redux';
import bingozinnenReducer from './bingoInput/reducer';
import bingoOutputReducer from './bingoOutput/reducer';

const rootReducer = combineReducers({
  bingoInput: bingozinnenReducer,
  bingoOutput: bingoOutputReducer,
});

export default rootReducer;
