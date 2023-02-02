import React, { useState } from 'react';
import './style.css';

const Cocktail = ({ drinks, handleAddProductToCart }) => {
  const showDrinks = drinks.map((item) => {
    return (
      <div key={item.idDrink}>
        <p className="title">{item.strDrink}</p>
        <p>
          <img className="drink_photo" src={item.strDrinkThumb} />
        </p>
        <p>{item.idDrink}</p>
        <button className="button" onClick={() => handleAddProductToCart(item)} type="primary">
          Добавить в заказ
        </button>
      </div>
    );
  });
  return <div className="wrapper">{showDrinks}</div>;
};

export default Cocktail;
