import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header'
import MainContent from './MainContent'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className="wrapper">
    <Header />
    <MainContent />
  </div>
  );

