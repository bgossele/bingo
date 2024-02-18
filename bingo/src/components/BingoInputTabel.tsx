import AddIcon from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useCallback, useMemo, useState } from 'react';
import { BingoInput, BingoZin } from '../types/bingo';

function BingoInputTabel() {
  const [input] = useState<BingoInput>({ werkwoorden: [] });
  const [nieuwWerkwoord, setNieuwWerkwoord] = useState<string>('');
  const [nieuweVertaling, setNieuweVertaling] = useState<string>('');
  const [nieuweZin, setNieuweZin] = useState<string>('');

  const toevoegenMogelijk = useMemo(
    () => nieuwWerkwoord.length > 0 && nieuweVertaling.length > 0 && nieuweZin.length > 0,
    [nieuwWerkwoord, nieuweVertaling, nieuweZin],
  );

  const toevoegen = useCallback(() => {
    if (!toevoegenMogelijk) {
      return;
    }
    const newWerkwoord: BingoZin = {
      infinitief: nieuwWerkwoord,
      vertaling: nieuweVertaling,
      zin: nieuweZin,
      sterkWerkwoord: false,
    };
    input.werkwoorden.push(newWerkwoord);
    setNieuwWerkwoord('');
    setNieuweVertaling('');
    setNieuweZin('');
  }, [input, nieuwWerkwoord, nieuweVertaling, nieuweZin, toevoegenMogelijk]);

  const handleNieuwWerkwoordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNieuwWerkwoord(event.target.value);
  };

  const handleZinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNieuweZin(event.target.value);
  };

  const handleVertalingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNieuweVertaling(event.target.value);
  };

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
      .concat(
        <TableRow key="toevoegen">
          <TableCell>
            <input type="text" value={nieuwWerkwoord} onChange={handleNieuwWerkwoordChange} style={{ width: '100%' }} />
          </TableCell>
          <TableCell>
            <input type="text" value={nieuweZin} onChange={handleZinChange} style={{ width: '100%' }} />
          </TableCell>
          <TableCell>
            <input type="text" value={nieuweVertaling} onChange={handleVertalingChange} style={{ width: '100%' }} />
          </TableCell>
          <TableCell>
            <AddIcon onClick={toevoegen} />
          </TableCell>
        </TableRow>,
      );
  }, [input.werkwoorden, nieuwWerkwoord, nieuweVertaling, nieuweZin, toevoegen]);

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
                <input type="number" min={1} name="boe" />
              </TableCell>
              <TableCell>
                <input type="number" min={1} name="boe" />
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
}

export default BingoInputTabel;
