import React, { useState } from "react";
import FIELDS from "common/resources/fields";
import "./LoginForm.scss";

function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  return (
    <div className="login__container">
      <h1>Login</h1>
      <form className="login__form">
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
        <input className="login__btn" type="submit" value="Login" />
      </form>
    </div>
  );
}

export default LoginForm;
