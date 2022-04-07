import React from 'react';
import { useNavigate } from 'react-router';
import './styles.css';
import emptyCart from "../../../images/emptyCart.png";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className='emptyCart'>
      <img src={emptyCart} alt='' />
      <p>Список заказов пуст!</p>
      <button onClick={() => navigate('/')}>
        <i className='fas fa-long-arrow-alt-left'></i> Покупай сейчас
      </button>
    </div>
  );
};

export default EmptyCart;
