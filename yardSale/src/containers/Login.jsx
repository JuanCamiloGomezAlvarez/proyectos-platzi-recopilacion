import React from 'react';
import '../styles/Login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src="./logos/logo_yard_sale.svg" alt=" logo" className="logo" />
        <h1 className="title"> Create a new password</h1>
        <p className="subtitle">Enter a new password for your account</p>
        <form className="form" action="/">
          <label className="label" for="password">
            Password
          </label>
          <input
            className="input input-password"
            type="password"
            id="password"
            placeholder="*********"
          />
          <label className="label" for="Re-password">
            Re-enter password
          </label>
          <input
            className="input input-password"
            type="password"
            id="Re-password"
            placeholder="*********"
          />
          <input
            className="primary-button login-button"
            type="submit"
            value="Confirm"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
