import React from 'react';

import {Link} from 'react-router-dom';

import Footer from "./Components/Footer";

import './Album_mariage.css';

import image_1 from './images/mariage/img-mariage-desktop/1.jpg';
import image_2 from './images/mariage/img-mariage-desktop/2.jpg';
import image_3 from './images/mariage/img-mariage-desktop/3.jpg';
import image_4 from './images/mariage/img-mariage-desktop/4.jpg';
import image_5 from './images/mariage/img-mariage-desktop/5.jpg';
import image_6 from './images/mariage/img-mariage-desktop/6.jpg';
import image_7 from './images/mariage/img-mariage-desktop/7.jpg';
import image_8 from './images/mariage/img-mariage-desktop/8.jpg';
import image_9 from './images/mariage/img-mariage-desktop/9.jpg';
import image_10 from './images/mariage/img-mariage-desktop/1a.jpg';
import image_11 from './images/mariage/img-mariage-desktop/11.jpg';
import image_12 from './images/mariage/img-mariage-desktop/12.jpg';




function AlbumMariage() {
  return (
    <div className='container'>
      <div className="back_mariage">
        <Link className="retour" to="/galerie"><h2>RETOUR A LA GALERIE </h2></Link>
        <img className='img1' src={image_1} alt="femme en robe de mariée"></img>
        <img className='img2' src={image_2} alt="couple mariée s'embrassant"></img>
        <img className='img3' src={image_3} alt="marié flou et mariée de dos portant un bouquet"></img>
        <img className='img4' src={image_4} alt="un couple musulman"></img>
        <img className='img5' src={image_5} alt="mari portant sa femme en forêt"></img>
        <img className='img6' src={image_6} alt="couple assis tête contre tête"></img>
        <img className='img7' src={image_7} alt="mariés sous un voile avec un couché de soleil"></img>
        <img className='img8' src={image_8} alt="couple mariés assis à l'arrière d'une camionnette"></img>
        <img className='img9' src={image_9} alt="mariés assis dans des fauteuils séparés"></img>
        <img className='img10' src={image_10} alt="mariés s'embrassant en noir et blanc"></img>
        <img className='img11' src={image_11} alt="couple mariés d'embrassant vu de haut"></img>
        <img className='img12' src={image_12} alt="bras du marié et de la femme"></img>
        <Link className="retour" to="/galerie"><h2>RETOUR A LA GALERIE</h2></Link>
      </div>
      <Footer />
    </div>
  );
}

export default AlbumMariage;