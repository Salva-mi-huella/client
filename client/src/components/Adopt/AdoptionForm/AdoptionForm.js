import React from "react";
import styles from './AdoptionForm.module.css'
import { useEffect, useState } from "react";
import Formulario from './Form'
import TermsAndConditions from "./TermsAndConditions";
import hand_paws from "../../../assets/cat-form.jpg";

export default function AdoptionForm() {

   useEffect(() => {
    window.scrollTo(0, 0);
}, [])

    const [modal, setModal] = useState(false);
    const [check, setCheck] = useState(false);

  return (
    <>           
        <div className={styles.container}>

            <div className={styles.formu}>
                <Formulario setModal={setModal} setCheck={setCheck} check={check}/>
            </div>

            <div className={styles.banner}>
                <h1>¡Unite<br></br> con tu huella!</h1>
                <img src={hand_paws} alt='bannerImage'></img>
            </div>

            <div className={modal ? styles.terms : styles.notShow}>
                <TermsAndConditions setModal={setModal} setCheck={setCheck} />
            </div>

        </div>
    </>
);
}


