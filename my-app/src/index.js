import React from 'react';
import ReactDOM from 'react-dom'; 
import Header from './header';
import Hero from './Hero';
import Services from './services'
import reportWebVitals from './reportWebVitals';
import Work from './work'
import Testimony from './testimony'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {

  return (
    <React.StrictMode>
      <Header />
      <Hero />
      <Services />
      <Work />
      <Testimony />
    </React.StrictMode>

  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
