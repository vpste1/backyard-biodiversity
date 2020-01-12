import React, { useState } from "react";
import "./AuthForm.scss";

import logo from "../../assets/images/logo_128.png";

function LoginForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(formData);
  }

  return (
    <div className="auth__container">
      <div className="auth__logo">
        <img src={logo} />
      </div>
      <div className="auth__body">
        <h1>Login</h1>
        <form className="auth__form" onSubmit={handleSubmit}>
          <label for="email" class="hidden">
            Email
          </label>
          <input
            type="text"
            name="email"
            className="auth__input"
            autoComplete="email"
            placeholder="Email"
            value={formData.username}
            onChange={event =>
              setFormData({ ...formData, username: event.target.value })
            }
          />
          <label for="password" class="hidden">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="auth__input"
            autoComplete="password"
            placeholder="Password"
            value={formData.password}
            onChange={event =>
              setFormData({ ...formData, password: event.target.value })
            }
          />
          <input className="btn auth__btn" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}

export default LoginForm;