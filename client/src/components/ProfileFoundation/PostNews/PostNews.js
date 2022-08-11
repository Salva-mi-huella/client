import React, { useState } from "react";

import Swal from 'sweetalert2'
import { useDispatch } from "react-redux";
import { postNews } from "../../../redux/actions";

import style from "./PostNews.module.css"

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';


import Typography from '@mui/material/Typography';
import logo from '../../../assets/logo-YW.png'

export default function PostNews({ foundation }) {

    const dispatch = useDispatch()

    const [input, setInputs] = useState({
        title: '',
        news: '',
        image: '',
        campaign: false,
        foundationsImage: foundation?.images[0],
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

    const formatDate = () => {
        const date = new Date();
        return date.toISOString().slice(0, 10);
    }

    let hanldeCheck = (e) => {
        if (e.target.checked) {
            setInputs({ ...input, campaign: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        Swal.fire({
            title: '¿Estás seguro de querer postear esta noticia?',
            showDenyButton: true,
            confirmButtonText: 'Confirmar',
            denyButtonText: `Cancelar`,
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
                        campaign: input.campaign,
                        description: input.news,
                        foundationsImage: foundation?.images[0],
                        images: [file.secure_url],
                        foundationId: foundation?.id,
                    }))

                    Swal.fire({ title: '¡Tu noticia ha sido posteada con éxito!', text: 'Podrás visualizarla en el home en la sección de noticias.', icon: 'success' })
                    setRenderImg('')
                    setInputs({
                        title: '',
                        news: '',
                        image: '',
                        campaign: '',
                        foundationsImage: ''
                    })

                }
            })

    }

    return (
        <div className={style.postNewsContainer}>

            <form onSubmit={e => handleSubmit(e)} className={style.postNewsForm}>
                <h3 className={style.postNewsTitle}> Escribe una nueva noticia</h3>
                <div className={style.firstSection}>
                    <input maxLength="60" title="60 caracteres maximo" placeholder="Titulo..." className={style.inputText} required onChange={(e) => handleChange(e)} type="text" id="title" name="title" value={input.title} />
                </div>
                <div>
                    <textarea
                        placeholder="Describe la noticia. Máximo 500 caracteres..."
                        className={style.textarea}
                        maxLength="500"
                        required onChange={(e) => handleChange(e)}
                        id="news" name="news" value={input.news} >
                    </textarea>
                </div>
                <div>

                    <label className={style.label} >Urgente</label>
                    <input
                        id="campaign"
                        onChange={(e) => hanldeCheck(e)}
                        type="checkbox"
                        name="campaign"
                        value={!input.campaign}
                        className={style.checkbox}
                        title='Selecciona si tu noticia es urgente'
                    />

                    <input className={style.inputText} required onChange={(e) => handleChange(e)} type="file" id="image" name="image" />
                </div>
                <input className={style.btnPostNew} type="submit" value="Postear" />
            </form>

            <div className={style.resultContainer}>

                <div className={style.container}>

                    <Card sx={{
                        width: '25vw',
                        height: '32vw',
                        backgroundColor: "#fff",
                        borderRadius: '25px'
                    }}>

                        <CardHeader
                            title={
                                <div className={style.titleContainer}>
                                    <span  >{input.title}</span>
                                </div>}
                            avatar={
                                <div className={style.imgContainer}>
                                    <img className={style.avatar} src={foundation.images[0]} alt="" />
                                    <div className={style.dateContainer}>
                                        <span>{formatDate()}</span>
                                    </div>
                                </div>
                            }
                            sx={{ color: "white" }}
                        />

                        <CardMedia sx={{ justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "#f2f2f2" }}>
                            <img className={style.image} src={renderImg ? renderImg : logo} alt='newImage'></img>
                        </CardMedia>

                        <CardContent>
                            <p className={style.description}>{input.news}</p>
                        </CardContent>
                    </Card>
                </div>


                {/* <Card sx={{ maxWidth: '30vw', maxHeight: '100vw', width: '30vw', height: '30vw', backgroundColor: "rgba(99, 59, 218, 0.485)" }}>
                    <CardHeader
                        avatar={<div><img className={style.avatar} src={foundation.images[0]} alt="" /></div>}
                        title={<div className={style.title}>{input.title}</div>}
                        subheader={<div className={style.date}>{formatDate()}</div>}
                        sx={{ color: "white" }}
                    />

                    <img className={style.picture} src={renderImg ? renderImg : logo} alt='picture'></img>
                    <CardContent>
                        <Typography sx={{ width: '28vw', textOverflow: "ellipsis", overflow: "auto", wordBreak: "break-all" }}>
                            {input.news}
                        </Typography>
                    </CardContent>
                </Card> */}

            </div>

        </div>
    )
}