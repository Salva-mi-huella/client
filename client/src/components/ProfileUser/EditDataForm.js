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


    if (input.name && input.name.length < 3) error.name = 'Mínimo 3 caracteres.'

    if (input.name && !regExpName.test(input.name)) error.name = 'Solo Letras.'
    if (input.name && input.name.length > 15) error.name = 'Máximo 15 caracteres.'


    if (input.lastname && !regExpName.test(input.lastname)) error.lastname = 'Solo Letras.'
    if (input.lastname && input.lastname.length > 15) error.lastname = 'Máximo 15 caracteres.'


    if (input.telephone_number && !regPhone.test(input.telephone_number)) error.telephone_number = 'Teléfono inválido.'
    else if (input.telephone_number && input.telephone_number.length < 10) error.telephone_number = 'Mínimo 10 caracteres.'
    else if (input.telephone_number && input.telephone_number.length > 14) error.telephone_number = 'Máximo 14 caracteres.'

    if (input.city && input.city.length > 20) error.city = 'Máximo 20 caracteres.'
    if (input.city&& !regExpName.test(input.city)) error.city = 'Solo Letras.'

    if (input.address && input.address.length > 40) error.address = 'Máximo 40 caracteres.'
    

    if (input.dni && input.dni.length > 8 ) error.dni = 'El DNI debe tener 8 caracteres.'
    else if (input.dni && input.dni.length < 8 ) error.dni = 'El DNI debe tener 8 caracteres.'




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

          Swal.fire('¡Tus datos han sido actualizados, los verás reflejados en un instante!', '', 'success')
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
        <h3 className={style.h3title}> Mis datos </h3>

        {/* NOMBRE */}
        <div className={style.inputsGroups}>
            <div className={style.inputDiv}>
              <label className={style.label} htmlFor="name">Nombre:</label>
              <input className={style.input} defaultValue={userDetail.name} placeholder='Nombre' onChange={(e) => handleChange(e)} type="text" id="name" name="name" value={input.name} />
              {error.name && <p className={`${style.error}`}>{error.name}</p>}
            </div>
        {/* APELLIDO*/}
            <div className={style.inputDiv}>
              <label className={style.label} htmlFor="lastname">Apellido:</label>
              <input className={style.input} defaultValue={userDetail.lastname} placeholder='Apellido' onChange={(e) => handleChange(e)} type="text" id="lastname" name="lastname" value={input.lastname} />
              {error.lastname && <p className={`${style.error}`}>{error.lastname}</p>}
            </div>
        {/* EMAIL */}
        <div className={style.cont}>
          <label className={style.label} htmlFor="email">Email:</label>
          <p className={style.mail}>{userDetail.email}</p>
        </div>
        </div>

        <div className={style.inputsGroups}>
            {/* CITY */}
            <div className={style.inputDiv}>
              <label className={style.label} htmlFor="city">Ciudad:</label>
              <input className={style.input} onChange={(e) => handleChange(e)} placeholder='Ciudad'type="text" id="city" name="city" value={input.city} />
              {error.city && <p className={`${style.error}`}>{error.city}</p>}
            </div>

            {/* ADDRESS */}
            <div className={style.inputDiv}>
              <label className={style.label} htmlFor="addres">Dirección:</label>
              <input className={style.input} onChange={(e) => handleChange(e)} placeholder='Dirección'type="text" id="address" name="address" value={input.address} />
              {error.address && <p className={`${style.error}`}>{error.address}</p>}
            </div>
        </div>

        <div className={style.inputsGroups}>
            {/* TELEPHONE_NUMBER */}
            <div className={style.inputDiv}>
              <label className={style.label} htmlFor="telephone_number">Teléfono:</label>
              <input className={style.input} defaultValue={userDetail.telephone_number} placeholder='Teléfono'onChange={(e) => handleChange(e)} type="text" id="telephone_number" name="telephone_number" value={input.telephone_number} />
              {error.telephone_number && <p className={`${style.error}`}>{error.telephone_number}</p>}
            </div>


            {/* DNI*/}
            <div className={style.inputDiv}>
              <label className={style.label} htmlFor="dni">DNI N°:</label>
              <input className={style.input} defaultValue={userDetail.dni}  placeholder='DNI °'onChange={(e) => handleChange(e)} type="number" id="dni" name="dni" value={input.dni} />
              {error.dni && <p className={`${style.error}`}>{error.dni}</p>}
              
            </div>

            {/* FECHA DE NACIMIENTO */}
            <div className={style.inputDiv}>
              <label className={style.label} htmlFor="dni">Fecha de Nacimiento:</label>
              <input className={style.input} defaultValue={userDetail.birthday}  onChange={(e) => handleChange(e)} type="date" id="birthday" name="birthday" value={input.birthday} />
            </div>

        </div>
        

        <div className={style.transitContainer}>
          <label className={style.labelTransit}>¿Te gustaria ofrecerte como persona de tránsito?</label>
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