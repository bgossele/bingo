import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BingoOutputState } from './types';

const initialState: BingoOutputState = {};

const bingoSlice = createSlice({
  name: 'bingoOutput',
  initialState,
  reducers: {
    voegBingoSetjesToe: (state, action: PayloadAction<Set<number>[]>) => {
      state.bingoSetjes = action.payload;
    },
  },
});

export const { voegBingoSetjesToe } = bingoSlice.actions;

export default bingoSlice.reducer;
