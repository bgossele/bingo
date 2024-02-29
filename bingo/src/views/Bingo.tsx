import React from 'react';
import wortelImage from '../assets/wortel.jpg';
import { Input } from './Input';

const Bingo: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <Input />
      </div>
      <div style={{ flex: 1 }}>
        <img src={wortelImage} alt="Wortel" />
      </div>
    </div>
  );
};

export default Bingo;
