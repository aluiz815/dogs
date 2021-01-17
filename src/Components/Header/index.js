import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from  './header.module.css';
import {ReactComponent as Dogs} from '../../assets/dogs.svg'
import {UserContext} from '../../Contexts/UserContext';


function Header() {

  const {data} = useContext(UserContext);

  return <header className={styles.header}>
   <nav className={`${styles.nav} container`}>
     <Link className={styles.logo} to="/" aria-label="Dogs - Home"><Dogs/></Link>
     {data ? (
      <Link className={styles.login}  to="/conta">
        {data.nome}
      </Link>
      )  : (
        <Link className={styles.login}  to="/login">Login / Criar</Link>
      )
     }
    
   </nav>
  </header>;
}

export default Header;