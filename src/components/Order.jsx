import React, { useState } from 'react';

function Order({ cartProducts, handleRemoveFromCart }) {
  return (
    <div>
      <h1>Ваша корзина</h1>
      {cartProducts.map((item) => {
        return (
          <div key={item.idDrink}>
            <p className="title">{item.strDrink}</p>
            <p>
              <img className="drink_photo" src={item.strDrinkThumb} />
            </p>
            <p>{item.idDrink}</p>
            <p> {item.count}</p>
            <button onClick={() => handleRemoveFromCart(item)}>удалить из заказа</button>
          </div>
        );
      })}
    </div>
  );
}

export default Order;
