export type BingoInput = {
  werkwoorden: BingoZin[];
};

export type BingoParameters = {
  aantalRijenPerBlad?: number;
  aantalBladen?: number;
};

export type BingoZin = {
  infinitief?: string;
  vertaling?: string;
  zin?: string;
};
