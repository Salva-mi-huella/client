import React, { useState } from "react";

import Swal from 'sweetalert2'
import { useDispatch } from "react-redux";
import { postProduct } from "../../../redux/actions";

import style from "./AddProducts.module.css"

export default function AddProducts() {

    const dispatch = useDispatch()
    const [error, setError] = useState({})

    const [input, setInputs] = useState({
        name: '',
        points:'',
        description:'',
        type:'',
        category:'',
        images: ''
    })

    function validateForm(input) {
        let error ={}
        const regExpName = /^-?[a-zA-Z\s]*$/

        if(!input.name) error.name = '*'

        if(input.name && input.name.length < 3 ) error.name = 'mínimo 3 caracteres'

        if(input.name && !regExpName.test(input.name) ) error.name = 'Solo Letras'
        
        if(!input.points) error.points = '*'
        
        if(!input.description) error.description = '*'
        
        if(input.message && input.message.length < 10) error.message = 'mínimo 10 caracteres'

        if(!input.type) error.type = '*'

        if(!input.category) error.category = '*'
    
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
        else {
            setInputs({ ...input, [e.target.name]: e.target.value })
            setError(validateForm({
                ...input,
                [e.target.name]:e.target.value
            }))
        }
    }
    function handleSelectType(e){
        setInputs({
            ...input,
            type: e.target.value
        })
    }
    function handleSelectCategory(e){
        setInputs({
            ...input,
            category: e.target.value
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        input.points = parseInt(input.points)
        Swal.fire({
            title: 'Quieres postear este producto?',
            showDenyButton: true,
            confirmButtonText: 'Si, postear',
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
                    dispatch(postProduct({
                        name: input.name,
                        points: input.points,
                        description: input.description,
                        type: input.type,
                        category: input.category,
                        images: file.secure_url 
                    }))

                    Swal.fire('Posteado!', '', 'success')
                    setInputs({
                        name: '',
                        points:'',
                        description:'',
                        type:'',
                        category:'',
                        images: ''
                    })
                }
            })

    }

    return (
        <div className={style.postProductContainer}>

            <form onSubmit={e => handleSubmit(e)} className={style.form}>
                <h3 className={style.h3title}> Postee un nuevo producto</h3>
                {/* NOMBRE */}
                <div className={style.div}>
                    <input className={style.input} placeholder="Nombre del producto..." required onChange={(e) => handleChange(e)} type="text" id="name" name="name" value={input.name} />
                    {error.name && <p className={`${style.error}`}>{error.name}</p>}
                </div>
                {/* POINTS */}
                <div className={style.div}>
                    <input className={style.input} placeholder="Puntos..." required onChange={(e) => handleChange(e)} type="number" id="points" name="points" value={input.points} />
                    {error.points && <p className={`${style.error}`}>{error.points}</p>}
                </div>

                {/* DESCRIPTION*/}
                <div className={style.div}>

                    <textarea
                        placeholder="Descripción..."
                        className={style.textarea}
                        rows="5"
                        required onChange={(e) => handleChange(e)}
                        id="description" name="description" value={input.description} >
                    </textarea>
                    {error.description && <p className={`${style.error1}`}>{error.description}</p>}
                </div>

                {/* TYPE */}
            <div className={style.containerSelect}>
                <div>
                <div className={style.typeCat}>
                    Tipo:
                    {error.type && <p className={`${style.error2}`}>{error.type}</p>}
                </div>
                    <select className={style.select} defaultValue="Todos" onChange={e => handleSelectType(e)}>
                        <option className={style.option}  disabled>Tipo</option>
                        <option className={style.option}  value="Todos">Todos</option>
                        <option className={style.option}  value="Perro">Perro</option>
                        <option className={style.option}  value="Gato">Gato</option>
                    </select> 
                    
                </div>

                {/* CATEGORY */}
                <div>
                    <div className={style.typeCat}>
                        Categoría:
                        {error.category && <p className={`${style.error2}`}>{error.category}</p>}
                    </div>
                    <select className={style.select} defaultValue="Sin Categoría" onChange={e => handleSelectCategory(e)}>
                        <option className={style.option} disabled>Categoría</option>
                        <option className={style.option}  value="Sin Categoria">Sin Categoría</option>
                        <option className={style.option}  value="Alimento">Alimento</option>
                        <option className={style.option}  value="Indumentaria">Indumentaria</option>
                        <option className={style.option} value="Accesorios">Accesorios</option>
                        <option className={style.option} value="Juguetes">Juguetes</option>
                    </select> 
                    
                </div>
            </div>

                {/* FOTOS DEL PRODUCTO */}
                <div className={style.cont}>
                   
                    <input className={style.pictures} onChange={(e) => handleChange(e)} type="file" id="images" name="images" />
                </div>

                <input className={style.post} type="submit" value="Postear" />
            </form>

        </div>
    )
}