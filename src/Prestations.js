import React from 'react';

import './Prestations.css';

import Header from './Components/Header';

import image_1 from './images/logocantin-desktop.jpg';



function Prestations() {
  return (
    <div className='container'>
      <div className='back_prestations'>
        <Header />
        <div className='main-prestations'>
          <h1>Juste moi</h1>
          <h2><u>130 euros</u></h2>
          <p>Séances pour une personne,<br />en extérieur ou en studio</p>
          <div className='barre'></div>

          <h1>Pour deux</h1>
          <h2><u>195 euros</u></h2>
          <p>Pour deux personnes,<br />en extérieur ou en studio</p>
          <div className='barre'></div>

          <h1>Famille</h1>
          <h2><u>220 euros</u></h2>
          <p>Pour la famille ou les amis jusqu'à 4 personnes,<br />en extérieur ou en studio<br /></p>
          <p className='em'>30 euros en supplément par personne au-delà de 4<br />(hormis enfant jusqu'à 2 ans)</p>
          <div className='barre'></div>

          <h1>Il était une fois</h1>
          <h2><u>160 euros</u></h2>
          <p>Photo de grossesse<br />(A votre domicile, en extérieur ou en studio)</p>
          <div className='barre'></div>

          <h1>Mon bébé</h1>
          <h2><u>100 euros</u></h2>
          <p>Photo d'enfant jusqu'à 3 ans<br />(photo à domicile)</p>
          <div className='barre'></div>

          <h1>J''immortalise l'évènement</h1>
          <h2><u>sur mesure</u></h2>
          <p>Prestation de mariage ou baptême sur devis</p>
        </div>

        <div className="Footer">
          <a className="logo-end" href="/"><img className="footer-logo" src={image_1} title="Accueil" alt="logo charles cantin"/></a>
        </div>
      </div>
      
    </div>
  );
}

export default Prestations;