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
        <img className='img1' src={image_1} alt="image 1 de l'album bapteme"></img>
        <img className='img2' src={image_2} alt="image 2 de l'album bapteme"></img>
        <img className='img3' src={image_3} alt="image 3 de l'album bapteme"></img>
        <img className='img4' src={image_4} alt="image 4 de l'album bapteme"></img>
        <img className='img5' src={image_5} alt="image 5 de l'album bapteme"></img>
        <img className='img6' src={image_6} alt="image 6 de l'album bapteme"></img>
        <img className='img7' src={image_7} alt="image 7 de l'album bapteme"></img>
        <img className='img8' src={image_8} alt="image 8 de l'album bapteme"></img>
        <img className='img9' src={image_9} alt="image 9 de l'album bapteme"></img>
        <img className='img10' src={image_10} alt="image 10 de l'album bapteme"></img>
        <img className='img11' src={image_11} alt="image 11 de l'album bapteme"></img>
        <img className='img12' src={image_12} alt="image 12 de l'album bapteme"></img>
        <Link className="retour" to="/galerie"><h2>RETOUR A LA GALERIE </h2></Link>
        <Footer />
          
      </div>
      
    </div>
  );
}

export default AlbumBapteme;