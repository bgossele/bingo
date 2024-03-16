import { Download } from '@mui/icons-material';
import { Box, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { BingoOutput } from '../components/BingoOutput';
import { useBingoSets } from '../hooks/bingoOutput/hooks';
import { Input } from './Input';

const Bingo = () => {
  const bingoSetjes = useBingoSets();

  return (
    <Stack direction="row" spacing={2} sx={{ height: '80vh' }}>
      <Stack direction="column" spacing={2}>
        <Input />

        {bingoSetjes && (
          <Box>
            <Link to={'/output'}>
              <Button variant="contained" color="primary">
                <Download />
              </Button>
            </Link>
          </Box>
        )}
      </Stack>
      <BingoOutput nested />
    </Stack>
  );
};

export default Bingo;
