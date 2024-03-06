import { useBingoSets } from '../hooks/bingoOutput/hooks';
import { BingoSetTabel } from './BingoSetTabel';

import PrintIcon from '@mui/icons-material/Print';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import wortelImage from '../assets/wortel.jpg';

export const BingoOutput = () => {
  const bingoSetjes = useBingoSets();

  return bingoSetjes ? (
    <Stack>
      <Stack
        spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}
        sx={{ overflowY: 'scroll', height: '100%' }}
      >
        {bingoSetjes.map((bingoSet) => (
          <BingoSetTabel bingoSet={bingoSet} />
        ))}
      </Stack>
      <Box>
        <Button variant="contained" color="primary" onClick={() => window.print()}>
          <PrintIcon />
        </Button>
      </Box>
    </Stack>
  ) : (
    <div style={{ flex: 1 }}>
      <img src={wortelImage} alt="Wortel" />
    </div>
  );
};
