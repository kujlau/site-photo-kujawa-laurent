import React from 'react';

import {Link} from 'react-router-dom';

import Footer from "./Components/Footer";

import './Album_famille.css';

import image_1 from './images/Famille/img-famille-desktop/1.jpg';
import image_2 from './images/Famille/img-famille-desktop/2.jpg';
import image_3 from './images/Famille/img-famille-desktop/3.jpg';
import image_4 from './images/Famille/img-famille-desktop/4.jpg';
import image_5 from './images/Famille/img-famille-desktop/5.jpg';
import image_6 from './images/Famille/img-famille-desktop/6.jpg';
import image_7 from './images/Famille/img-famille-desktop/7.jpg';
import image_8 from './images/Famille/img-famille-desktop/8.jpg';
import image_9 from './images/Famille/img-famille-desktop/9.jpg';
import image_10 from './images/Famille/img-famille-desktop/10.jpg';
import image_11 from './images/Famille/img-famille-desktop/11.jpg';
import image_12 from './images/Famille/img-famille-desktop/12.jpg';




function AlbumFamille() {
  return (
    <div className='container'>
      <div className="back_famille">
        <Link className="retour" to="/galerie"><h2>RETOUR A LA GALERIE </h2></Link>
        <img className='img1' src={image_1} alt="famille avec fond mer et palmiers"></img>
        <img className='img2' src={image_2} alt="couple tenant un bébé, en noirs et blanc"></img>
        <img className='img3' src={image_3} alt="famille assise dans un jardin"></img>
        <img className='img4' src={image_4} alt="famille dans la nature"></img>
        <img className='img5' src={image_5} alt="famille s'amusant en plein air "></img>
        <img className='img6' src={image_6} alt="famille et un chien au bord de la mer"></img>
        <img className='img7' src={image_7} alt="famille vu de haut dans voiture décapotable"></img>
        <img className='img8' src={image_8} alt="famille décontractée assise dans la nature"></img>
        <img className='img9' src={image_9} alt="famille unis en extérieur"></img>
        <img className='img10' src={image_10} alt="famille dont enfant assis sur un tronc d'arbre"></img>
        <img className='img11' src={image_11} alt="famille avec un enfant et un bébé installés sur un lit"></img>
        <img className='img12' src={image_12} alt=" membres de famille habillés en rouge allongés sur le ventre"></img>
        <Link className="retour" to="/galerie"><h2>famille</h2></Link>
        <Footer />
          
      </div>
      
    </div>
  );
}

export default AlbumFamille;