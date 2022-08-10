import React from "react";
import styles from './TermsAndConditions.module.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link, useHistory } from "react-router-dom";



export default function TermsAndConditions({setModal, setCheck}) {

    const handleOnClick = () => {
        setModal(false);
        // setCheck(true);
    }

  return (
    <>
         <div className={styles.termsSection}>
                <h1 className={styles.terms_header}>ACUERDO DE ADOPCIÓN</h1>

                <div className={styles.terms_cointainer}>

                    <div className={styles.terms}>
                            <p>¡Hola!<br/><br/>

                            Te agradecemos de todo corazón tu interés en salvar a una de nuestras huellitas. <br/><br/>

                            La adopción es un acto de responsabilidad y compromiso por lo que creemos muy importante que estés capacitado para hacerlo. A continuación te contaremos cuales son los requisitos básicos para proseguir con el proceso de adopción.<br/><br/>

                            Algunas cuestiones para tener en cuenta son el espacio disponible en tu casa, el tiempo que tengas para dedicarle cariño y cuidado, los costos asociados a su alimentación y atención veterinaria, su lugar de vivienda durante tus vacaciones, entre otras cosas.<br/><br/>
                            
                            Para asegurarte una convivencia feliz con tu nuev@ compañer@, tu elección debe estar orientada al estilo de vida que llevas y al tiempo real que le puedas dedicar.<br/><br/>

                            A continuación te contaremos sobre los requisitos básicos que las fundaciones te solicitarán al contactarte con ellas. Al finalizar y enviar tu solicitud, la fundación se pondrá en contacto contigo para continuar con el proceso de adopoción. Los requisitos son:<br/><br/>

                            - Ser mayor de edad y presentar DNI de identificación que lo confirme. Si eres menor de edad, debes
                            tener un representante de la familia mayor de edad que intervenga en el proceso
                            de adopción.<br/><br/>

                            - Comprobante de domicilio que demuestre que el adoptante es propietario del domicilio donde vivirá la huella o, en caso de alquiler, que el arrendatario permite residir con animales.<br/><br/>

                            - No destinarlo a la cría o reproducción.<br/><br/>

                            - Compromiso de no abandonarlo. Si por algún motivo no puedes hacerte cargo de la mascota deberás contactarte con la fundación.<br/><br/>

                            - Dotarle de los cuidados veterinarios que necesite.<br/><br/>

                            Finalmente, en algunos casos se deberá firmar un contrato de adopción, los cuales diferirán según la fundación, la cual tiene el derecho de no entregarte a la huella si no se cumples los requisitos necesarios previamente explicados. La fundación te orientará en el proceso de adopción y adaptación de la huella en su nuevo hogar.<br/><br/>


                            Los datos suministrados en el formulario son confidenciales y de acceso restringido, para el uso exclusivo de cada fundación y no serán transferidos a terceros bajo ninguna circunstancia.<br/><br/>

                            Te deseamos lo mejor en este proceso y estamos a disposición para despejar cualquier duda que tengas. Podés comnunicarte con nosotros escribiéndonos directamente a nuestro mail salvamihuella.10@gmail.com<br/><br/>

                            Nuestra meta es conseguir el mejor hogar para todas esas huellitas que nos necesitan.<br/><br/>

                            ¡Feliz adopción!<br/><br/>

                            SALVA MI HUELLA
                        
                        </p>
                    </div>

                    <div className={styles.btn_container}>
                         <button onClick={handleOnClick} className={styles.btn_accept}>ESTOY DE ACUERDO</button>
                    <div className={styles.btn_message}>Please read first before agreeing.</div>
                </div>
            </div>
        </div>
    </>
);
}
