export type BingoInput = {
  sterkeWerkwoorden: BingoZin[];
  zwakkeWerkwoorden: BingoZin[];
};

export type BingoZin = {
  infinitief: string;
  vertaling: string;
  zin: string;
  sterkWerkwoord: boolean;
};
