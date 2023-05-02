import React from 'react';

import {Link} from 'react-router-dom';

import Footer from "./Components/Footer";

import './Album_grossesse.css';

import image_1 from './images/Grossesse/img-grossesse-desktop/1.jpg';
import image_2 from './images/Grossesse/img-grossesse-desktop/2.jpg';
import image_3 from './images/Grossesse/img-grossesse-desktop/3.jpg';
import image_4 from './images/Grossesse/img-grossesse-desktop/4.jpg';
import image_5 from './images/Grossesse/img-grossesse-desktop/5.jpg';
import image_6 from './images/Grossesse/img-grossesse-desktop/6.jpg';
import image_7 from './images/Grossesse/img-grossesse-desktop/7.jpg';
import image_8 from './images/Grossesse/img-grossesse-desktop/8.jpg';
import image_9 from './images/Grossesse/img-grossesse-desktop/9.jpg';
import image_10 from './images/Grossesse/img-grossesse-desktop/10.jpg';
import image_11 from './images/Grossesse/img-grossesse-desktop/11.jpg';
import image_12 from './images/Grossesse/img-grossesse-desktop/12.jpg';




function AlbumGrossesse() {
  return (
    <div className='container'>
      <div className="back_grossesse">
        <Link className="retour" to="/galerie"><h2>RETOUR A LA GALERIE </h2></Link>
        <img className='img1' src={image_1} alt="4 mains sur un ventre"/>
        <img className='img2' src={image_2} alt="femme enceinte sur une passerelle"></img>
        <img className='img3' src={image_3} alt="femme assise dans l'herbe se tenant le ventre"></img>
        <img className='img4' src={image_4} alt="femme enceinte style années 20"></img>
        <img className='img5' src={image_5} alt="ventre entouré de tissus satin rose"></img>
        <img className='img6' src={image_6} alt="femme enceinte les pieds dans la mer"></img>
        <img className='img7' src={image_7} alt="femme enceinte avec une bobe rouge a poids blancs"></img>
        <img className='img8' src={image_8} alt="ventre d'un homme contre celui d'une femme "></img>
        <img className='img9' src={image_9} alt="femme enceinte habillée d'un voile cachant un couché de soleil"></img>
        <img className='img1a' src={image_10} alt="femme enceinte posant avec une robe transparente au millieu de fleurs"></img>
        <img className='img11' src={image_11} alt="enfant embrassant le ventre de sa mère enceinte"></img>
        <img className='img12' src={image_12} alt="femme enceinte soulevant une peluche"></img>
        <Link className="retour" to="/galerie"><h2>RETOUR A LA GALERIE </h2></Link>
        <Footer />
          
      </div>
      
    </div>
  );
}

export default AlbumGrossesse;