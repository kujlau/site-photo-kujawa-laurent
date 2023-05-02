import React from 'react';

import './Form.css';


function Form() {
  return(
    <div className='contact'>
      <form 
        name="contact" 
        method="post"
        data-netlify='true' 
        onSubmit="submit"
      >
        <div className='first_line'>
          <input type="hidden" name="form-name" value="contact" />
          <label for="firstname">Prénom*</label> 
          <input type="text" name="name"/>

          <label for="lastname">Nom*</label> 
          <input type="text" name="name"/>
        </div>
        <div className='second_line'>
          <label for="email">Email*</label> 
          <input type="email" name="email"/>

          <label for="tel">tel</label> 
          <input type="tel" name="tel"/>
        </div>  

        <div className='message'>
          <label for="message">Message*</label> 
          <textarea name="message"></textarea>
        </div>  
        
        
        <button type="submit">Envoyer</button>
        <p>* Champs obligatoires</p>
          
      </form>,
    </div>
  );
}

export default Form;