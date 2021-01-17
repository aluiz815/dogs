import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {UserContext} from '../../Contexts/UserContext';
import {useLocation} from 'react-router-dom';
import {ReactComponent as MinhasFotos} from '../../assets/feed.svg';
import {ReactComponent as Estatisticas} from '../../assets/estatisticas.svg';
import {ReactComponent as AdicionarFoto} from '../../assets/adicionar.svg';
import {ReactComponent as Sair} from '../../assets/sair.svg';
import useMedia from '../../Hooks/useMedia';
import styles from './UserHeaderNav.module.css';


function UserHeaderNav() {
  const {userLogout} = useContext(UserContext);
  const mobile = useMedia('(max-width:40rem)');
  const [mobileMenu,setMobileMenu] = useState(false);
  const {pathname} = useLocation();
  useEffect(()=>{
    setMobileMenu(false)
  },[pathname])
  return (
    <>
    {mobile &&   <button className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} aria-label="Menu" onClick={()=> setMobileMenu(!mobileMenu)}/>}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/conta" end activeClassName={styles.active}><MinhasFotos/>{mobile && 'Minhas Fotos' }</NavLink>
        <NavLink to="/conta/estatisticas" activeClassName={styles.active}><Estatisticas/>{mobile && 'Estatisticas' }</NavLink>
        <NavLink to="/conta/postar" activeClassName={styles.active}><AdicionarFoto/>{mobile && 'Adicionar Fotos' }</NavLink>
        <button onClick={userLogout}><Sair/>{mobile && 'Sair' }</button>
      </nav>
    </>
  );
}

export default UserHeaderNav;