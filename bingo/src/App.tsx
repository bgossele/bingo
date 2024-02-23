import { Provider } from 'react-redux';
import './App.css';
import { store } from './store/store';
import { Input } from './views/Input';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Input />
    </Provider>
  );
}

export default App;
