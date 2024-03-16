import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BingoInput, BingoZin, HeaderFoto } from '../../types/bingo'; // Import the BingoInput type

const initialState: BingoInput = {
  werkwoorden: [],
  parameters: {
    aantalRijenPerBlad: 5,
    aantalBladen: 5,
  },
};

const bingoSlice = createSlice({
  name: 'bingoInput',
  initialState,
  reducers: {
    voegWerkwoordToe: (state, action: PayloadAction<BingoZin>) => {
      state.werkwoorden.push(action.payload);
    },
    setParameter: (state, action: PayloadAction<{ name: string; value: number }>) => {
      const { name, value } = action.payload;
      state.parameters = { ...state.parameters, [name]: value };
    },
    uploadFoto: (state, action: PayloadAction<HeaderFoto>) => {
      state.headerFoto = action.payload;
    },
  },
});

export const { voegWerkwoordToe, setParameter, uploadFoto } = bingoSlice.actions;

export default bingoSlice.reducer;
