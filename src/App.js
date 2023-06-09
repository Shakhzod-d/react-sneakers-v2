import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AddNewSneakers, Favorites, Home, NotFound, SneakeresDetails } from './pages';

import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/allSneakers',
      element: <Home />,
    },
    {
      path: '/favorites',
      element: <Favorites />,
    },
    {
      path: '/addNewSneakers',
      element: <AddNewSneakers />,
    },
    {
      path: '/details/:cardId',
      element: <SneakeresDetails />,
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
