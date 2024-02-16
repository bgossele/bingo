export type BingoInput = {
  werkwoorden: BingoZin[];
};

export type BingoZin = {
  infinitief: string;
  vertaling: string;
  zin: string;
  sterkWerkwoord: boolean;
};
