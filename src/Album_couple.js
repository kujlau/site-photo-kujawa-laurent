import React from 'react';

import {Link} from 'react-router-dom';

import Footer from "./Components/Footer";

import './Album_couple.css';

import image_1 from './images/Couple/img-couple-desktop/1.jpg';
import image_2 from './images/Couple/img-couple-desktop/2.jpg';
import image_3 from './images/Couple/img-couple-desktop/3.jpg';
import image_4 from './images/Couple/img-couple-desktop/4.jpg';
import image_5 from './images/Couple/img-couple-desktop/5.jpg';
import image_6 from './images/Couple/img-couple-desktop/6.jpg';
import image_7 from './images/Couple/img-couple-desktop/7.jpg';
import image_8 from './images/Couple/img-couple-desktop/8.jpg';
import image_9 from './images/Couple/img-couple-desktop/9.jpg';
import image_10 from './images/Couple/img-couple-desktop/10.jpg';
import image_11 from './images/Couple/img-couple-desktop/11.jpg';
import image_12 from './images/Couple/img-couple-desktop/12.jpg';




function AlbumCouple() {
  return (
    <div className='container'>
      <div className="back_couple">
        <Link className="retour" to="/galerie"><h2>RETOUR A LA GALERIE</h2></Link>
        <img className='img1' src={image_1} alt="couple assis qui danse"></img>
        <img className='img2' src={image_2} alt="portrait couple agé"></img>
        <img className='img3' src={image_3} alt="couple amoureux assit à la campagne"></img>
        <img className='img4' src={image_4} alt="couple de photographe dans la nature"></img>
        <img className='img5' src={image_5} alt="couple souriant"></img>
        <img className='img6' src={image_6} alt="adolescent assis sur un banc"></img>
        <img className='img7' src={image_7} alt="couple qui danse dans la rue"></img>
        <img className='img8' src={image_8} alt="couple s'enlaçant assis les yeux fermés"></img>
        <img className='img9' src={image_9} alt="jeune couple avec la femme tenant des ballons en forme de coeur"></img>
        <img className='img10' src={image_10} alt="couple agé"></img>
        <img className='img11' src={image_11} alt="couple allongé au sol"></img>
        <img className='img12' src={image_12} alt="femme avec gants de boxe faisant semblant de taper un homme"></img>
        <Link className="retour" to="/galerie"><h2>RETOUR A LA GALERIE</h2></Link>
        <Footer />
          
      </div>
      
    </div>
  );
}

export default AlbumCouple;