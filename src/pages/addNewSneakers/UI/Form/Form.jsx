import React from 'react';

import './Form.css';

export const Form = () => {
  const [item, setItem] = React.useState({
    url: '',
    title: '',
    price: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.url.length > 3 && item.title.length > 3 && item.price.length > 3) {
      console.log(item);
    } else {
      window.alert('Enter no more than 4 chars');
    }
  };

  const enterPrice = (e) => {
    var numberRegex = /^\d+$/;

    if (numberRegex.test(e.target.value)) {
      console.log(e.target.value.length);
      setItem((prevValue) => ({ ...prevValue, price: e.target.value }));
    } else if (item.price.length === 1) {
      setItem((prevValue) => ({ ...prevValue, price: '' }));
    }
  };

  return (
    <div className="formContainer">
      <div className="container">
        <div className="header">
          <h2>Create new sneakers</h2>
        </div>

        <form className="form" id="form" onSubmit={handleSubmit}>
          <div className="form__control">
            <label>Sneakers image</label>
            <input
              className={item.url.length < 4 ? 'error' : 'success'}
              onChange={(e) => setItem((prevValue) => ({ ...prevValue, url: e.target.value }))}
              value={item.url}
              type="text"
              placeholder="Enter url"
              id="email"
              required
            />
            <i className="fa fa-check-circle"></i>
            <i className="fa fa-exclamation-circle"></i>
            <small>Error message</small>
          </div>
          <div className="form__control">
            <label>Title</label>
            <input
              className={item.title.length < 4 ? 'error' : 'success'}
              onChange={(e) => setItem((prevValue) => ({ ...prevValue, title: e.target.value }))}
              value={item.title}
              type="text"
              placeholder="Enter sneakers title..."
              id="userName"
              required
            />
            <i className="fa fa-check-circle"></i>
            <i className="fa fa-exclamation-circle"></i>
            <small>Error message</small>
          </div>

          <div className="form__control">
            <label>Price</label>
            <input
              className={item.price.length < 4 ? 'error' : 'success'}
              onChange={enterPrice}
              value={item.price}
              type="text"
              placeholder="price..."
              id="password"
              required
            />
            <i className="fa fa-check-circle"></i>
            <i className="fa fa-exclamation-circle"></i>
            <small>Error message</small>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
