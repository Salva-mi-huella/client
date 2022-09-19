import React, { useEffect } from "react";
import style from "./Contact.module.css";
import { useState} from "react";
import {  useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import emailjs from 'emailjs-com';
import paw from "../../assets/heart-paw1.png";
import difusion from "../../assets/megaphone.png";
import donate from "../../assets/donate-heart.png";
import Swal from "sweetalert2";
import { postRequestFoundation } from "../../redux/actions";


export default function Contact() {


    //ESTADO PARA LOS ERRORES
   const [error, setError] = useState({})
   const history = useHistory()
   const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [input, setInput] = useState({
        name: '',
        email: '',
        message: '',
        telephone: ''
    })

    function validateForm(input) {
        let error ={}
        const regEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g
        const regPhone = /^-?[0-9]*$/
        const regExpName = /^-?[a-zA-Z\s]*$/

        if(!input.name) error.name = '*'

        if(input.name && !regExpName.test(input.name)) error.name = 'El nombre solo puede contener letras'

        if(input.name && input.name.length < 3 ) error.name = 'Mínimo 3 caracteres'
        
        if(!input.email) error.email = '*'
        
        if(input.email && !regEmail.test(input.email)) error.email = 'Email invalido'
        
        if(!input.message) error.message = '*'
        
        if(input.message && input.message.length < 10) error.message = 'Mínimo 10 caracteres'

        if(input.message && input.message.length > 1000) error.message = 'Máximo 1000 caracteres'

        if(!input.telephone) error.telephone = '*'

        if(input.telephone.length < 8) error.telephone = 'Mínimo 8 caracteres'

        if(input.telephone && input.telephone.length > 12) error.telephone = 'Teléfono invalido'

        if(input.telephone && !regPhone.test(input.telephone)) error.telephone = 'Teléfono invalido'

    
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
        if (!Object.keys(error).length && input.name && input.email && input.message && input.telephone) {
      dispatch(postRequestFoundation(input))
      emailjs.sendForm('service_q0212bn', 'template_b1658cp', e.target, 'Aq8UicE7cYgpn5IXB')
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log(error.text);
      });
      Swal.fire({
        title: '¡Tu mensaje ha sido enviado con éxito!',
        text: 'Pronto nos comunicaremos contigo.',
        // imageUrl: dog,
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: 'Custom image',
        position: 'center',
        width: '40rem',
        height: '55rem',
        icon: 'success',
        showConfirmButton: true,
        confirmButtonText: 'Volver al Home',
        confirmButtonColor: 'purple',
        showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
      }).then((result) => {
        if (result.isConfirmed) {
                history.push('/home')
                
            }})
      setInput({
            name: '',
            email: '',
            message: '',
            telephone: ''
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
                            <p > <img className={style.img1} src={difusion} width="60px" height="60px" alt='difusion'></img> Mayor difusión</p>
                            <p > <img className={style.img1} src={donate} width="60px" height="60px" alt='donar'></img> Donaciones directas </p>
                            <p > <img className={style.img1} src={paw} width="60px" height="60px" alt='postear'></img> Administración de cuenta gratuita </p>
                        </div>
                    </div>
                </div>
                
                <div className={style.rightCol}>
                <div className={style.themeSwitchWrapper}></div>

                    <h1 className={style.h1}>Contacto</h1>

                    <form className={style.form} id={style.contactForm}  onSubmit={sendEmail} >
                        
                        
                          <label className={style.label}>Nombre de la Fundación</label> 
                          <div className={style.cont}>
                            <input required className={style.input} type="text" name="name" value={input.name} id={style.name} onChange={e => handleChange(e)} placeholder="Nombre..." />
                            {error.name && <p className={`${style.error}`}>{error.name}</p>}
                          </div>

                          <label className={style.label}>Email</label>
                        <div className={style.cont}>
                          <input required className={style.input} type="text" name="email" value={input.email}  onChange={e => handleChange(e)} placeholder="Email..."/>
                          {error.email && <p className={`${style.error}`}>{error.email}</p>}
                        </div>

                        <label className={style.label}>Teléfono de contacto</label>
                        <div className={style.cont}>
                          <input className={style.input} type="text" name="telephone" value={input.telephone}  onChange={e => handleChange(e)} placeholder="Número de telefono"/>
                          {error.telephone && <p className={`${style.error}`}>{error.telephone}</p>}
                        </div>

                          <label className={style.label} >Mensaje</label>
                        <div className={style.cont}>
                          <textarea required className={style.textarea} name='message' value={input.message} onChange={e => handleChange(e)} rows="6" placeholder="Escribe tu mensaje..." id={style.message}></textarea>
                          {error.message && <p className={`${style.errorM}`}>{error.message}</p>}
                        </div>

                        <button className={style.button} type="submit" id={style.submit}>Enviar</button>
                    </form>

                </div>
            </div>
    );
}
