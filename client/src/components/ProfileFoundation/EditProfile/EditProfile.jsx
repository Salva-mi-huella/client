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
    } catch (error) {
      console.log(error.message)
    }
    alert('Datos actualizados');
  }

  return (

    <div className={styles.dataContainer}>

      <div className={styles.data}>
        <div className={styles.Info}>

          <form className={styles.containerForm} onSubmit={handleSubmit(onSubmit)}>

            {/* GRUPO HEADER */}
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>Mis datos</h1>
              <button className={styles.btnUploadImage}>
                <img className={styles.uploadImage} src={foundation.images[0]} alt='' />
              </button>
            </div>


            {/* GRUPO 1 */}
            <div>

              {/* NOMBRE */}
              <label className={styles.items}>Nombre:</label>
              <input className={styles.input} defaultValue={foundation.name} type="text" maxLength={15} name="name" {...register("name", { maxLength: 15, pattern: /^-?[a-zA-Z]*$/ })} />

              {/* EMAIL */}
              <label className={styles.items}>Email: {foundation.email}</label>

              {/* ERRORES */}
              <div>
                {errors.name?.type === "maxLength" && <p className={styles.error}>El nombre debe tener 8 caracteres maximo</p>}
                {errors.name?.type === "pattern" && <p className={styles.error}>El nombre debe tener solo letras</p>}
              </div>
            </div>


            {/* GRUPO 2 */}
            <div>

              {/* CBU */}
              <label className={styles.items}>CBU Nro:</label>
              <input className={styles.input} defaultValue={foundation.CBU} type="number" maxLength={22} name="CBU"  {...register("CBU", { maxLength: 22, pattern: /^-?[0-9]*$/ })} />

              {/* BANCO */}
              <label className={styles.items}>Banco:</label>
              <input className={styles.input} defaultValue={foundation.bank} type="text" name="bank" {...register("bank", { maxLength: 20 })} />

              {/* ALIAS */}
              <label className={styles.items}>Alias:</label>
              <input className={styles.input} defaultValue={foundation.alias} type="text" name="alias" {...register("alias", { maxLength: 20 })} />

              {/* ERRORES */}
              <div>
                {errors.CBU?.type === "maxLength" && <p className={styles.error}>El CBU debe tener 22 caracteres máximo</p>}
                {errors.alias?.type === "maxLength" && <p className={styles.error}>El alias debe tener 10 caracteres máximo</p>}
              </div>
            </div>


            {/* GRUPO 3 */}
            <div>

              {/* DIRECCION */}
              <label className={styles.items}>Direccion:</label>
              <input className={styles.input} defaultValue={foundation.address} type="text" maxLength={30} name="address" {...register("address", { maxLength: 30 })} />

              {/* CIUDAD */}
              <label className={styles.items}>Ciudad: </label>
              <input className={styles.input} defaultValue={foundation.city} type="text" maxLength={20} name="city" {...register("city", { maxLength: 20, pattern: /^-?[a-zA-Z]*$/ })} />

              {/* TELEFONO */}
              <label className={styles.items}>Telefono:</label>
              <input className={styles.input} defaultValue={foundation.telephone_number} type="text" name="telephone_number" maxLength={20} {...register("telephone_number", { maxLength: 20, pattern: /^-?[0-9]*$/ })} />


              {/* ERRORES */}
              <div>
                {errors.address?.type === "maxLength" && <p className={styles.error}>La dirección debe tener 30 caracteres máximo</p>}
              </div>
              <div>
                {errors.city?.type === "pattern" && <p className={styles.error}>La ciudad debe tener solo letras</p>}
              </div>
              <div>
                {errors.telephone_number?.type === "maxLength" && <p className={styles.error}>El teléfono debe tener 20 caracteres máximo</p>}
                {errors.telephone_number?.type === "pattern" && <p className={styles.error}>El teléfono debe tener solo números</p>}
              </div>

            </div>

            {/* DESCRIPTION */}
            <div className={styles.editDescription}>

              <label className={styles.items}>Descripcion:</label>
              <input type="textarea" className={styles.input} defaultValue={foundation.description} />
            </div>


            <input className={styles.btnSaveData} type="submit" value="Guardar datos" />
          </form>

        </div>
      </div>
      <div>
      </div>
    </div>

  )
}