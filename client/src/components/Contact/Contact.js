import React from "react";
import style from "./Contact.module.css";
import { useState} from "react";
import emailjs from 'emailjs-com';
import paw from "../../assets/paw-heart.png";
import difusion from "../../assets/promocion.png";
import donate from "../../assets/donate-heart.png";
export default function Contact() {


    //ESTADO PARA LOS ERRORES
    const [error, setError] = useState({})

    const [input, setInput] = useState({
        foundation_name: '',
        email: '',
        message: '',
        telefono: ''
    })

    function validateForm(input) {
        let error ={}
        const regEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g

        if(!input.foundation_name) error.foundation_name = '*'

        if(input.foundation_name && input.foundation_name.length < 3 ) error.foundation_name = 'mínimo 3 caracteres'
        
        if(!input.email) error.email = '*'
        
        if(input.email && !regEmail.test(input.email)) error.email = 'email invalido'
        
        if(!input.message) error.message = '*'
        
        if(input.message && input.message.length < 10) error.message = 'mínimo 10 caracteres'
    
        return error;
    }

    function handleChange (e){
        e.preventDefault()
      
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
        setError(validateForm({
            ...input,
            [e.target.name]:e.target.value
        }))
    }

    function sendEmail(e){
        e.preventDefault();
        if (!Object.keys(error).length && input.foundation_name && input.email && input.message) {

      emailjs.sendForm('service_q0212bn', 'template_b1658cp', e.target, 'Aq8UicE7cYgpn5IXB')
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log(error.text);
      });
      alert("Formulario enviado")
      setInput({
            foundation_name: '',
            email: '',
            message: '',
            telefono: ''
        })
           
    }
    else{
        alert("Missing data")
    }
    }

    return (
            <div className={style.contactContainer}>
                <div className={style.leftCol}>
                    <h1 className={style.h1a}>¿Por qué ser parte de nuestra familia?</h1>

                    <div className={style.containerWhy}>
                        <div className={style.container2}>
                            <p > <img className={style.img1} src={difusion} width="60px" height="60px" alt='difusion'></img> Obtenga una Mayor Difusión</p>
                            <p > <img className={style.img1} src={donate} width="60px" height="60px" alt='donar'></img> Reciba Donaciones </p>
                            <p > <img className={style.img1} src={paw} width="60px" height="60px" alt='postear'></img> Postee de manera sencilla sus animales </p>
                        </div>
                    </div>
                </div>
                
                <div className={style.rightCol}>
                <div className={style.themeSwitchWrapper}></div>

                    <h1 className={style.h1}>Contacto</h1>
                    <p className={style.p}>Para contactarse con nosotros complete el siguiente formulario, no dude en consultarnos.</p>

                    <form className={style.form} id={style.contactForm}  onSubmit={sendEmail} >
                        
                        
                          <label className={style.label}>Nombre de la Fundación</label> 
                          <div className={style.cont}>
                            <input className={style.input} type="text" name="foundation_name" value={input.foundation_name} id={style.name} onChange={e => handleChange(e)} placeholder="Nombre..." />
                            {error.foundation_name && <p className={`${style.error}`}>{error.foundation_name}</p>}
                          </div>

                          <label className={style.label}>Email</label>
                        <div className={style.cont}>
                          <input className={style.input} type="text" name="email" value={input.email}  onChange={e => handleChange(e)} placeholder="Email..."/>
                          {error.email && <p className={`${style.error}`}>{error.email}</p>}
                        </div>

                        <label className={style.label}>Telefono de contacto</label>
                        <div className={style.cont}>
                          <input className={style.input} type="text" name="telefono" value={input.telefono}  onChange={e => handleChange(e)} placeholder="Número de telefono"/>
                          {error.telefono && <p className={`${style.error}`}>{error.telefono}</p>}
                        </div>

                          <label className={style.label} >Mensaje</label>
                        <div className={style.cont}>
                          <textarea className={style.textarea} name='message' value={input.message} onChange={e => handleChange(e)} rows="6" placeholder="Escribe tu mensaje..." id={style.message}></textarea>
                          {error.message && <p className={`${style.errorM}`}>{error.message}</p>}
                        </div>

                        <button className={style.button} type="submit" id={style.submit}>Enviar</button>
                    </form>

                </div>
            </div>
    );
}
