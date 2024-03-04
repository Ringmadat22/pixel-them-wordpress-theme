import React from 'react';
import ReactDOM from 'react-dom'; 
import Header from './header';
import Hero from './Hero';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
  </React.StrictMode>
);

reportWebVitals();
