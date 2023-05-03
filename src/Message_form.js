import React from 'react';

import 'Message_form.css';

import Header from './Components/Header';

import Footer from './Components/Footer';

import image_1 from './images/logocantin-desktop.jpg';

function MessageForm() {
  return (
    <div className='container'>
      <div className='back_message'>
        <Header />
        <div className="wrapper-message">
            
            <h1 className= "main-message">Votre message à été envoyé avec succès!
            <br /> nous vous répondrons très bientôt.<br /> Merci<em>- &nbsp; Photographe</em></h1>
            
        </div>
        <Footer />
      </div>
      
    </div>
  )
}

export default MessageForm