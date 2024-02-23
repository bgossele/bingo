import Button from '@mui/material/Button';
import BingoInputTabel from '../components/BingoInputTabel';
import { useParameters, useWerkwoorden } from '../hooks/bingozinnen/hooks';
import { generateBingoSets } from '../utils/bingoGeneration';

export const Input = () => {
  const parameters = useParameters();
  const werkwoorden = useWerkwoorden();

  const boemPaukenslag = (): void => {
    const { aantalBladen, aantalRijenPerBlad } = parameters;

    if (!aantalBladen || !aantalRijenPerBlad) return;

    const bingoSets: Set<number>[] = generateBingoSets(
      parameters.aantalRijenPerBlad ?? 1,
      parameters.aantalBladen ?? 1,
      werkwoorden.length,
    );

    bingoSets.forEach((bingoSet, index) => {
      console.log(`Bingoset ${index}`);
      console.log('');
      bingoSet.forEach((nummertje) => {
        const { infinitief, vertaling, zin } = werkwoorden[nummertje];
        console.log(`| ${infinitief} | ${zin} | ${vertaling} |`);
      });
      console.log('');
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bingo generator</h1>
      </header>
      <BingoInputTabel />
      <div>
        <Button sx={{ marginTop: '20px' }} variant="contained" color="primary" onClick={boemPaukenslag}>
          Boem paukenslag!
        </Button>
      </div>
    </div>
  );
};
