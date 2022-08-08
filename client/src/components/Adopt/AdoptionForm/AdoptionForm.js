import React from "react";
import styles from './AdoptionForm.module.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Formulario from './Form'
import TermsAndConditions from "./TermsAndConditions";
import hand_paws from "../../../assets/cat-form.jpg";


export default function AdoptionForm() {

    const [modal, setModal] = useState(false);
    const [check, setCheck] = useState(false);

  return (
    <>           
        <div className={styles.container}>

            <div className={styles.banner}>
                <h1>¡Estás a un paso de unirte con tu huella!</h1>
                <img src={hand_paws} alt='bannerImage'></img>
                <p>Completá con tus datos el siguiente formulario para que la fundación se ponga en contacto con vos.</p>
            </div>

            <div className={modal ? styles.terms : styles.notShow}>
                <TermsAndConditions setModal={setModal} setCheck={setCheck} />
            </div>

            <div className={styles.formu}>
                <Formulario setModal={setModal} setCheck={setCheck} check={check}/>
            </div>

        </div>
    </>
);
}


