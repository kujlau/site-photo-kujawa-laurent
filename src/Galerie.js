import React from 'react';

import {Link} from 'react-router-dom';

import './Galerie.css';

import Header from './Components/Header'

import Footer from './Components/Footer';



function Galerie() {
  return (
    <div className='container'>
      <div className='back'>
        <Header />
        <div className='main-galerie'>
          <div className='wrapper-btn'>
            <div className='wrapper-start'>
              <Link className='wrap_mariage' to="/Album_mariage">
                <div className='btn-mariage'>
                  <h3 className='mariage'>Mariage</h3>
                </div>
              </Link>  
              <Link className='wrap_bebe' to="/Album_bebe">
                <div className='btn-bebe'>
                  <h3 className='bebe'>Bébé</h3>
                </div>
              </Link>   
              <Link className='wrap_bapteme' to="/Album_bapteme">
                <div className='btn-bapteme'>
                  <h3 className='bapteme'>Baptême</h3>
                </div>
              </Link> 
            </div>
            <div className='wrapper-end'>
              <Link className='wrap_grossesse' to="/Album_grossesse">
                <div className='btn-grossesse'>
                  <h3 className='grossesse'>Grossesse</h3>
                </div>
              </Link> 
              <Link className='wrap_famille' to="/Album_famille">
                <div className='btn-famille'>
                  <h3 className='famille'>Famille</h3>
                </div>
              </Link> 
              <Link className='wrap_couple' to="/Album_couple">
                <div className='btn-couple'>
                  <h3 className='couple'>Couple</h3>
                </div>
              </Link> 
              
            </div>
            
          </div>
          
        </div> 
        <Footer /> 
      </div>
      
      
    </div>
  );
}

export default Galerie;
