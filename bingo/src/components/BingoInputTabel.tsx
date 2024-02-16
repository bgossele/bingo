import AddIcon from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useMemo, useState } from 'react';
import { BingoInput, BingoZin } from '../types/bingo';

const bingoZinnen: BingoZin[] = [
  {
    infinitief: 'spelen',
    vertaling: 'jouer',
    zin: 'Gisteren ... ik voor het eerst sinds lang nog eens onderwaterhockey.',
    sterkWerkwoord: false,
  },
];

function BingoInputTabel() {
  const [input, setInput] = useState<BingoInput>({ werkwoorden: [] });
  const [nieuwWerkwoord, setNieuwWerkwoord] = useState<string>('');
  const [nieuweVertaling, setNieuweVertaling] = useState<string>('');
  const [nieuweZin, setNieuweZin] = useState<string>('');

  const toevoegenMogelijk = useMemo(
    () => nieuwWerkwoord.length > 0 && nieuweVertaling.length > 0 && nieuweZin.length > 0,
    [nieuwWerkwoord, nieuweVertaling, nieuweZin],
  );

  const toevoegen = () => {
    const newWerkwoord: BingoZin = {
      infinitief: nieuwWerkwoord,
      vertaling: nieuweVertaling,
      zin: nieuweZin,
      sterkWerkwoord: false,
    };
    setInput((prevInput) => ({
      ...prevInput,
      werkwoorden: [...prevInput.werkwoorden, newWerkwoord],
    }));
    setNieuwWerkwoord('');
    setNieuweVertaling('');
    setNieuweZin('');
  };

  const handleNieuwWerkwoordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNieuwWerkwoord(event.target.value);
  };

  const handleZinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNieuweZin(event.target.value);
  };

  const handleVertalingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNieuweVertaling(event.target.value);
  };

  input.werkwoorden = bingoZinnen;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Werkwoord</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align="left">
              Zin
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align="left">
              Vertaling
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {input?.werkwoorden.map((row, index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.infinitief}
              </TableCell>
              <TableCell align="left">{row.zin}</TableCell>
              <TableCell align="left">{row.vertaling}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>
              <input type="text" value={nieuwWerkwoord} onChange={handleNieuwWerkwoordChange} />
            </TableCell>
            <TableCell>
              <input type="text" value={nieuweZin} onChange={handleZinChange} />
            </TableCell>
            <TableCell>
              <input type="text" value={nieuweVertaling} onChange={handleVertalingChange} />
            </TableCell>
            <TableCell>
              <AddIcon onClick={toevoegen} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BingoInputTabel;
