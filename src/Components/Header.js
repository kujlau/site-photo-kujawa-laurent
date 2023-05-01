import React from 'react';

import './Header.css';

import image_1 from './images/logocantin-desktop.jpg';

import image_2 from './images/icon-facebook.png';

import image_3 from './images/icon-instagram.png';

const Header = () => {
  return (
    <div>
      <header>
          <nav>
            <div className='nav-start'>
              <ul className='start'>
                <li className='galerie'>
                  <a className="link_galerie" href="/Galerie">
                    <h1 className='galerie'>Galerie</h1>
                  </a>
                </li>
                <li className='prestations'>
                  <a className="link_prestations" href="/prestations">
                    <h1 className='prestations'>Prestations & Tarifs</h1>
                  </a>
                </li>
              </ul>
            </div>
            

            <a className="logo" href="/"><img className="Header-logo" src={image_1} title="Accueil" alt="logo charles cantin"/></a>

            <div className='nav-end'>
              <ul className='end'>  
                <li className='contact'>
                  <a className="link_contact" href="/contact">
                    <h1 className='contact'>Contact</h1>
                  </a>
                </li>
                <li className='suivez-moi'>
                  <h1 className='suivez'>Suivez-moi</h1>
                  <a className="facebook" href="/"><img className="menu-faceb" src={image_2} alt="logo facebook"/></a>
                  <a className="instagram" href="/"><img className="menu-instag" src={image_3} alt="logo instagram"/></a>
                  </li>
                </ul>
            </div>
            
          </nav>
        </header>
    </div>
  );
}

export default Header;