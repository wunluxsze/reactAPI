import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './style.css';

function Login({ account, setLogin }) {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  function handleSubmit() {
    console.log(name, password);
    account.map((el) => {
      if (name === el.name && password === el.password) {
        setLogin(true);
      }
    });
  }
  function onPasswordChange(e) {
    let val = e.target.value;
    setPassword(val);
  }
  function onNameChange(e) {
    let val = e.target.value;
    setName(val);
  }

  return (
    <div className="wrapper_login">
      <form>
        <p>
          <label>имя:</label>
          <br />
          <input type="text" value={name} onChange={onNameChange} />
        </p>
        <p>
          <label>пароль:</label>
          <br />
          <input type="text" value={password} onChange={onPasswordChange} />
        </p>
        <button className="button" type="submit" value="отправить" onClick={handleSubmit}>
          <Link to="/"> отправить </Link>
        </button>
      </form>
    </div>
  );
}

export default Login;
