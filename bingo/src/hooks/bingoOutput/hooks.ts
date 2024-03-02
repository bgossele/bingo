import { useAppSelector } from '../../store/hooks';
import { BingoOutputState } from './types';

const useSelector = <TSelected>(selector: (state: BingoOutputState) => TSelected) =>
  useAppSelector((state) => selector(state.bingoOutput));

// Create the selector
export const useBingoSets = () => useSelector((state) => state.bingoSetjes);
