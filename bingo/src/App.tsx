import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import BingoRoutes from './navigation/Routes';
import { store } from './store/store';

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '*',
      Component: BingoRoutes,
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
