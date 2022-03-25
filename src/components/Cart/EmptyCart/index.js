import React from 'react';
import { useHistory } from 'react-router';
import './styles.css';
import emptyCart from "../../../images/emptyCart.png";

const EmptyCart = () => {
  const history = useHistory();
  return (
    <div className='emptyCart'>
      <img src={emptyCart} alt='' />
      <p>Список заказов пуст!</p>
      <button onClick={() => history.push('/')}>
        <i className='fas fa-long-arrow-alt-left'></i> Покупай сейчас
      </button>
    </div>
  );
};

export default EmptyCart;
