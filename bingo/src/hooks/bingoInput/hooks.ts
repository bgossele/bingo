import { useAppSelector } from '../../store/hooks';
import { BingoInput } from '../../types/bingo';

const useSelector = <TSelected>(selector: (state: BingoInput) => TSelected) =>
  useAppSelector((state) => selector(state.bingoInput));

// Create the selector
export const useWerkwoorden = () => useSelector((state) => state.werkwoorden);

export const useParameters = () => useSelector((state) => state.parameters);

export const useHeaderFoto = () => useSelector((state) => state.headerFoto);
