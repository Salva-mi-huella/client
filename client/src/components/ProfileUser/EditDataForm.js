import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import { postUser } from '../../redux/actions/index';
import { useAuth0 } from '@auth0/auth0-react';
import jwt from "jsonwebtoken";
import styles from './EditDataForm.module.css';
import { set, useForm } from 'react-hook-form';






export default function EditDataForm({datos,setDatos}) {

  const { user, isLoading } = useAuth0();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [userData, setUserData] = React.useState({
    dni: '',
    telefono: '',
    direccion: '',
    nacimiento: '',
  });


    const onSubmit = (data) => {
        console.log(data);
        setDatos(false)
        setUserData({
          dni: data.dni,
          telefono: data.telefono,
          direccion: data.direccion,
          nacimiento: data.nacimiento,
        });
        // postUser(userData)
        alert('Datos actualizados');
      }
    
      const enviarDatos = () => {
        setDatos(true)
      }



    return (
        <div>
        <div>
   <div>
     <div className={styles.dataContainer}>
         <button onClick={enviarDatos} className={styles.button}>Editar datos ✎</button>

         <h1 className={styles.myData}>Mis datos</h1>
         <div className={styles.data}>
             <div>
                 <img className={styles.photo} src={user.picture}></img>
             </div>
             <div className={styles.Info}>
                 <p className={styles.items}>Nombre: {user.name}</p>
                 <p className={styles.items}>Email: {user.email}</p>
                 <p className={styles.items}>DNI Nro:   {watch("dni")}</p>
                 <p className={styles.items}>Telefono:   {watch("phone")}</p>
                 <p className={styles.items}>Direccion:   {watch("adress")}</p>
                 <p className={styles.items}>Fecha de nacimiento: {watch("date")}</p>
                 <p className={styles.items}>Ciudad: {watch("city")} </p>
                 <p className={styles.items}>Tránsito: {watch("transito")}</p>
                 {datos && 
                 <form className={styles.containerForm} onSubmit={handleSubmit(onSubmit)}>
                   {/* <div>
                     <label>Nombre:</label>
                     <input type="text" name="name" defaultValue={user.name}{...register("nombre")} disabled/>
                   </div> */}
                   <div>
                     {/* <label>Email:</label> */}
                     <input className={styles.inputDni} value={userData.dni} type="text" maxLength={8} name="dni" {...register("dni", { required: true,maxLength: 8 , pattern: /^-?[0-9]*$/})} />
                     {errors.dni?.type === "required" && <p className={styles.error}>El DNI es obligatorio</p>}
                     {errors.dni?.type === "maxLength" && <p className={styles.error}>El DNI debe tener 8 caracteres maximo</p>}
                     {errors.dni?.type === "pattern" && <p className={styles.error}>El DNI debe tener solo numeros</p>}
                   </div>
                   <div>
                     {/* <label>Telefono:</label> */}
                     <input className={styles.input} value={userData.telefono} type="text" name="telefono" maxLength={20} {...register("phone", { required: true, maxLength: 20, pattern: /^-?[0-9]*$/ })}/>
                     {errors.phone?.type === "required" && <p className={styles.error}>El telefono es obligatorio</p>}
                     {errors.phone?.type === "maxLength" && <p className={styles.error}>El telefono debe tener 20 caracteres maximo</p>}
                     {errors.phone?.type === "pattern" && <p className={styles.error}>El telefono debe tener solo numeros</p>}

                   </div>
                   <div>
                     {/* <label>Dirección:</label> */}
                     <input className={styles.input} value={userData.direccion} type="text" maxLength={30} name="direccion" {...register("adress", { required: true, maxLength: 30 })}/>
                     {errors.adress?.type === "required" && <p className={styles.error}>La dirección es obligatoria</p>}
                     {errors.adress?.type === "maxLength" && <p className={styles.error}>La dirección debe tener 30 caracteres maximo</p>}
                   </div>
                   <div>
                     {/* <label>Fecha de nacimiento:</label> */}
                     <input className={styles.inputNacimiento} type="date" name="nacimiento" {...register("date", { required: true })}/>
                     {errors.date?.type === "required" && <p className={styles.error}>La fecha de nacimiento es obligatoria</p>}
                   </div>
                   <div>
                     <input className={styles.inputCiudad} type="text" maxLength={20} name="ciudad" {...register("city", { required: true, maxLength:20 })}/>
                     {errors.city?.type === "required" && <p className={styles.error}>La ciudad es obligatoria</p>}
                   </div>
                   <div>
                     <select className={styles.inputSelect} {...register("transito", {required: true})}>
                       <option value="Si">Si</option>
                       <option value="No">No</option>
                     </select>
                     {errors.date?.type === "required" && <p className={styles.error}>La fecha de nacimiento es obligatoria</p>}
                   </div>
                   <input className={styles.button} type="submit" value="Guardar datos" />
                 </form>
                 }
             </div>
         </div>
     </div>
 </div>
 </div> 
</div>


        
    )
}