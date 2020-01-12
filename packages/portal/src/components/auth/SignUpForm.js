import React, { useState } from "react";
import "./AuthForm.scss";

import logo from "../../assets/images/logo_128.png";

function SignUpForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    givenName: "",
    familyName: ""
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
        <h1>Sign up</h1>
        <form className="auth__form" onSubmit={handleSubmit}>
          <label for="email" class="hidden">
            Email
          </label>
          <input
            type="email"
            name="email"
            autoComplete="email"
            className="auth__input"
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
            autoComplete="new-password"
            className="auth__input"
            placeholder="Password"
            value={formData.password}
            onChange={event =>
              setFormData({ ...formData, password: event.target.value })
            }
          />
          <label for="given-name" class="hidden">
            First name
          </label>
          <input
            type="text"
            name="given-name"
            className="auth__input"
            placeholder="First name"
            value={formData.givenName}
            onChange={event =>
              setFormData({ ...formData, givenName: event.target.value })
            }
          />
          <label for="family-name" class="hidden">
            Last name
          </label>
          <input
            type="text"
            name="family-name"
            className="auth__input"
            placeholder="Last name"
            value={formData.familyName}
            onChange={event =>
              setFormData({ ...formData, familyName: event.target.value })
            }
          />

          <input className="btn auth__btn" type="submit" value="Sign up" />
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
