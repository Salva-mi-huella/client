import React, { useState } from "react";
import Swal from 'sweetalert2'
import { useDispatch } from "react-redux";
import { postFoundation } from "../../../redux/actions";
import style from "./AddFoundations.module.css"

export default function AddFoundations() {

    const dispatch = useDispatch()
    const [error, setError] = useState({})

    const [input, setInputs] = useState({
        name: '',
        email:'',
        state:'',
        city:'',
        address:'',
        telephone_number:'',
        description:'',
        images:''
        
    })

    function validateForm(input) {
        let error ={}
        const regExpName = /^-?[a-zA-Z\s]*$/
        const regEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g
        const regPhone = /^-?[0-9]*$/

        if(!input.name) error.name = '*'

        if(input.name && input.name.length < 3 ) error.name = 'mínimo 3 caracteres'

        if(input.name && !regExpName.test(input.name) ) error.name = 'Solo Letras'
        
        if(!input.email) error.email = '*'

        if(input.email && !regEmail.test(input.email)) error.email = 'email invalido'
        
        if(!input.description) error.description = '*'
        
        if(input.message && input.message.length < 10) error.message = 'mínimo 10 caracteres'

        if(!input.state) error.state = '*'

        if(!input.city) error.city = '*'

        if(!input.telephone_number) error.telephone_number = '*'

        if(input.telephone_number && !regPhone.test(input.telephone_number)) error.telephone_number = 'teléfono invalido'
       
        if(!input.address) error.address = '*'
    
        return error;
    }
    const [renderImg, setRenderImg] = useState('')

    function readFile(img) {
        const reader = new FileReader()
        reader.readAsDataURL(img)
        reader.onload = function (e) {
            setRenderImg(e.target.result)
        }
    }
    function handleChange(e) {

        if (e.target.name === "images") {
            readFile(e.target.files[0])
            setInputs(({ ...input, images: e.target.files[0] }))
            setError(validateForm({
                ...input,
                [e.target.name]:e.target.value
            }))
        }
        else{
            setInputs({ ...input, [e.target.name]: e.target.value })
            setError(validateForm({
                ...input,
                [e.target.name]:e.target.value
            }))
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        /* input.points = parseInt(input.points) */
        Swal.fire({
            title: '¿Quieres dar de alta a esta fundación?',
            showDenyButton: true,
            confirmButtonText: 'Si, dar de alta',
            denyButtonText: `No, cancelar`,
        }).then(
            async (result) => {
                if (result.isConfirmed) {
                    const data = new FormData();
                    data.append("file", input.images);
                    data.append("upload_preset", "koafybza");
                    const res = await fetch("https://api.cloudinary.com/v1_1/djasy7hxk/image/upload",
                        {
                            method: "POST",
                            body: data
                        })
                    let file = await res.json()
                    dispatch(postFoundation({
                        name: input.name,
                        email:input.email,
                        state:input.state,
                        city:input.city,
                        address:input.address,
                        telephone_number:input.telephone_number,
                        description:input.description,
                        images: [file.secure_url]
                    }))

                    Swal.fire('Posteado!', '', 'success')
                    setInputs({
                        name: '',
                        email:'',
                        state:'',
                        city:'',
                        address:'',
                        telephone_number:'',
                        description:'',
                        images:''
                       
                    })
                }
            })
    }

    return (
        <div className={style.postProductContainer}>

            <form onSubmit={e => handleSubmit(e)} className={style.form}>
                <h3 className={style.h3title}> Alta de Fundación </h3>
                {/* NOMBRE / EMAIL */}
                <div className={style.div}>
                   
                     <div>
                        <input className={style.input} placeholder="Nombre de la fundación..." required onChange={(e) => handleChange(e)} type="text" id="name" name="name" value={input.name} />
                        {error.name && <p className={`${style.error}`}>{error.name}</p>}
                     </div>
                     <div>
                        <input className={style.input} placeholder="Email..." required onChange={(e) => handleChange(e)} type="text" id="email" name="email" value={input.email} />
                        {error.email && <p className={`${style.error}`}>{error.email}</p>}
                     </div>
                </div>


                {/* TELEPHONE_NUMBER STATE */}
                <div className={style.div}>

                     <div>
                        <input className={style.input} placeholder="Teléfono..." required onChange={(e) => handleChange(e)} type="text" id="telephone_number" name="telephone_number" value={input.telephone_number} />
                        {error.telephone_number && <p  className={`${style.error}`}>{error.telephone_number}</p>}
                     </div>
                    <div>
                        <input className={style.input} placeholder="Provincia..." required onChange={(e) => handleChange(e)} type="text" id="state" name="state" value={input.state} />
                        {error.state && <p className={`${style.error}`}>{error.state}</p>}
                    </div>
                </div>


                {/* CITY  / ADDRESS*/}
                <div className={style.div}>
                     <div>
                        <input className={style.input} placeholder="Ciudad..." required onChange={(e) => handleChange(e)} type="text" id="city" name="city" value={input.city} />
                        {error.city && <p className={`${style.error}`}>{error.city}</p>}
                     </div>
                     <div>
                        <input className={style.input} placeholder="Dirección..." required onChange={(e) => handleChange(e)} type="text" id="address" name="address" value={input.address} />
                        {error.address && <p className={`${style.error}`}>{error.address}</p>}
                    </div>
                </div>

                {/* DESCRIPTION*/}
                <div className={style.div2}>
                   
                    <textarea
                        placeholder="Descripción..."
                        className={style.textarea}
                        rows="4"
                        required onChange={(e) => handleChange(e)}
                        id="description" name="description" value={input.description} >
                    </textarea>
                    {error.description && <p className={`${style.error}`}>{error.description}</p>}
                </div>

                {/* FOTOS DEL PRODUCTO */}
                <div className={style.div2}>
                    <label className={style.label} htmlFor="images"> Fotos: </label>
                    <input className={style.pictures} onChange={(e) => handleChange(e)} type="file" id="images" name="images" />
                </div>

                <input className={style.post} type="submit" value="Postear" />
            </form>

        </div>
    )
}