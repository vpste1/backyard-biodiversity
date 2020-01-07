import React, { useState } from "react";
import FIELDS from "common/resources/fields";
import "./LoginForm.scss";

import logo from "../assets/images/logo_128.png";

function LoginForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  function handleSubmit(event) {
    event.preventDefault();
    const { username, password } = event.target.elements;

    onSubmit(formData);
  }

  return (
    <div className="login__container">
      <div className="login__logo">
        <img src={logo} />
      </div>
      <div className="login__body">
        <h1>Login</h1>
        <form className="login__form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="login__input"
            placeholder="Email"
            value={formData.username}
            onChange={event =>
              setFormData({ ...formData, username: event.target.value })
            }
          />
          <input
            type="password"
            className="login__input"
            placeholder="Password"
            value={formData.password}
            onChange={event =>
              setFormData({ ...formData, password: event.target.value })
            }
          />
          <input className="btn login__btn" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
