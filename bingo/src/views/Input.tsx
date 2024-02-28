import { Tooltip } from '@mui/material';
import Button from '@mui/material/Button';
import { useMemo } from 'react';
import BingoInputTabel from '../components/BingoInputTabel';
import { useParameters, useWerkwoorden } from '../hooks/bingozinnen/hooks';
import { generateBingoSets } from '../utils/bingoGeneration';

export const Input = () => {
  const parameters = useParameters();
  const werkwoorden = useWerkwoorden();

  const boemPaukenslag = (): void => {
    if (!paukenslagMogelijk) return;

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

  const paukenslagMogelijk = useMemo(() => {
    const { aantalBladen, aantalRijenPerBlad } = parameters;
    return aantalBladen && aantalRijenPerBlad && werkwoorden.length > 0;
  }, [werkwoorden, parameters]);

  const getTitle = useMemo(() => {
    if (paukenslagMogelijk) {
      return 'Waar wacht je op?';
    }
    return 'Er ontbreekt input';
  }, [paukenslagMogelijk]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bingo generator</h1>
      </header>
      <BingoInputTabel />
      <div>
        <Tooltip title={getTitle}>
          <Button
            sx={{ marginTop: '20px' }}
            variant="contained"
            color={paukenslagMogelijk ? 'primary' : 'secondary'}
            onClick={boemPaukenslag}
          >
            Boem paukenslag!
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};
