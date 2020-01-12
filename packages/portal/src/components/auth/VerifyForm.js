import React, { useState } from "react";
import "./AuthForm.scss";

import logo from "../../assets/images/logo_128.png";

function VerifyForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    confirmationCode: ""
  });

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit("vaughan.stedman@gmail.com", formData.confirmationCode);
  }

  return (
    <div className="auth__container">
      <div className="auth__logo">
        <img src={logo} />
      </div>
      <div className="auth__body">
        <h1>Confirm email</h1>
        <form className="auth__form" onSubmit={handleSubmit}>
          <label for="code" class="hidden">
            Confirmation code
          </label>
          <input
            type="text"
            name="code"
            inputMode="numeric"
            autoComplete="one-time-code"
            className="auth__input"
            placeholder="Confirmation code"
            value={formData.confirmationCode}
            onChange={event =>
              setFormData({ ...formData, confirmationCode: event.target.value })
            }
          />

          <input className="btn auth__btn" type="submit" value="Verify" />
        </form>
      </div>
    </div>
  );
}

export default VerifyForm;
