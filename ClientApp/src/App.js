import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './components/Main'
import Bots from './components/Bots'
import Friends from './components/Friends'
import './custom.css';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Bots" element={<Bots />} />
      <Route path="/Friends" element={<Friends />} />
    </Routes>
  );
}

export default App;