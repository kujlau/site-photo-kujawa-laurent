import React from 'react';

import {Link} from 'react-router-dom';

import Footer from "./Components/Footer";

import './Album_bebe.css';

import image_1 from './images/Bebe/img-bebe-desktop/1.jpg';
import image_2 from './images/Bebe/img-bebe-desktop/2.jpg';
import image_3 from './images/Bebe/img-bebe-desktop/3.jpg';
import image_4 from './images/Bebe/img-bebe-desktop/4.jpg';
import image_5 from './images/Bebe/img-bebe-desktop/5.jpg';
import image_6 from './images/Bebe/img-bebe-desktop/6.jpg';
import image_7 from './images/Bebe/img-bebe-desktop/7.jpg';
import image_8 from './images/Bebe/img-bebe-desktop/8.jpg';
import image_9 from './images/Bebe/img-bebe-desktop/9.jpg';
import image_10 from './images/Bebe/img-bebe-desktop/10.jpg';
import image_11 from './images/Bebe/img-bebe-desktop/11.jpg';
import image_12 from './images/Bebe/img-bebe-desktop/12.jpg';




function AlbumBebe() {
  return (
    <div className='container'>
      <div className="back_bebe">
        <Link className="retour" to="/galerie"><h2>RETOUR A LA GALERIE </h2></Link>
        <img className='img1' src={image_1} alt="images 1 de l'album bébé" />
        <img className='img2' src={image_2} alt="images 2 de l'album bébé"></img>
        <img className='img3' src={image_3} alt="images 3 de l'album bébé"></img>
        <img className='img4' src={image_4} alt="images 4 de l'album bébé"></img>
        <img className='img5' src={image_5} alt="images 5 de l'album bébé"></img>
        <img className='img6' src={image_6} alt="images 6 de l'album bébé"></img>
        <img className='img7' src={image_7} alt="images 7 de l'album bébé"></img>
        <img className='img8' src={image_8} alt="images 8 de l'album bébé"></img>
        <img className='img9' src={image_9} alt="images 9 de l'album bébé"></img>
        <img className='img10' src={image_10} alt="images 10 de l'album bébé"></img>
        <img className='img11' src={image_11} alt="images 11 de l'album bébé"></img>
        <img className='img12' src={image_12} alt="images 12 de l'album bébé"></img>
        <Link className="retour" to="/galerie"><h2>RETOUR A LA GALERIE </h2></Link>
        <Footer />
          
      </div>
      
    </div>
  );
}

export default AlbumBebe;