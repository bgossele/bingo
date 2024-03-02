import Container from '@mui/material/Container';
import { useBingoSets } from '../hooks/bingoOutput/hooks';
import { BingoSetTabel } from './BingoSetTabel';

import wortelImage from '../assets/wortel.jpg';

export const BingoOutput = () => {
  const bingoSetjes = useBingoSets();

  return bingoSetjes ? (
    <Container sx={{ overflowY: 'scroll' }}>
      {bingoSetjes.map((bingoSet) => (
        <BingoSetTabel bingoSet={bingoSet} />
      ))}
    </Container>
  ) : (
    <div style={{ flex: 1 }}>
      <img src={wortelImage} alt="Wortel" />
    </div>
  );
};
