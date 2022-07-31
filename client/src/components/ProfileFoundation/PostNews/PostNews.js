import React, { useState } from "react";

import Swal from 'sweetalert2'
import { useDispatch } from "react-redux";
import { postNews } from "../../../redux/actions";

import style from "./PostNews.module.css"

export default function PostNews() {

    const dispatch = useDispatch()

    const [input, setInputs] = useState({
        title: '',
        news: '',
        image: ''
    })
    const [renderImg, setRenderImg] = useState('')

    function readFile(img) {
        const reader = new FileReader()
        reader.readAsDataURL(img)
        reader.onload = function (e) {
            setRenderImg(e.target.result)
        }
    }
    function handleChange(e) {
        if (e.target.name === "image") {
            readFile(e.target.files[0])
            setInputs(({ ...input, image: e.target.files[0] }))

        } else setInputs({ ...input, [e.target.name]: e.target.value })

    }

    function handleSubmit(e) {
        e.preventDefault()
        Swal.fire({
            title: 'Quieres postear esta noticia?',
            showDenyButton: true,
            confirmButtonText: 'Si, postear',
            denyButtonText: `No, cancelar`,
        }).then(
            async (result) => {
                if (result.isConfirmed) {
                    const data = new FormData();
                    data.append("file", input.image);
                    data.append("upload_preset", "koafybza");
                    const res = await fetch("https://api.cloudinary.com/v1_1/djasy7hxk/image/upload",
                        {
                            method: "POST",
                            body: data
                        })
                    let file = await res.json()
                    dispatch(postNews({
                        title: input.title,
                        little_description: input.news,
                        images: [file.secure_url] //location of public URL
                    }))

                    Swal.fire('Posteado!', '', 'success')
                    setInputs({
                        title: '',
                        news: '',
                        image: ''
                    })
                }
            })

    }

    return (
        <div className={style.postNewsContainer}>

            <form onSubmit={e => handleSubmit(e)} className={style.postNewsForm}>
                <h3 className={style.postNewsTitle}> Escribe una nueva noticia</h3>
                <div>
                    <label className={style.label} htmlFor="title">Titulo</label>
                    <input className={style.inputText} required onChange={(e) => handleChange(e)} type="text" id="title" name="title" value={input.title} />
                </div>
                <div>
                    <label className={style.label} htmlFor="news">Noticia:</label>
                    <textarea
                        className={style.textarea}
                        required onChange={(e) => handleChange(e)}
                        id="news" name="news" value={input.news} >
                    </textarea>
                </div>
                <div>
                    <label className={style.label} htmlFor="image"> Fotos: </label>
                    <input className={style.inputText} required onChange={(e) => handleChange(e)} type="file" id="image" name="image" />
                </div>
                <input className={style.btnPostNew} type="submit" value="Postear" />
            </form>

            <div className={style.resultContainer}>
                {/* TODO: <NewsCard /> */}

                {input.title
                    ? <h3 className={style.h1} >{input.title}</h3>
                    : <h3 className={style.h1} >Titulo</h3>}
                <div className={style.newDescriptionContainer} >
                    {input.news
                        ? <p className={style.inputTextResult} >{input.news}</p>
                        : <p>Texto</p>}
                </div>
                {renderImg
                    ? <img src={renderImg} />
                    : <p>Imagen</p>}
            </div>

        </div>
    )
}