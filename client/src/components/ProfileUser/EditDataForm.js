// import React, {useEffect} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import { updateUser} from '../../redux/actions';
// import { useAuth0 } from '@auth0/auth0-react';
// import styles from './EditDataForm.module.css';
// import { useForm } from 'react-hook-form';
// import { getUserByEmail } from '../../redux/actions';
// import Swal from 'sweetalert2';


// export default function EditDataForm({datos,setDatos}) {

//   const { user } = useAuth0();
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const dispatch=useDispatch()

//   useEffect(() => { 
//         dispatch(getUserByEmail(user.email))
//      }, [dispatch, user.email])

//      const userDetail = useSelector(state => state.user);
 
     
//   const onSubmit = (data, e) => {
//         // e.preventDefault()
//         console.log(data)
//         for(let prop in data) {
//           if (data[prop]==='') delete data[prop]
//         }

//         try {
//           if (!Object.keys(errors).length) {
//             Swal.fire({
//               title: '¿Estás seguro de querer guardar los cambios?',
//               showDenyButton: true,
//               // showCancelButton: true,
//               confirmButtonText: 'Guardar',
//               // cancelButtonText: 'Cancelar',
//               denyButtonText: `Cancelar`,
//             }).then((result) => {
//               /* Read more about isConfirmed, isDenied below */
//               if (result.isConfirmed) {
//                 dispatch(updateUser(data, user.email))
//                 Swal.fire('¡Tus datos han sido actualizado con éxito!', '', 'success')
//               } else if (result.isDenied) {
//                 Swal.fire('Cambios no actualizados', '', 'info')
//               }
//             })
//           }
//         } catch (error) {
//           console.log(error.message)
//         }
//       }
//     return (
//   <div className={styles.container}>
//      <div className={styles.dataContainer}>

//          <div className={styles.data}>
//              <div className={styles.Info}>
              
//                  <form className={styles.containerForm} onSubmit={handleSubmit(onSubmit)}>

//                   <div className={styles.titleContainer}>
//                       <h1 className={styles.title}>Mis datos</h1>
//                       <input className={styles.button} type="submit" value="Guardar datos" />
//                   </div>

//                     <div>
//                       <label className={styles.items}>Nombre:</label>
//                       <input className={styles.input} defaultValue={userDetail.name}  type="text" maxLength={30} name="name" {...register("name", { maxLength: 30 , pattern: /^-?[a-zA-Z\s]*$/})} />
//                       <label className={styles.items}>Apellido:</label>
//                       <input className={styles.input} defaultValue={userDetail.lastname} type="text" maxLength={30} name="lastname"{...register("lastname", {maxLength: 30, pattern: /^-?[a-zA-Z\s]*$/})}/>
//                       {/* {errors.name?.type === "required" && <p className={styles.error}>El nombre es obligatorio</p>} */}
//                     <label className={styles.items}>Email: {user.email}</label>
//                         <div>
//                           {errors.name?.type === "maxLength" && <p className={styles.error}>El nombre debe tener 8 caracteres máximo</p>}
//                           {errors.name?.type === "pattern" && <p className={styles.error}>El nombre debe tener solo letras</p>}
//                         </div>
//                     </div>

//                    <div>
//                     <label className={styles.items}>DNI Nro:</label>
//                      <input className={styles.input} defaultValue={userDetail.dni} type="number" maxLength={8} name="dni" 
//                      {...register("dni", { maxLength: 8 , pattern: /^-?[0-9]*$/})} 
//                      />
//                      {/* {errors.dni?.type === "required" && <p className={styles.error}>El DNI es obligatorio</p>} */}

//                      <label className={styles.items}>Fecha de nacimiento:</label>
//                        <input className={styles.input} defaultValue={userDetail.birthday} type="date" name="birthday" {...register("birthday")}/>
//                        <div>
//                           {errors.dni?.type === "maxLength" && <p className={styles.error}>El DNI debe tener 8 caracteres máximo</p>}
//                           {errors.dni?.type === "pattern" && <p className={styles.error}>El DNI debe tener solo numeros</p>}
//                        </div>
//                        <div>
//                        {/* {errors.birthday?.type === "required" && <p className={styles.error}>La fecha de nacimiento es obligatoria</p>} */}
//                        </div>
//                    </div>

//                    <div>
//                       {/* {errors.address?.type === "required" && <p className={styles.error}>La dirección es obligatoria</p>} */}
//                       <label className={styles.items}>Ciudad: </label>
//                       <input className={styles.input}  defaultValue={userDetail.city} type="text" maxLength={20} name="city" {...register("city", { maxLength:20 , pattern: /^[A-Za-z0-9\s]+$/g})}/>
//                       <label className={styles.items}>Dirección:</label>
//                       <input className={styles.input} defaultValue={userDetail.address}  type="text" maxLength={30} name="address" {...register("address", { maxLength: 30 })}/>
//                       {/* {errors.city?.type === "required" && <p className={styles.error}>La ciudad es obligatoria</p>} */}
//                       <div>
//                         {errors.address?.type === "maxLength" && <p className={styles.error}>La dirección debe tener 30 caracteres máximo</p>}
//                       </div>
//                       <div>
//                         {errors.city?.type === "pattern" && <p className={styles.error}>La ciudad debe tener solo letras</p>}
//                       </div>
//                    </div>
                   
//                    <div>
//                       <label className={styles.items}>Teléfono:</label>
//                         <input className={styles.input} defaultValue={userDetail.telephone_number} type="text" name="telephone_number" maxLength={20} {...register("telephone_number", { maxLength: 20, pattern: /^-?[0-9]*$/ })}/>
//                         {/* {errors.telephone_number?.type === "required" && <p className={styles.error}>El telefono es obligatorio</p>} */}
//                         {errors.telephone_number?.type === "maxLength" && <p className={styles.error}>El teléfono debe tener 20 caracteres máximo</p>}
//                         {errors.telephone_number?.type === "pattern" && <p className={styles.error}>El teléfono debe tener solo números</p>}
//                    </div>

//                    <div className={styles.transit}>
//                       <label >¿Te gustaría ofrecerte como persona de tránsito?</label>
                      
//                       <div>
//                           <label htmlFor='Si'><input  id='Si' {...register('transit')} value='Si' type='checkbox' name='transit'/>Sí</label>
//                           <label htmlFor='No'><input  id='No' {...register('transit')} value='No' type='checkbox' name='transit'/>No</label>
//                       </div> 
//                      {/*  : 
//                       <div>
//                         <label htmlFor='Si'><input  id='Si' {...register('transit')} value='Si' type='checkbox' name='transit'/>Sí</label>
//                         <label htmlFor='No'><input id='No' {...register('transit')} value='Nooo' type='checkbox' name='transit'/>No</label>
//                       </div>  */}
//                       {/* <label htmlFor='Si'><input id='Si' {...register('transit')} value='Si' type='checkbox' name='transit'/>Sí</label>
//                       <label htmlFor='No'><input id='No' {...register('transit')} value='No' type='checkbox' name='transit'/>No</label> */}
//                    </div>
//                  </form>
                
//              </div>
//          </div>
//              <div>
//                  {/* <img className={styles.photo} src={user.picture}></img> */}
//              </div>
//  </div>
//  </div>

//     )
// }

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import style from './EditDataForm.module.css';
import { getUserByEmail, updateUser } from '../../redux/actions';
import Swal from 'sweetalert2';


export default function EditProfile() {

  const { user } = useAuth0();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserByEmail(user?.email))
  }, [])

  const userDetail = useSelector(state => state.user);
  const [error, setError] = useState({})

  const [input, setInputs] = useState({
    name: userDetail.name || "",
    lastname: userDetail.lastname || "",
    city: userDetail.city || "",
    dni: userDetail.dni || "",
    address: userDetail.address || "",
    birthday: userDetail.birthday || "",
    telephone_number: userDetail.telephone_number || "",
    transit: userDetail.transit || "",

  })

  function validateForm(input) {
    let error = {}
    const regExpName = /^-?[a-zA-Z\s]*$/
    const regPhone = /^-?[0-9]*$/


    if (input.name && input.name.length < 3) error.name = 'mínimo 3 caracteres'

    if (input.name && !regExpName.test(input.name)) error.name = 'Solo Letras'

    if (input.lastname && !regExpName.test(input.lastname)) error.lastname = 'Solo Letras'

    if (input.telephone_number && !regPhone.test(input.telephone_number)) error.telephone_number = 'teléfono invalido'

    if (input.city && input.city.length > 10) error.city = 'ciudad invalida'
    
    if (input.city&& !regExpName.test(input.city)) error.city = 'Solo Letras'


    return error;
  }

  function handleChange(e) {
    setInputs({ ...input, [e.target.name]: e.target.value })
    setError(validateForm({
      ...input,
      [e.target.name]: e.target.value
    }))

  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(input)
    if(!Object.keys(error).length){
    for (let prop in input) {
      if (input[prop] === '') delete input[prop]
    }
      if(input.dni) input.dni = parseInt(input.dni)
      Swal.fire({
        title: '¿Estás seguro de querer guardar los cambios?',
        showDenyButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `Cancelar`,

      }).then((result) => {
        if (result.isConfirmed) {

          dispatch(updateUser(input, user.email))

          Swal.fire('¡Tus datos han sido actualizados, los veras reflejados en un instante!', '', 'success')
        }
        else if (result.isDenied) {
          Swal.fire('Cambios no actualizados', '', 'info')

        }
      })
    }
  }


  return (
    <div className={style.postProductContainer}>

      <form onSubmit={handleSubmit} className={style.form}>
        <h3 className={style.h3title}> Mis Datos </h3>
        {/* EMAIL */}
        <div className={style.cont}>
          <label className={style.label} htmlFor="email">Email:</label>
          <p className={style.mail}>{userDetail.email}</p>
        </div>

        {/* NOMBRE */}
        <div className={style.div}>
          <label className={style.label} htmlFor="name">Nombre:</label>
          <input className={style.input} defaultValue={userDetail.name}  onChange={(e) => handleChange(e)} type="text" id="name" name="name" value={input.name} />
          {error.name && <p className={`${style.error}`}>{error.name}</p>}
        </div>

        {/* APELLIDO*/}
        <div className={style.div}>
          <label className={style.label} htmlFor="lastname">Apellido:</label>
          <input className={style.input} defaultValue={userDetail.lastname}  onChange={(e) => handleChange(e)} type="text" id="lastname" name="lastname" value={input.lastname} />
          {error.lastname && <p className={`${style.error}`}>{error.lastname}</p>}
        </div>


        {/* TELEPHONE_NUMBER */}
        <div className={style.cont}>
          <label className={style.label} htmlFor="telephone_number">Teléfono:</label>
          <input className={style.input} defaultValue={userDetail.telephone_number} onChange={(e) => handleChange(e)} type="text" id="telephone_number" name="telephone_number" value={input.telephone_number} />
          {error.telephone_number && <p className={`${style.error}`}>{error.telephone_number}</p>}
        </div>

        {/* CITY */}
        <div className={style.cont}>
          <label className={style.label} htmlFor="city">Ciudad:</label>
          <input className={style.input} onChange={(e) => handleChange(e)} type="text" id="city" name="city" value={input.city} />
          {error.city && <p className={`${style.error}`}>{error.city}</p>}
        </div>

        {/* ADDRESS */}
        <div className={style.cont}>
          <label className={style.label} htmlFor="addres">Dirección:</label>
          <input className={style.input} onChange={(e) => handleChange(e)} type="text" id="address" name="address" value={input.address} />
          
        </div>

        {/* DNI*/}
        <div className={style.cont}>
          <label className={style.label} htmlFor="dni">DNI N°:</label>
          <input className={style.input} defaultValue={userDetail.dni}  onChange={(e) => handleChange(e)} type="number" id="dni" name="dni" value={input.dni} />
          
        </div>

        {/* FECHA DE NACIMIENTO */}
        <div className={style.cont}>
          <label className={style.label} htmlFor="dni">Fecha de Nacimiento:</label>
          <input className={style.input} defaultValue={userDetail.birthday}  onChange={(e) => handleChange(e)} type="date" id="birthday" name="birthday" value={input.birthday} />
        </div>
        
        <div>
          <label>¿Te gustaria ofrecerte como persona de tránsito?</label>
          {console.log(userDetail.transit)}
              {userDetail.transit === "Si"?
              <div className={style.transit}>
                <label htmlFor='Si'><input onChange={(e)=>handleChange(e)} id='Si' defaultChecked value='Si' type='radio' name='transit'/>Sí</label>
                <label htmlFor='No'><input onChange={(e)=>handleChange(e)} id='No' value='No' type='radio' name='transit'/>No</label>              
              </div> : 
              <div className={style.transit}>
                <label htmlFor='Si'><input onChange={(e)=>handleChange(e)} id='Si'  value='Si' type='radio' name='transit'/>Sí</label>
                <label htmlFor='No'><input onChange={(e)=>handleChange(e)} id='No' defaultChecked value='No' type='radio' name='transit'/>No</label>              
            </div> }
        </div>      
        <button className={style.post} type="submit">Guardar Datos</button>
      </form>

    </div>
  )
}