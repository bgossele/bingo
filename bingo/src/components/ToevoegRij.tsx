import AddIcon from '@mui/icons-material/Add';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { ChangeEvent, useMemo, useState } from 'react';
import { BingoZin } from '../types/bingo';

export type Props = {
  toevoegenAanInput: (b: BingoZin) => void;
};

const ToevoegRij = (props: Props) => {
  const [nieuweBingoZin, setNieuweBingoZin] = useState<BingoZin>({});
  const { toevoegenAanInput } = props;

  function handleChange(name: string): (event: ChangeEvent<HTMLInputElement>) => void {
    return (event: ChangeEvent<HTMLInputElement>): void => {
      setNieuweBingoZin({ ...nieuweBingoZin, [name]: event.target.value });
      console.log('event.target.value', event.target.value);
    };
  }

  const stringNietLeeg = (s: string | undefined): boolean => s != undefined && s.length > 0;

  const toevoegenMogelijk = useMemo(() => {
    console.log('nieuweBingoZin', nieuweBingoZin);
    return (
      stringNietLeeg(nieuweBingoZin.infinitief) &&
      stringNietLeeg(nieuweBingoZin.vertaling) &&
      stringNietLeeg(nieuweBingoZin.zin)
    );
  }, [nieuweBingoZin]);

  const toevoegen = () => {
    if (toevoegenMogelijk) {
      toevoegenAanInput(nieuweBingoZin);
      setNieuweBingoZin({});
    } else {
      console.log('Niet alle velden zijn ingevuld');
    }
  };

  return (
    <TableRow key="toevoegen">
      <TableCell>
        <input type="text" onChange={handleChange('infinitief')} style={{ width: '100%' }} />
      </TableCell>
      <TableCell>
        <input type="text" onChange={handleChange('zin')} style={{ width: '100%' }} />
      </TableCell>
      <TableCell>
        <input type="text" onChange={handleChange('vertaling')} style={{ width: '100%' }} />
      </TableCell>
      <TableCell>
        <AddIcon onClick={toevoegen} />
      </TableCell>
    </TableRow>
  );
};

export default ToevoegRij;
