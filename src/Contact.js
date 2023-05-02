import React from 'react';

import './Contact.css';

import Form from './Components/Form';

import Header from './Components/Header';

import Footer from './Components/Footer';



function Contact() {
  return (
    <div className='container'>
      <div className='back_contact'>
        <Header />
        <div className='main-contact'>
          <h1 className='contactez'>Contactez-moi</h1>
          <Form />
        </div>
          
        <Footer />
      </div>
      
    </div>
  );
}


export default Contact;