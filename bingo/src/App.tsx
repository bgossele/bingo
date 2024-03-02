import { Provider } from 'react-redux';
import './App.css';
import { store } from './store/store';
import Bingo from './views/Bingo';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Bingo />
    </Provider>
  );
}

export default App;
