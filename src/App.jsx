import Cocktail from './components/Cocktail';
import Order from './components/Order';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import uuid from 'react-uuid';
import './components/style.css';

function App() {
  const [login, setLogin] = useState(false);

  const [account, setAccount] = useState([
    { id: uuid(), name: 'admin', password: 'admin' },
    { id: uuid(), name: 'тыыы', password: '88888' },
    { id: uuid(), name: 'оннн', password: 'никогданевзломают' },
  ]);

  const [drinks, setDrinks] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  const handleAddProductToCart = (item) => {
    let prod = {
      idDrink: item.idDrink,
      strDrink: item.strDrink,
      strDrinkThumb: item.strDrinkThumb,
      count: 1,
    };
    setCartProducts([...cartProducts, prod]);
    const newCart = cartProducts.map((el) => {
      if (el.idDrink === item.idDrink) {
        let prodNew = {
          idDrink: el.idDrink,
          strDrink: el.strDrink,
          strDrinkThumb: el.strDrinkThumb,
          count: el.count + 1,
        };
        setCartProducts(cartProducts.map((x) => (x.idDrink === el.idDrink ? prodNew : x)));
        console.log(prodNew);
      } else {
        console.log('uvcgdyvgwd hjyfgvhjgjug');
      }
    });
    console.log(newCart);
  };

  const handleRemoveFromCart = (item) => {
    const newCartProducts = cartProducts.filter((id) => id !== item);
    setCartProducts(newCartProducts);
  };

  useEffect(() => {
    const gettingCoctail = async () => {
      const api_url = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`,
      );
      const data = await api_url.json();
      setDrinks(data.drinks);
    };
    gettingCoctail();
  }, []);
  return (
    <Router>
      <div className="App">
        {login == true && <p>вы зарегестрированы</p>}
        <div>
          <Link to="/order"> Заказы</Link>
          <Link to="/"> На главную</Link>
          <a>
            <Link to="/reg">Регистрация</Link>
          </a>
          <a>
            <Link to="/login">Логин</Link>
          </a>
        </div>
        <div>
          <Routes>
            <Route
              path="/"
              element={<Cocktail drinks={drinks} handleAddProductToCart={handleAddProductToCart} />}
            />
            <Route
              path="/order"
              element={
                <Order cartProducts={cartProducts} handleRemoveFromCart={handleRemoveFromCart} />
              }
            />
            <Route
              path="/reg"
              element={
                <Registration
                  propName={''}
                  propPassword={''}
                  propEmail={''}
                  account={account}
                  setAccount={setAccount}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login setLogin={setLogin} account={account} propName={''} propPassword={''} />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
