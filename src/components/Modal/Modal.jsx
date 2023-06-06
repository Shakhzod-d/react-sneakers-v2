import React from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';

import './Modal.css';

export const Modal = ({ isOpen, close, items = [] }) => {
  return (
    <div className={isOpen ? 'modalWrapper' : 'hideModal'}>
      <div className={isOpen ? 'childrenModal' : 'hideChildren'}>
        <div className="modal_header">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <h1>Корзина</h1>
            <button className="modal_close_btn" onClick={close}>
              <MdOutlineClose className="modal_close_icon" size={72} />
            </button>
          </div>

          <section className="modal_body">
            {items?.map((item) => {
              const { imageUrl, title, price } = item;
              return (
                <div className="item" key={item.id}>
                  <div>
                    <img width={'70px'} src={imageUrl} alt="no" />
                  </div>
                  <div className="item_title">
                    <p className="title">{title}</p>
                    <p className="summa">{price} руб. </p>
                  </div>
                  <div>
                    <button className="modal_close_btn" onClick={() => {}}>
                      <MdOutlineClose className="modal_close_icon" size={72} />
                    </button>
                  </div>
                </div>
              );
            })}
          </section>
        </div>

        <footer className="modal_footer">
          {/* <p>Итого: 21 498 руб. </p>
          <p>Налог 5%: 1074 руб. </p> */}
          <button>
            Оформить заказ <FaArrowRight className="right_icon" />
          </button>
        </footer>
      </div>
    </div>
  );
};
