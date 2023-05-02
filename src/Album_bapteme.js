import React from 'react';

import {Link} from 'react-router-dom';

import Footer from "./Components/Footer";

import './Album_bapteme.css';

import image_1 from './images/Bapteme/img-bapteme-desktop/1.jpg';
import image_2 from './images/Bapteme/img-bapteme-desktop/2.jpg';
import image_3 from './images/Bapteme/img-bapteme-desktop/3.jpg';
import image_4 from './images/Bapteme/img-bapteme-desktop/4.jpg';
import image_5 from './images/Bapteme/img-bapteme-desktop/5.jpg';
import image_6 from './images/Bapteme/img-bapteme-desktop/6.jpg';
import image_7 from './images/Bapteme/img-bapteme-desktop/7.jpg';
import image_8 from './images/Bapteme/img-bapteme-desktop/8.jpg';
import image_9 from './images/Bapteme/img-bapteme-desktop/9.jpg';
import image_10 from './images/Bapteme/img-bapteme-desktop/10.jpg';
import image_11 from './images/Bapteme/img-bapteme-desktop/11.jpg';
import image_12 from './images/Bapteme/img-bapteme-desktop/12.jpg';




function AlbumBapteme() {
  return (
    <div className='container'>
      <div className="back_bapteme">
        <Link className="retour" to="/galerie"><h2>RETOUR A LA GALERIE </h2></Link>
        <img className='img1' src={image_1} alt="prêtre versant de l'eau sur la tête d'un bébé"></img>
        <img className='img2' src={image_2} alt="baptême d'un bébé vu de haut"></img>
        <img className='img3' src={image_3} alt="femme tenant un bébé au dessus d'un bassin de baptême"></img>
        <img className='img4' src={image_4} alt="prêtre tenant un enfant dans les bras"></img>
        <img className='img5' src={image_5} alt="femme qui soulève une petite fille"></img>
        <img className='img6' src={image_6} alt="homme portant une petite fille"></img>
        <img className='img7' src={image_7} alt="baptême d'une petite fille"></img>
        <img className='img8' src={image_8} alt="prêtre baptisant un bébé"></img>
        <img className='img9' src={image_9} alt="enfant en tenue de baptême sur une pelouse"></img>
        <img className='img10' src={image_10} alt="enfant assis dans l'herbe"></img>
        <img className='img11' src={image_11} alt="bébé se faisant baptiser"></img>
        <img className='img12' src={image_12} alt="bapteme d'un bébé"></img>
        <Link className="retour" to="/galerie"><h2>RETOUR A LA GALERIE </h2></Link>
        <Footer />
          
      </div>
      
    </div>
  );
}

export default AlbumBapteme;