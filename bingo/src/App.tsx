import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import DropZone from './components/DropZone';

const handleClick = () => {
  console.log("Boem paukenslag!");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>Bingo generator</h1>
        {/* <DropZone /> */}
        <div>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Boem paukenslag!
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
