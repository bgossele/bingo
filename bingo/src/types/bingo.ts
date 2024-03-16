export type BingoInput = {
  werkwoorden: BingoZin[];
  parameters: BingoParameters;
  headerFoto?: HeaderFoto;
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

export type HeaderFoto = {
  data: string | ArrayBuffer | null;
  naam: string;
};
