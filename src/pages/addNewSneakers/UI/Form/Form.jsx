import React from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Form = ({ addItem }) => {
  const {
    register,
    handleSubmit,
    formState: { message },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <div className="formContainer">
      <div className="container">
        <div className="header">
          <h2>Create new sneakers</h2>
        </div>

        <form className="form" id="form" onSubmit={handleSubmit(addItem)}>
          <div className="form__control">
            <label>Sneakers image</label>
            <input
              type="text"
              placeholder="Enter url"
              id="email"
              {...register('imageUrl', { required: 'salom' })}
            />
            <i className="fa fa-check-circle"></i>
            <i className="fa fa-exclamation-circle"></i>
            <small>{message}</small>
          </div>
          <div className="form__control">
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter sneakers title..."
              id="userName"
              {...register('title')}
            />
            <i className="fa fa-check-circle"></i>
            <i className="fa fa-exclamation-circle"></i>
            <small>Error message</small>
          </div>

          <div className="form__control">
            <label>Price</label>
            <input
              type="text"
              placeholder="price..."
              id="password"
              {...register('price', {
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Please enter a number',
                },
              })}
            />
            <i className="fa fa-check-circle"></i>
            <i className="fa fa-exclamation-circle"></i>
            <small>{message}</small>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
