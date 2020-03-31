import React from 'react';
import classes from './login.module.scss';

const Login = () => {
  return (
    <div className={classes.container}>
      <form className={classes.wrapper}>
        <p>Registrarse</p>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <p>Restablezca su contraseña</p>
        <button>REGISTRARSE</button>
        <p className={classes.newAccount}>Crear una cuenta</p>
      </form>
    </div>
  );
};

export default Login;
