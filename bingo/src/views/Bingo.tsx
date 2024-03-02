import React from 'react';
import { BingoOutput } from '../components/BingoOutput';
import { Input } from './Input';

const Bingo: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <Input />
      </div>
      <div style={{ flex: 1 }}>
        <BingoOutput />
      </div>
    </div>
  );
};

export default Bingo;
