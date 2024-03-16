import { Tooltip } from '@mui/material';
import Button from '@mui/material/Button';
import { useMemo } from 'react';
import BingoInputTabel from '../components/BingoInputTabel';
import { useParameters, useWerkwoorden } from '../hooks/bingoInput/hooks';
import { uploadFoto } from '../hooks/bingoInput/reducer';
import { voegBingoSetjesToe } from '../hooks/bingoOutput/reducer';
import { useAppDispatch } from '../store/hooks';
import { generateBingoSets } from '../utils/bingoGeneration';

export const Input = () => {
  const parameters = useParameters();
  const werkwoorden = useWerkwoorden();
  const dispatch = useAppDispatch();

  const boemPaukenslag = (): void => {
    if (!paukenslagMogelijk) return;

    const bingoSets: Set<number>[] = generateBingoSets(
      parameters.aantalRijenPerBlad ?? 1,
      parameters.aantalBladen ?? 1,
      werkwoorden.length,
    );

    dispatch(voegBingoSetjesToe(bingoSets));
  };

  const paukenslagMogelijk = useMemo(() => {
    const { aantalBladen, aantalRijenPerBlad } = parameters;
    return aantalBladen && aantalRijenPerBlad && werkwoorden.length > 0 && aantalRijenPerBlad <= werkwoorden.length;
  }, [werkwoorden, parameters]);

  const getTitle = useMemo(() => {
    if (paukenslagMogelijk) {
      return 'Waar wacht je op?';
    }
    return 'Er ontbreekt input';
  }, [paukenslagMogelijk]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    console.log(event.target.files);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(uploadFoto({ data: reader.result, naam: file.name }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <header className="App-header">
        <h1>Bingo generator</h1>
      </header>
      <BingoInputTabel />
      <div>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
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
