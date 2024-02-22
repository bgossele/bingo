import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { BingoInput, BingoParameters, BingoZin } from '../types/bingo';
import { generateBingoSets } from '../utils/bingoGeneration';
import ToevoegRij from './ToevoegRij';

const initialParameters = {
  aantalRijenPerBlad: 5,
  aantalBladen: 5,
};

const BingoInputTabel = () => {
  const [input, setInput] = useState<BingoInput>({ werkwoorden: [] });
  const [parameters, setParameters] = useState<BingoParameters>(initialParameters);

  const onParameterChange = (name: string): ((event: ChangeEvent<HTMLInputElement>) => void) => {
    return (event: ChangeEvent<HTMLInputElement>): void =>
      setParameters({ ...parameters, [name]: parseInt(event.target.value) });
  };

  const werkwoordToevoegen = useCallback((bingoZin: BingoZin) => {
    setInput((prevInput) => ({
      ...prevInput,
      werkwoorden: [...prevInput.werkwoorden, bingoZin],
    }));
  }, []);

  const bestaandeWerkwoorden = useMemo(
    () =>
      input.werkwoorden.map((row, index) => (
        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell component="th" scope="row">
            {row.infinitief}
          </TableCell>
          <TableCell align="left" sx={{ width: '400px' }}>
            {row.zin}
          </TableCell>
          <TableCell align="left">{row.vertaling}</TableCell>
        </TableRow>
      )),
    [input.werkwoorden],
  );

  const tableRows = useMemo(() => {
    return bestaandeWerkwoorden.concat(<ToevoegRij key="nieuwezin" toevoegenAanInput={werkwoordToevoegen} />);
  }, [werkwoordToevoegen, bestaandeWerkwoorden]);

  const boemPaukenslag = (): void => {
    const { aantalBladen, aantalRijenPerBlad } = parameters;

    if (!aantalBladen || !aantalRijenPerBlad) return;

    const bingoSets: Set<number>[] = generateBingoSets(
      parameters.aantalRijenPerBlad ?? 1,
      parameters.aantalBladen ?? 1,
      input.werkwoorden.length,
    );

    bingoSets.forEach((bingoSet, index) => {
      console.log(`Bingoset ${index}`);
      console.log('');
      bingoSet.forEach((nummertje) => {
        const { infinitief, vertaling, zin } = input.werkwoorden[nummertje];
        console.log(`| ${infinitief} | ${zin} | ${vertaling} |`);
      });
      console.log('');
    });
  };

  return (
    <div>
      <TableContainer component={Paper} style={{ display: 'flex', justifyContent: 'center' }}>
        <Table aria-label="simple table" sx={{ maxWidth: 200 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Aantal rijen per blad</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="left">
                Aantal bladen
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <input
                  type="number"
                  min={1}
                  name="aantalRijenPerBlad"
                  value={parameters.aantalRijenPerBlad}
                  onChange={onParameterChange('aantalRijenPerBlad')}
                />
              </TableCell>
              <TableCell>
                <input
                  type="number"
                  min={1}
                  name="aantalBladen"
                  value={parameters.aantalBladen}
                  onChange={onParameterChange('aantalBladen')}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Werkwoord</TableCell>
              <TableCell sx={{ fontWeight: 'bold', width: '300px' }} align="left">
                Zin
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="left">
                Vertaling
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{tableRows}</TableBody>
        </Table>
      </TableContainer>
      <div>
        <Button sx={{ marginTop: '20px' }} variant="contained" color="primary" onClick={boemPaukenslag}>
          Boem paukenslag!
        </Button>
      </div>
    </div>
  );
};

export default BingoInputTabel;
