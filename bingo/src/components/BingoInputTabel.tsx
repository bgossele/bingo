import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { BingoZin } from '../types/bingo';

const bingoZinnen: BingoZin[] = [
  {
    infinitief: 'spelen',
    vertaling: 'jouer',
    zin: 'Gisteren ... ik voor het eerst sinds lang nog eens onderwaterhockey.',
    sterkWerkwoord: false,
  },
];

function BingoInputTabel() {
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
          {bingoZinnen.map((row, index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.infinitief}
              </TableCell>
              <TableCell align="left">{row.zin}</TableCell>
              <TableCell align="left">{row.vertaling}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BingoInputTabel;
