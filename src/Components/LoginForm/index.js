import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import Button from '../Button';
import Input from '../Input';
import Error from '../Error';
import {UserContext} from '../../Contexts/UserContext';
import styles from './LoginForm.module.css';
import stylesBtn from '../Button/button.module.css';
function LoginForm() {
  const username = useForm();
  const password = useForm();
  const {userLogin, error , loading} = useContext(UserContext); 
  async function handleSubmit(e) {
    e.preventDefault();
    if(username.validate() && password.validate()){
    userLogin(username.value,password.value);
  }
}

  
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username}/>
        <Input label="Senha" type="password" name="password" {...password}/>
        {loading ? (<Button disabled >Carregando...</Button>) : (<Button >Entrar</Button>)}
        <Error error={error}/>
      </form>
      <Link to="/login/perdeu" className={styles.perdeu}>Perdeu a senha ?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta ? Cadastre-se no site.</p>
        <Link to="/login/criar" className={stylesBtn.button}>Cadastro</Link>
      </div>
    </section>
  );
}

export default LoginForm;