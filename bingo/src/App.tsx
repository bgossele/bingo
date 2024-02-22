import Button from '@mui/material/Button';
import './App.css';
import BingoInput from './components/BingoInputTabel';

const handleClick = (): void => {
  console.log('Boem paukenslag!');
};

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bingo generator</h1>
      </header>
      <BingoInput />
      <div>
        <Button sx={{ marginTop: '20px' }} variant="contained" color="primary" onClick={handleClick}>
          Boem paukenslag!
        </Button>
      </div>
    </div>
  );
}

export default App;
