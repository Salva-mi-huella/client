import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import style from './EditDataForm.module.css';
import { getUserByEmail, updateUser } from '../../../redux/actions';
import Swal from 'sweetalert2';


export default function EditProfile() {

  const { user } = useAuth0();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserByEmail(user.email))
  }, [])

  const userDetail = useSelector(state => state.user);
  const [error, setError] = useState({})

  const [input, setInputs] = useState({
    name: userDetail?.name ? userDetail.name : "",
    lastname: userDetail?.lastname ? userDetail.lastname : "",
    city: '',
    dni: '',
    address: '',
    birthday: '',
    telephone_number: '',

  })

  function validateForm(input) {
    let error = {}
    const regExpName = /^-?[a-zA-Z\s]*$/
    const regPhone = /^-?[0-9]*$/


    if (input.name && input.name.length < 3) error.name = 'mínimo 3 caracteres'

    if (input.name && !regExpName.test(input.name)) error.name = 'Solo Letras'

    if (input.lastname && !regExpName.test(input.lastname)) error.lastname = 'Solo Letras'

    if (input.telephone_number && !regPhone.test(input.telephone_number)) error.telephone_number = 'teléfono invalido'

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

          Swal.fire('¡Tus datos han sido actualizado con éxito!', '', 'success')
        }
        else if (result.isDenied) {
          Swal.fire('Cambios no actualizados', '', 'info')

        }
      })
  
  }


  return (
    <div className={style.postProductContainer}>

      <form onSubmit={handleSubmit} className={style.form}>
        <h3 className={style.h3title}> Mis Datos </h3>

        {/* NOMBRE */}
        <div className={style.div}>
          <label className={style.label} htmlFor="name">Nombre</label>
          <input className={style.input} defaultValue={userDetail.name}  onChange={(e) => handleChange(e)} type="text" id="name" name="name" value={input.name} />
          {error.name && <p className={`${style.error}`}>{error.name}</p>}
        </div>

        {/* APELLIDO*/}
        <div className={style.div}>
          <label className={style.label} htmlFor="lastname">Apellido</label>
          <input className={style.input} defaultValue={userDetail.lastname}  onChange={(e) => handleChange(e)} type="text" id="lastname" name="lastname" value={input.lastname} />
          {error.lastname && <p className={`${style.error}`}>{error.lastname}</p>}
        </div>

        {/* EMAIL */}
        <div className={style.cont}>
          <label className={style.label} htmlFor="email">Email</label>
          <input className={style.input} disabled defaultValue={user.email}/>
        </div>

        {/* TELEPHONE_NUMBER */}
        <div className={style.cont}>
          <label className={style.label} htmlFor="telephone_number">Teléfono</label>
          <input className={style.input} defaultValue={userDetail.telephone_number} onChange={(e) => handleChange(e)} type="text" id="telephone_number" name="telephone_number" value={input.telephone_number} />
          {error.telephone_number && <p className={`${style.error}`}>{error.telephone_number}</p>}
        </div>

        {/* CITY */}
        <div className={style.cont}>
          <label className={style.label} htmlFor="city">Ciudad</label>
          <input className={style.input} onChange={(e) => handleChange(e)} type="text" id="city" name="city" value={input.city} />
          
        </div>

        {/* ADDRESS */}
        <div className={style.cont}>
          <label className={style.label} htmlFor="addres">Dirección</label>
          <input className={style.input} onChange={(e) => handleChange(e)} type="text" id="address" name="address" value={input.address} />
          
        </div>

        {/* DNI*/}
        <div className={style.cont}>
          <label className={style.label} htmlFor="dni">DNI N°</label>
          <input className={style.input} defaultValue={userDetail.dni}  onChange={(e) => handleChange(e)} type="text" id="dni" name="dni" value={input.dni} />
          
        </div>

        {/* FECHA DE NACIMIENTO */}
        <div className={style.cont}>
          <label className={style.label} htmlFor="dni">Fecha de Nacimiento</label>
          <input className={style.input} defaultValue={userDetail.birthday}  onChange={(e) => handleChange(e)} type="date" id="birthday" name="birthday" value={input.birthday} />
        </div>

      
        <button className={style.post} type="submit">Guardar Datos</button>
      </form>

    </div>
  )
}