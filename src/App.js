import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Favorites, Home, NotFound } from './pages';

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
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} fallbackElement={<h3>loading</h3>} />;
}

export default App;
// <Route path="*" element={<PageNotFound />} />
