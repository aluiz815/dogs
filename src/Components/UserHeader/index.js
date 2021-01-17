import React,{useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import UserHeaderNav from '../UserHeaderNav';
import styles from './UserHeader.module.css';


function UserHeader() {

  const [title,setTitle] = useState('');
  const location = useLocation();

  useEffect(()=>{
    setTitle(location.pathname)
    if('/conta' === location.pathname) setTitle('Minha Conta')
    if('/conta/estatisticas' === location.pathname) setTitle('Estatisticas')
    if('/conta/postar' === location.pathname) setTitle('Poste Sua Foto')
  },[location])


  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav/>
    </header>
  );
}

export default UserHeader;