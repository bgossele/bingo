export type BingoInput = {
  werkwoorden: BingoZin[];
  aantalRijenPerBlad?: number;
  aantalBladen?: number;
};

export type BingoZin = {
  infinitief: string;
  vertaling: string;
  zin: string;
  sterkWerkwoord: boolean;
};
