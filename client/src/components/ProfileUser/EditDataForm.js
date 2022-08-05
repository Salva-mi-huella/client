import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { updateUser} from '../../redux/actions';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './EditDataForm.module.css';
import { useForm } from 'react-hook-form';
import { getUserByEmail } from '../../redux/actions';
import Swal from 'sweetalert2';


export default function EditDataForm({datos,setDatos}) {

  const { user } = useAuth0();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch=useDispatch()

  useEffect(() => { 
        dispatch(getUserByEmail(user.email))
     }, [dispatch, user.email])

     const userDetail = useSelector(state => state.user);
 
  
  const onSubmit = (data, e) => {
        // e.preventDefault()
        console.log(data)
        for(let prop in data) {
          if (data[prop]==='') delete data[prop]
        }

        try {
          if (!Object.keys(errors).length) {
            Swal.fire({
              title: '¿Estás seguro de querer guardar los cambios?',
              showDenyButton: true,
              // showCancelButton: true,
              confirmButtonText: 'Guardar',
              // cancelButtonText: 'Cancelar',
              denyButtonText: `Cancelar`,
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                dispatch(updateUser(data, user.email))
                Swal.fire('¡Tus datos han sido actualizado con éxito!', '', 'success')
              } else if (result.isDenied) {
                Swal.fire('Cambios no actualizados', '', 'info')
              }
            })
          }
        } catch (error) {
          console.log(error.message)
        }
      }
  
      
    return (
  <div className={styles.container}>
     <div className={styles.dataContainer}>

         <div className={styles.data}>
             <div className={styles.Info}>
              
                 <form className={styles.containerForm} onSubmit={handleSubmit(onSubmit)}>

                  <div className={styles.titleContainer}>
                      <h1 className={styles.title}>Mis datos</h1>
                      <input className={styles.button} type="submit" value="Guardar datos" />
                  </div>

                    <div>
                      <label className={styles.items}>Nombre:</label>
                      <input className={styles.input} defaultValue={userDetail.name}  type="text" maxLength={30} name="name" {...register("name", { maxLength: 30 , pattern: /^-?[a-zA-Z\s]*$/})} />
                      {/* {errors.name?.type === "required" && <p className={styles.error}>El nombre es obligatorio</p>} */}
                    <label className={styles.items}>Email: {user.email}</label>
                        <div>
                          {errors.name?.type === "maxLength" && <p className={styles.error}>El nombre debe tener 8 caracteres máximo</p>}
                          {errors.name?.type === "pattern" && <p className={styles.error}>El nombre debe tener solo letras</p>}
                        </div>
                    </div>

                   <div>
                    <label className={styles.items}>DNI Nro:</label>
                     <input className={styles.input} defaultValue={userDetail.dni} type="number" maxLength={8} name="dni" 
                     {...register("dni", { maxLength: 8 , pattern: /^-?[0-9]*$/})} 
                     />
                     {/* {errors.dni?.type === "required" && <p className={styles.error}>El DNI es obligatorio</p>} */}

                     <label className={styles.items}>Fecha de nacimiento:</label>
                       <input className={styles.input} defaultValue={userDetail.birthday} type="date" name="birthday" {...register("birthday")}/>
                       <div>
                          {errors.dni?.type === "maxLength" && <p className={styles.error}>El DNI debe tener 8 caracteres máximo</p>}
                          {errors.dni?.type === "pattern" && <p className={styles.error}>El DNI debe tener solo numeros</p>}
                       </div>
                       <div>
                       {/* {errors.birthday?.type === "required" && <p className={styles.error}>La fecha de nacimiento es obligatoria</p>} */}
                       </div>
                   </div>

                   <div>
                      {/* {errors.address?.type === "required" && <p className={styles.error}>La dirección es obligatoria</p>} */}
                      <label className={styles.items}>Ciudad: </label>
                      <input className={styles.input}  defaultValue={userDetail.city} type="text" maxLength={20} name="city" {...register("city", { maxLength:20 , pattern: /^-?[a-zA-Z]*$/})}/>
                      <label className={styles.items}>Dirección:</label>
                      <input className={styles.input} defaultValue={userDetail.address}  type="text" maxLength={30} name="address" {...register("address", { maxLength: 30 })}/>
                      {/* {errors.city?.type === "required" && <p className={styles.error}>La ciudad es obligatoria</p>} */}
                      <div>
                        {errors.address?.type === "maxLength" && <p className={styles.error}>La dirección debe tener 30 caracteres máximo</p>}
                      </div>
                      <div>
                        {errors.city?.type === "pattern" && <p className={styles.error}>La ciudad debe tener solo letras</p>}
                      </div>
                   </div>
                   
                   <div>
                      <label className={styles.items}>Teléfono:</label>
                        <input className={styles.input} defaultValue={userDetail.telephone_number} type="text" name="telephone_number" maxLength={20} {...register("telephone_number", { maxLength: 20, pattern: /^-?[0-9]*$/ })}/>
                        {/* {errors.telephone_number?.type === "required" && <p className={styles.error}>El telefono es obligatorio</p>} */}
                        {errors.telephone_number?.type === "maxLength" && <p className={styles.error}>El teléfono debe tener 20 caracteres máximo</p>}
                        {errors.telephone_number?.type === "pattern" && <p className={styles.error}>El teléfono debe tener solo números</p>}
                   </div>

                   <div className={styles.transit}>
                      <label >¿Te gustaría ofrecerte como persona de tránsito?</label>
                      <label htmlFor='Si'><input id='Si' {...register('transit')} value='Si' type='radio' name='transit'/>Sí</label>
                      <label htmlFor='No'><input id='No' {...register('transit')} value='No' type='radio' name='transit'/>No</label>
                   </div>
                 </form>
                
             </div>
         </div>
             <div>
                 {/* <img className={styles.photo} src={user.picture}></img> */}
             </div>
 </div>
 </div>

    )
}