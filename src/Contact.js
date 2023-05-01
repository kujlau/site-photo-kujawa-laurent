import React from 'react';

import './Contact.css';

import Header from './Components/Header';

import Footer from './Components/Footer';



function Contact() {
  return (
    <div className='container'>
      <div className='back_contact'>
        <Header />
        <div className='main-contact'>
          <h1 className='contactez'>Contactez-moi</h1>
          <form className='form' >
            <div className='start-form'>
              <label className='prenom' htmlFor="Prenom">
                <h4><u>Prénom</u>*</h4>
                <input className='champ_prenom'  id="prenom" type="text" />
              </label>
              <label className='nom'>
                <h4><u>Nom</u>*</h4>
                <input className='champ_nom' type="text" name="nom" />
              </label>
            </div>
            <div className='end-form'>
              <label className='email'>
                <h4><u>Email</u>*</h4>
                <input className='champ_email' type="text" name="email" />
              </label>
              <label className='telephone'>
                <h4><u>Tel</u></h4>
                <input className='champ_tel' type="text" name="telephone" />
              </label>
            </div>
            <label className='message'>
            <h4><u>Message</u>*</h4>
            <input className='champ_message' type="text" name="message" />
            </label>
            <input className='envoyer' type="submit" value="ENVOYER" />
            <p className="obligatoire">* champs obligatoires</p>
            

          </form>
        </div>
          
        <Footer />
      </div>
      
    </div>
  );
}


export default Contact;