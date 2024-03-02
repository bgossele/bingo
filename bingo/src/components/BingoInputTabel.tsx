import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ChangeEvent, useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useParameters, useWerkwoorden } from '../hooks/bingozinnen/hooks';
import { setParameter, voegWerkwoordToe } from '../hooks/bingozinnen/reducer';
import { BingoZin } from '../types/bingo';
import ToevoegRij from './ToevoegRij';

const BingoInputTabel = () => {
  const werkwoorden = useWerkwoorden();
  const parameters = useParameters();
  const dispatch = useDispatch();

  const onParameterChange = (name: string): ((event: ChangeEvent<HTMLInputElement>) => void) => {
    return (event: ChangeEvent<HTMLInputElement>): void => {
      const parsedValue = parseInt(event.target.value);
      if (!isNaN(parsedValue)) {
        dispatch(setParameter({ name, value: parsedValue }));
      }
    };
  };

  const werkwoordToevoegen = useCallback(
    (bingoZin: BingoZin) => {
      dispatch(voegWerkwoordToe(bingoZin));
    },
    [dispatch],
  );

  const bestaandeWerkwoorden = useMemo(
    () =>
      werkwoorden.map((row, index) => (
        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell component="th" scope="row">
            {row.infinitief}
          </TableCell>
          <TableCell align="left" sx={{ width: '400px' }}>
            {row.zin}
          </TableCell>
          <TableCell align="left">{row.vertaling}</TableCell>
          <TableCell />
        </TableRow>
      )),
    [werkwoorden],
  );

  const tableRows = useMemo(() => {
    return bestaandeWerkwoorden.concat(<ToevoegRij key="nieuwezin" toevoegenAanInput={werkwoordToevoegen} />);
  }, [werkwoordToevoegen, bestaandeWerkwoorden]);

  return (
    <div>
      <TableContainer component={Paper} style={{ display: 'flex', justifyContent: 'center', width: 'auto' }}>
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
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>{tableRows}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BingoInputTabel;
