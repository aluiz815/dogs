import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserHeader from '../../Components/UserHeader';
import UserPhotoPost from '../UserPhotoPost';
import UserStats from '../UserStats';
import Feed from '../../Components/Feed';

function User() {
  return (
    <section className="container">
      <UserHeader/>
      <Routes>
        <Route path="/" element={<Feed/>}/>
        <Route path="postar" element={<UserPhotoPost/>}/>
        <Route path="estatisticas" element={<UserStats/>}/>
      </Routes>
    </section>
  );
}

export default User;