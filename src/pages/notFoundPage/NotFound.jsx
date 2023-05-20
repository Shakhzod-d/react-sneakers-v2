import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.css';

export const NotFound = () => {
  return (
    <div className="notFoundPage">
      <h3>Not Found Page</h3>
      <Link to={'/allSneakers'}>Go home</Link>
    </div>
  );
};
