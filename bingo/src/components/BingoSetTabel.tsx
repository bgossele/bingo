import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useWerkwoorden } from '../hooks/bingozinnen/hooks';

export type Props = {
  bingoSet: Set<number>;
};

export const BingoSetTabel = (props: Props) => {
  const { bingoSet } = props;

  const werkwoorden = useWerkwoorden();

  const tableRows = Array.from(bingoSet).map((nummertje) => {
    const { infinitief, vertaling, zin } = werkwoorden[nummertje];
    return (
      <TableRow key={nummertje} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component="th" scope="row">
          {infinitief}
        </TableCell>
        <TableCell align="left" sx={{ width: '300px' }}>
          {zin}
        </TableCell>
        <TableCell align="left">{vertaling}</TableCell>
        <TableCell />
      </TableRow>
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Werkwoord</TableCell>
            <TableCell sx={{ fontWeight: 'bold', maxWidth: '300px', wordWrap: 'break-word' }} align="left">
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
  );
};
