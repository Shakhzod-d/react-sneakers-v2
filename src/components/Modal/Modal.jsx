import React from 'react';

import './Modal.css';

export const Modal = ({ isOpen, close }) => {
  return (
    <div className={isOpen ? 'modalWrapper' : 'hideModal'}>
      <div className={isOpen ? 'childrenModal' : 'hideChildren'}>
        <h1>chilren</h1>
        <button onClick={close}>close modal</button>
      </div>
    </div>
  );
};
