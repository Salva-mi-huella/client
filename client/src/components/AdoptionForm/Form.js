import { useMemo, useState } from "react";
import { Form, Input, Textarea, useFormValidation } from "reactjs-forms";
import styles from './Form.module.css'

export default function Formulario (){


  return (
    <div className={styles.container}>
      
      <form>

        <div className={styles.title}>
          <h1 className={styles.titletext}>FORMULARIO DE ADOPCION</h1>
        </div>

        <div className={styles.groupinp}>
          <div className={styles.inp}>
            <label htmlFor="name">Nombres</label>
            <input className="form-control opacity-25" type="text" name="name" id="name" />
          </div>

          <div className={styles.inp}>
            <label htmlFor="lastname">Apellidos</label>
            <input className="form-control opacity-25" type="text" name="lastname" id="lastname" />
          </div>
        </div>

        <div className={styles.groupinp}>
          <div className={styles.inp}>
            <label htmlFor="email">Email</label>
            <input className="form-control opacity-25" type="email" name="email" id="email" />
          </div>

          <div className={styles.inp}>
            <label htmlFor="telefono">Telefono</label>
            <input className="form-control w-75 opacity-25" type="tel" name="phone" id="phone" />
          </div>
        </div>

        <div className={styles.groupinp3}>
          <div className={styles.inp}>
            <label htmlFor="age">Edad</label>
            <input className="form-control w-25 opacity-25" type="number" name="age" id="age" />
          </div> 
          <div className={styles.inp}>
            <label htmlFor="pet">Huella</label>
            <input className="form-control w-75 opacity-25" type="text" name="pet" id="pet" />
          </div> 
          <div className={styles.inp}>
            <label htmlFor="foundation">Fundacion</label>
            <input className="form-control w-100 opacity-25"  type="text" name="foundation" id="foundation" />
          </div> 
        </div>   

        <div className={styles.textarea}>
            <label htmlFor="Textarea" class="form-label">¿ Porque quieres adoptar ?</label>
            <textarea class="form-control opacity-25" id="Textarea" rows="3"></textarea>
        </div>  

        <div className={styles.check}>
          <input type="checkbox" className="form-check-input me-4"></input>  
          <label>He leido y acepto todos los <a href="/tienda">terminos y condiciones.</a></label>
        </div>  
      </form>

      <div className={styles.boton}>
        <button className={styles.send}>ENVIAR</button>
      </div>
    </div>
  );
};

