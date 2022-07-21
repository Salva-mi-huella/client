import React from "react";
import styles from '../AdoptionForm/AdoptionForm.module.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Formulario from './Form'


export default function AdoptionForm() {

  return (
    <>    
        <div className={styles.title}>
            <h1 className={styles.titletext}>¿ Estas listo para adoptar ?</h1>
        </div>


        <div className={styles.container}>
            <div className={styles.text}>
                <p>¡Hola!<br/>
                Muchas gracias por contactarnos y por pensar en adoptar. En Colombia existe  un gran número de animales abandonados y maltratados en la calle, que son parte de nuestra responsabilidad social. Es justo y gratificante darles una oportunidad.<br/>            
            
                La idea de estos pasos, es garantizar el bienestar animal; recordemos que es un compromiso para toda la vida,  es un nuevo miembro de la familia que estará aproximadamente 15 años viviendo con ustedes.<br/>
                <br/>
                Los pasos son los siguientes:<br/>
                <br/>
                1. Llenar el formulario de adopción. Por favor ser detallado en las respuestas, este será estudiado.<br/> 

                2. En caso de ser aprobado el formulario, se coordinará una entrevista por medio de una videollamada o una visita domiciliaria que se hace en el hogar de los posibles adoptantes para conocerlos y conocer las condiciones en las que viviría el nuevo integrante de la familia.<br/>

                3. Si la entrevista es aprobada se procede a la entrega del animal de compañía.<br/> 

                <br/>
                La fundación orienta el proceso de adopción y adaptación de la mascota en su nuevo hogar
                LA META DE LA FUNDACIÓN ES CONSEGUIR EL MEJOR HOGAR PARA TODOS SUS PROTEGIDOS.
                De ser elegido como adoptante, se deberá:

                - Asumir el valor de la esterilización del animal
                - Firmar el contrato de adopción y de cuidados y responsabilidades básicas

                Para adoptar se debe tener al menos 21 años, si eres menor de edad, debes
                tener un representante de la familia mayor de edad que intervenga en el proceso
                de adopción. 
            </p>
            </div>

            <div className={styles.formu}>
                <Formulario/>
            </div>


            
        </div>
    </>
  );
}


