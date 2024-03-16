import { Route, Routes } from 'react-router-dom';
import { BingoOutput } from '../components/BingoOutput';
import Bingo from '../views/Bingo';

const BingoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Bingo />} />
      <Route path="/output" element={<BingoOutput />} />
      //In geval van nood
      <Route path="*" element={<Bingo />} />
    </Routes>
  );
};

export default BingoRoutes;
