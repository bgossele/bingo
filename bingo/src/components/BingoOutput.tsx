import { useBingoSets } from '../hooks/bingoOutput/hooks';
import { BingoSetTabel } from './BingoSetTabel';

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

  const style = nested ? { padding: '40px', overflowY: 'scroll' } : { padding: '10px' };

  return bingoSetjes ? (
    <Stack id="bingo-output" spacing={2} divider={<Divider orientation="horizontal" flexItem />} sx={style}>
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
