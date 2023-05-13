import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Favorites, Home } from './pages';

import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/*',
      element: <Home />,
    },
    {
      path: '/favorites',
      element: <Favorites />,
    },
  ]);

  return <RouterProvider router={router} fallbackElement={<h3>loading</h3>} />;
}

export default App;
