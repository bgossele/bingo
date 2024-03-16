import { useBingoSets } from '../hooks/bingoOutput/hooks';
import { BingoSetTabel } from './BingoSetTabel';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';
import wortelImage from '../assets/wortel.jpg';

type Props = {
  nested?: boolean;
};

export const BingoOutput = (props: Props) => {
  const { nested = false } = props;
  const bingoSetjes = useBingoSets();

  useEffect(() => {
    if (!nested) window.print();
  }, [nested]);

  const style = nested ? { padding: '10px', overflowY: 'scroll' } : { padding: '10px' };

  return bingoSetjes ? (
    <Stack id="bingo-output" spacing={2} divider={<Divider orientation="horizontal" flexItem />} sx={style}>
      {bingoSetjes.map((bingoSet, index) => (
        <Box sx={{ height: '100%' }}>
          <BingoSetTabel key={index} bingoSet={bingoSet} />
        </Box>
      ))}
    </Stack>
  ) : (
    <Box sx={{ flex: 1 }}>
      <img src={wortelImage} alt="Wortel" style={{ maxHeight: '100%', maxWidth: '100%' }} />
    </Box>
  );
};
