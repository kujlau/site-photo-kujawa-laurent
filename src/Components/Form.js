import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import "./Form.css"


function Form() {

const navigate = useNavigate()
  
const schema = yup.object({
  prenom: yup.string().matches(/[a-z]/,"Doit contenir des lettres").max(50).required(),
  nom: yup.string().matches(/[a-z]/,"Doit contenir des lettres").max(50).required(),
  email: yup.string().email("entrez un email valide").max(50).required("Le champ Email est vide"),
  telephone: yup.string().max(10,"Maximum 10 caractères"),
  message: yup.string().max(500).required("Entrer votre message"),
  }
).required();

const {
  register,
  formState: { errors },
  handleSubmit,
} = useForm({resolver: yupResolver(schema)});

const onSubmit = ()=> {
  alert("Votre message à été envoyé avec succès!<br /> nous vous répondrons dès que possible.<br /> Merci")
  navigate("/")
}


  return (
    <form className='form' onSubmit ={handleSubmit(onSubmit)}>
      <div className='start-form'>
        <div className="error-label">
          <div className="error-message">
            {errors.prenom &&(<p>{errors.prenom.message}</p>)}
          </div>
          <label className='prenom'>
            <h4><u>Prénom</u>*</h4>
            <input className='champ_prenom'  id="prenom" type="text" {...register('prenom')} />
          </label>
        </div>
        <div className="error-label">
          <div className="error-message">
            {errors.nom &&(<p>{errors.nom.message}</p>)}
          </div>
          <label className='nom'>
            <h4><u>Nom</u>*</h4>
            <input className='champ_nom' type="text" name="nom" {...register('nom')} />
          </label>
        </div>
      </div>  
      <div className='end-form'>
        <div className="error-label">
          <div className="error-message">
            {errors.email &&(<p>{errors.email.message}</p>)}
            <label className='email'>
              <h4><u>Email</u>*</h4>
              <input className='champ_email' type="text" name="email" {...register('email')} />
            </label>
          </div>  
        </div>  
        <div className="error-label">
          <div className="error-message">
            {errors.telephone &&(<p>{errors.telephone.message}</p>)}
            <label className='telephone'>
              <h4><u>Tel</u></h4>
              <input className='champ_tel' type="text" name="telephone"{...register('telephone')}/>
            </label>
          </div>  
        </div>
      </div>
      <div className="error-label">
        <div className="error-message">
          {errors.message &&(<p>{errors.message.message}</p>)}
          <label className='message'>
            <h4><u>Message</u>*</h4>
            <textarea  name="message"    {...register('message')} />
          </label>
        </div>  
      </div>  
      <button>ENVOYER</button>
      <p className="obligatoire">* champs obligatoires</p>
    </form>
  );
}


export default Form;