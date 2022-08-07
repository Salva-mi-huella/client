import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateFoundation, getFoundationDetail } from '../../../redux/actions';
import { useAuth0 } from '@auth0/auth0-react';

import styles from './EditDataForm.module.css';

import { set, useForm } from 'react-hook-form';
import { alignProperty } from '@mui/material/styles/cssUtils';


export default function EditProfile({ datos, setDatos, foundation }) {

  const { user, isLoading } = useAuth0();
  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFoundationDetail(foundation.id))
  }, [dispatch])

  console.log(foundation)


  const onSubmit = (data, e) => {
    // e.preventDefault()
    console.log(data)
    for (let prop in data) {
      if (data[prop] === '') delete data[prop]
    }

    try {
      if (!Object.keys(errors).length) dispatch(updateFoundation(data, foundation.id))
      alert('Done');
    } catch (error) {
      console.log(error.message)
      alert('Error updating');
    }
  }

  return (

    <div className={styles.formContainer}>

      <h1 className={styles.title}>Mis datos</h1>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

        {/* GRUPO HEADER */}
        <div className={styles.headerContainer}>

          {/* onclick={handleUploadImage(onUploadImage)} */}
          <button className={styles.btnUploadImage}  >
            <img className={styles.uploadImage} src={foundation.images[0]} alt='' />
          </button>


          <div className={styles.description}>
            {/* <label >Descripcion:</label> */}
            <textarea type="textarea" className={styles.inputDescription} defaultValue={foundation.description} maxLength={800} name="description"
              {...register("description", { maxLength: 800 })} />
            {errors.description?.type === "maxLength" && <span className={styles.error}>LA description debe tener 700 caracteres maximo</span>}
          </div>

        </div>


        {/* GRUPO 1 */}
        <div className={styles.grupos}>

          {/* NOMBRE */}
          <label className={styles.items}>Nombre:</label>
          <input className={styles.input} defaultValue={foundation.name} type="text" maxLength={15} name="name" {...register("name", { maxLength: 15, pattern: /^-?[a-zA-Z]*$/ })} />
          {errors.name?.type === "maxLength" && <span className={styles.error}>El nombre debe tener 8 caracteres maximo</span>}
          {errors.name?.tyspane === "pattern" && <span className={styles.error}>El nombre debe tener solo letras</span>}

          {/* EMAIL */}
          <label className={styles.items}>Email: {foundation.email}</label>
        </div>


        {/* GRUPO 2 */}
        <div className={styles.grupos}>


          {/* CBU */}
          <label className={styles.items}>CBU Nro:</label>
          <input className={styles.input} defaultValue={foundation.CBU} type="number" maxLength={22} name="CBU"  {...register("CBU", { maxLength: 22, pattern: /^-?[0-9]*$/ })} />
          {errors.CBU?.type === "maxLength" && <span className={styles.error}>El CBU debe tener 22 caracteres máximo</span>}

          {/* BANCO */}
          <label className={styles.items}>Banco:</label>
          <input className={styles.input} defaultValue={foundation.bank} type="text" name="bank" {...register("bank", { maxLength: 20 })} />

          {/* ALIAS */}
          <label className={styles.items}>Alias:</label>
          <input className={styles.input} defaultValue={foundation.alias} type="text" name="alias" {...register("alias", { maxLength: 20 })} />
          {errors.alias?.type === "maxLength" && <span className={styles.error}>El alias debe tener 10 caracteres máximo</span>}

        </div>


        {/* GRUPO 3 */}
        <div className={styles.grupos}>


          {/* DIRECCION */}
          <label className={styles.items}>Direccion:</label>
          <input className={styles.input} defaultValue={foundation.address} type="text" maxLength={30} name="address" {...register("address", { maxLength: 30 })} />
          {errors.address?.type === "maxLength" && <span className={styles.error}>La dirección debe tener 30 caracteres máximo</span>}

          {/* CIUDAD */}
          <label className={styles.items}>Ciudad: </label>
          <input className={styles.input} defaultValue={foundation.city} type="text" maxLength={20} name="city" {...register("city", { maxLength: 20, pattern: /^-?[a-zA-Z]*$/ })} />
          {errors.city?.type === "pattern" && <span className={styles.error}>La ciudad debe tener solo letras</span>}

          {/* TELEFONO */}
          <label className={styles.items}>Telefono:</label>
          <input className={styles.input} defaultValue={foundation.telephone_number} type="text" name="telephone_number" maxLength={20} {...register("telephone_number", { maxLength: 20, pattern: /^-?[0-9]*$/ })} />
          {errors.telephone_number?.type === "maxLength" && <span className={styles.error}>El teléfono debe tener 20 caracteres máximo</span>}
          {errors.telephone_number?.type === "pattern" && <span className={styles.error}>El teléfono debe tener solo números</span>}

        </div>

        <div className={styles.btnContainer}>
          <input className={styles.btnSaveData} type="submit" value="Guardar datos" />
        </div>

      </form >

    </div >

  )
}