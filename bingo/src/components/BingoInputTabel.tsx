import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { BingoInput, BingoParameters, BingoZin } from '../types/bingo';
import ToevoegRij from './ToevoegRij';

const initialParameters = {
  aantalRijenPerBlad: 5,
  aantalBladen: 5,
};

const BingoInputTabel = () => {
  const [input] = useState<BingoInput>({ werkwoorden: [] });
  const [parameters, setParameters] = useState<BingoParameters>(initialParameters);

  const onParameterChange = (name: string): ((event: ChangeEvent<HTMLInputElement>) => void) => {
    return (event: ChangeEvent<HTMLInputElement>): void =>
      setParameters({ ...parameters, [name]: parseInt(event.target.value) });
  };

  const toevoegen = useCallback(
    (bingoZin: BingoZin) => {
      input.werkwoorden.push(bingoZin);
      console.log('input', input);
    },
    [input],
  );

  const tableRows = useMemo(() => {
    return input.werkwoorden
      .map((row, index) => (
        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell component="th" scope="row">
            {row.infinitief}
          </TableCell>
          <TableCell align="left" sx={{ width: '400px' }}>
            {row.zin}
          </TableCell>
          <TableCell align="left">{row.vertaling}</TableCell>
        </TableRow>
      ))
      .concat(<ToevoegRij key="nieuwezin" toevoegen={toevoegen} />);
  }, [input.werkwoorden, toevoegen]);

  return (
    <div>
      <TableContainer component={Paper} style={{ display: 'flex', justifyContent: 'center' }}>
        <Table aria-label="simple table" sx={{ maxWidth: 200 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Aantal formulieren</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="left">
                Aantal inputgroepen
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
    </div>
  );
};

export default BingoInputTabel;
