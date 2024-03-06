import { Stack } from '@mui/material';
import React from 'react';
import { BingoOutput } from '../components/BingoOutput';
import { Input } from './Input';

const Bingo: React.FC = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Input />
      <BingoOutput />
    </Stack>
  );
};

export default Bingo;
