import React, { useState } from "react";
import style from "./PostNews.module.css"
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// CommonJS

export default function PostNews (){

    const [input, setInputs] = useState({
        title: '',
        news: '',
        image:''
    })


    function readFile(img){
        const reader = new FileReader()
        reader.readAsDataURL(img)
        reader.onload = function(e){
            setInputs(({...input, image: e.target.result}))
        }
    }
    function handleChange (e){
        if(e.target.name === "image"){
            readFile(e.target.files[0])
        }else setInputs({...input, [e.target.name]: e.target.value})
        
    }
    function handleSubmit(e){
        e.preventDefault()
        Swal.fire({
            title: 'Quieres postear esta noticia?',
            showDenyButton: true,
            confirmButtonText: 'Si, postear',
            denyButtonText: `No, cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Posteado!', '', 'success')
                setInputs({
                  title: '',
                  news: '',
                  image:''
              })
            }
          })

    }

    return(
        <div className={style.containerSection}>
            <form onSubmit={e=>handleSubmit(e)} className={style.form}>
                    <h2>Escribe una nueva noticia</h2>
                    <div>
                        <label htmlFor="title">Titulo</label>
                        <input onChange={(e)=>handleChange(e)} type="text" id="title" name="title" value={input.title} />
                    </div>
                    <div>
                        <label htmlFor="news">Noticia:</label>
                        <textarea onChange={(e)=>handleChange(e)} id="news" name="news" value={input.news} ></textarea>
                    </div>
                    <div>
                        <label htmlFor="image"> Fotos: </label>
                        <input onChange={(e)=>handleChange(e)} type="file" id="image" name="image" />
                    </div>
                    <input className={style.btn} type="submit" value="Postear"/>
            </form>
            <div className={style.resultContainer}>
                {/* Aca podriamos traer la card de noticias */} 
                {input.title ?<h1>{input.title}</h1> : <h1>Titulo</h1>}
                {input.news ?<p>{input.news}</p> : <p>Texto</p>}
                {input.image ?
                <img src={input.image} alt="aca"/>
                 : <p>Imagen</p>}
            </div>
        </div>
    )
}