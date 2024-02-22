import AddIcon from '@mui/icons-material/Add';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { ChangeEvent, useMemo, useState } from 'react';
import { BingoZin } from '../types/bingo';

export type Props = {
  toevoegenAanInput: (b: BingoZin) => void;
};

const legeBingoZin: BingoZin = {
  infinitief: '',
  zin: '',
  vertaling: '',
};

const ToevoegRij = (props: Props) => {
  const [nieuweBingoZin, setNieuweBingoZin] = useState<BingoZin>(legeBingoZin);
  const { toevoegenAanInput } = props;

  function handleChange(name: string): (event: ChangeEvent<HTMLInputElement>) => void {
    return (event: ChangeEvent<HTMLInputElement>): void => {
      setNieuweBingoZin({ ...nieuweBingoZin, [name]: event.target.value });
    };
  }

  const stringNietLeeg = (s: string | undefined): boolean => s != undefined && s.length > 0;

  const toevoegenMogelijk = useMemo(() => {
    return (
      stringNietLeeg(nieuweBingoZin.infinitief) &&
      stringNietLeeg(nieuweBingoZin.vertaling) &&
      stringNietLeeg(nieuweBingoZin.zin)
    );
  }, [nieuweBingoZin]);

  const toevoegen = () => {
    if (toevoegenMogelijk) {
      toevoegenAanInput(nieuweBingoZin);
      setNieuweBingoZin(legeBingoZin);
    }
  };

  return (
    <TableRow key="toevoegen">
      <TableCell>
        <input
          type="text"
          value={nieuweBingoZin.infinitief}
          onChange={handleChange('infinitief')}
          style={{ width: '100%' }}
        />
      </TableCell>
      <TableCell>
        <input type="text" value={nieuweBingoZin.zin} onChange={handleChange('zin')} style={{ width: '100%' }} />
      </TableCell>
      <TableCell>
        <input
          type="text"
          value={nieuweBingoZin.vertaling}
          onChange={handleChange('vertaling')}
          style={{ width: '100%' }}
        />
      </TableCell>
      <TableCell>
        <AddIcon onClick={toevoegen} color={toevoegenMogelijk ? 'primary' : 'secondary'} />
      </TableCell>
    </TableRow>
  );
};

export default ToevoegRij;
