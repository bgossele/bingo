import { useBingoSets } from '../hooks/bingoOutput/hooks';
import { BingoSetTabel } from './BingoSetTabel';

import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import wortelImage from '../assets/wortel.jpg';

export const BingoOutput = () => {
  const bingoSetjes = useBingoSets();

  return bingoSetjes ? (
    <Stack
      id="bingo-output"
      spacing={2}
      divider={<Divider orientation="horizontal" flexItem />}
      sx={{ overflowY: 'scroll', height: '100%', padding: '40px' }}
    >
      {bingoSetjes.map((bingoSet, index) => (
        <BingoSetTabel key={index} bingoSet={bingoSet} />
      ))}
    </Stack>
  ) : (
    <div style={{ flex: 1 }}>
      <img src={wortelImage} alt="Wortel" />
    </div>
  );
};
