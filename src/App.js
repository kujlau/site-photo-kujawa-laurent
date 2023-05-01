import React from "react";

import {Routes, Route} from 'react-router-dom';

import './App.css';


import Accueil from './Accueil';

import Galerie from './Galerie';

import Prestations from './Prestations';

import Contact from './Contact';

import AlbumMariage from "./Album_mariage";

import AlbumGrossesse from "./Album_grossesse";

import AlbumBebe from "./Album_bebe";

import AlbumFamille from "./Album_famille";

import AlbumBapteme from "./Album_bapteme";

import AlbumCouple from "./Album_couple";

function App() {
  return (
    
      <div className="main-container"> 
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/prestations" element={<Prestations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/album_mariage" element= {<AlbumMariage />} />
            <Route path="/album_grossesse" element= {<AlbumGrossesse />} />
            <Route path="/album_bebe" element= {<AlbumBebe />} />
            <Route path="/album_famille" element= {<AlbumFamille />} />
            <Route path="/album_bapteme" element= {<AlbumBapteme />} />
            <Route path="/album_couple" element= {<AlbumCouple />} />
          </Routes>
        </main>
          
          
          


      </div>  
  );
}





export default App;
