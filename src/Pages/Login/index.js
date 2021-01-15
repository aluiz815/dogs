import React,{useContext} from 'react';
import {Routes,Route, Navigate} from 'react-router-dom';
import LoginForm from '../../Components/LoginForm';
import { UserContext } from '../../Contexts/UserContext';
import LoginCreate from '../LoginCreate';
import LoginPasswordLost from '../LoginPasswordLost';
import LoginPasswordReset from '../LoginPasswordReset';

import styles from './login.module.css';

function Login() {

  const {login} = useContext(UserContext);

  if(login === true) return <Navigate to="/conta"/>

  return (
  <section className={styles.login}>
    <div className={styles.forms}>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="criar" element={<LoginCreate/>} />
        <Route path="perdeu" element={<LoginPasswordLost/>} />
        <Route path="resetar" element={<LoginPasswordReset/>} />
      </Routes>
    </div>
  </section>
  );
}

export default Login;