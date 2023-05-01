import React from 'react';

import './Accueil.css';

import Header from './Components/Header';

import Footer from './Components/Footer';



function Accueil() {
  return (
    <div className='container'>
      <div className='back_accueil'>
        <Header />
        <div className="wrapper-title">
            
            <h1 className= "main-title">Charles Cantin&nbsp;<em>- &nbsp; Photographe</em></h1>
            <h3 className="subtitle"></h3>
            
        </div>
        <Footer />
      </div>
      
    </div>
  );
}

export default Accueil;