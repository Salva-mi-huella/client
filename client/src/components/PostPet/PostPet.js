import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Form, Formik, Field, ErrorMessage } from "formik";
import Swal from 'sweetalert2'

import { postPets } from "../../redux/actions";

import styles from "./PostPet.module.css";

export default function PostPet({ foundation }) {

  console.log(foundation);

  const dispatch = useDispatch()
  var date = Date();

  const [imag, setImag] = useState([]);


  const uploadImage = (e) => {
    // setImag(imag)
    // setImag(e.target.files[0])
    //[e.target.name]: e.target.files[0]

    setImag([...imag, e.target.files[0]])
    console.log(imag)
  }


  return (

    <div className={styles.postPetsContainer}>

      <Formik
        initialValues={{
          name: "",
          images: `${imag}`,
          // images: [],
          type: "",
          age: "",
          gender: "",
          post_date: date,
          description: "",
          adopted: false,
        }}

        validate={(values) => {
          let errores = {};

          //VALIDACION NOMBRE
          if (!values.name) {
            errores.name = "Por favor ingrese un nombre.";
          } else if (values.name.length < 3) {
            errores.name = "El nombre debe incluir más de 3 caracteres.";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
            errores.name = "El nombre solo puede contener letras y espacios.";
          }

          //VALIDACION RADIO
          if (values.type === "") {
            errores.type = "Selecciona su tipo."
          }

          if (values.gender === "") {
            errores.gender = "Selecciona el género."
          }

          //VALIDACION EDAD
          if (!values.age) {
            errores.age = "Por favor ingresa la edad."
          } else if (values.age < 0 || values.age > 20) {
            errores.age = "Por favor ingresa una edad válida."
          }

          //VALIDACION MENSAJE
          if (!values.description) {
            errores.description = "Por favor cuéntanos más sobre tu huella."
          } else if (values.description.length > 400) {
            errores.description = "Superaste el límite de caracteres: " + (values.description.length - 1)
          }

          if (imag.length < 3) {
            errores.images = "Por favor selecciona 3 imágenes."
          }

          return errores;
        }}

        onSubmit={async (values, { resetForm }) => {

          Swal.fire({
            title: `¿Estás seguro de querer agregar a ${values.name} a tus huellas?`,
            showDenyButton: true,
            confirmButtonText: 'Confirmar',
            denyButtonText: `Cancelar`,
          }).then(
            async (result) => {
              if (result.isConfirmed) {
                const data = new FormData();
                let file = [];
                for (let i = 0; i < imag.length; i++) {
                  data.append("file", imag[i]);
                  data.append("upload_preset", "koafybza");
                  const res = await fetch("https://api.cloudinary.com/v1_1/djasy7hxk/image/upload",
                    {
                      method: "POST",
                      body: data
                    })
                  let fileURL = await res.json()
                  file.push(fileURL.secure_url)
                }

                dispatch(postPets({
                  name: values.name,
                  type: values.type,
                  images: file,
                  age: values.age,
                  gender: values.gender,
                  description: values.description,
                  foundation: foundation.id
                }))

                Swal.fire({title: `¡${values.name} ha sido agregada con éxito!', text:'Podrás visualizarl@ en Mis huellas y en la sección Adoptar.`, icon:'success'})
                resetForm();

              }
            })
        }}
      >
        {({ errors }) => (

          <Form>

            {/* TITULO */}
            <div className={styles.postPetForm}>
              <div className={styles.titles}>
                <h1 className={styles.postPetTitle} >Agregar huella </h1>
              </div>


              {/* NOMBRE */}
              <div className={styles.inputNameContainer}>
                <div className="w-100 text-dark">
                  <Field className={`form-control opacity-50, ${styles.inputs}`} type="text" name="name" id="name" placeholder='Nombre' />
                  <ErrorMessage name="name" component={() => (<div className={styles.error}>{errors.name}</div>)}></ErrorMessage>
                </div>
              </div>



              {/* CHECKBOX CONTAINER*/}
              <div className={styles.secondContainer}>

                {/* - 1 - EDAD */}
                <div className={styles.firstCheckboxContainer}>

                  <div className={styles.edadContainer}>
                    <label className={styles.checkboxLabels} htmlFor="age">Edad</label>
                    <Field className="form-control w-50 h-25 opacity-50" type="text" name="age" id="age" placeholder='5 meses' />
                  </div>

                  <div className={styles.errorBox}>
                    <ErrorMessage name="age" component={() => (<div className={styles.error}>{errors.age}</div>)}></ErrorMessage>
                  </div>

                </div>

                {/* - 2 - TIPO */}
                <div className={styles.firstCheckboxContainer}>
                  {/* <label>Tipo de huella</label> */}

                  <div className={styles.checkbox}>
                    <label className={styles.checkboxLabels} htmlFor="dog">Perro</label>
                    <Field className={`form-check-input, ${styles.inputs}`} type="radio" name="type" id="dog" value="Perro" />
                    <label className={styles.checkboxLabels} htmlFor="cat">Gato</label>
                    <Field className={`form-check-input, ${styles.inputs}`} type="radio" name="type" id="cat" value="Gato" />
                  </div>

                  <div className={styles.errorBox}>
                    <ErrorMessage name="type" component={() => (<div className={styles.error}>{errors.type}</div>)}></ErrorMessage>
                  </div>

                </div>


                {/* -3 - GENERO */}
                <div className={styles.secondCheckboxContainer}>
                  {/* <label>Sexo</label> */}

                  <div className={styles.checkbox}>
                    <label className={styles.checkboxLabels} htmlFor="gender">Macho</label>
                    <Field className="form-check-input mx-3" type="radio" name="gender" id="male" value="Macho" />
                    <label className={styles.checkboxLabels} htmlFor="gender">Hembra</label>
                    <Field className="form-check-input mx-3" type="radio" name="gender" id="female" value="Hembra" />
                  </div>

                  <div className={styles.errorBox}>
                    <ErrorMessage name="gender" component={() => (<div className={styles.error}>{errors.gender}</div>)}></ErrorMessage>
                  </div>
                </div>


              </div>


              {/* ERRORS CONTAINER */}

              {/* <div className={styles.errorContainer}> */}
              {/* <ErrorMessage name="age" component={() => (<div className={styles.error}>{errors.age}</div>)}></ErrorMessage> */}
              {/* <ErrorMessage name="type" component={() => (<div className={styles.error}>{errors.type}</div>)}></ErrorMessage> */}
              {/* <ErrorMessage name="gender" component={() => (<div className={styles.error}>{errors.gender}</div>)}></ErrorMessage> */}


              <div className={styles.textarea}>
                <label htmlFor="textarea" className="form-label">
                  Cuentanos su historia...
                </label>
                <Field
                  as="textarea"
                  className={`form-control opacity-50, ${styles.inputs}`}
                  id="description"
                  name="description"
                  rows="4"
                  placeholder="Mensaje..."
                ></Field>
                <ErrorMessage name="description" component={() => (<div className={styles.error}>{errors.description}</div>)}></ErrorMessage>
              </div>


              <div>

                <div className={styles.imageTitleContainer}>
                  {/* <label>Imagen 1</label> */}
                  {/* <label>Imagen 2</label> */}
                  {/* <label>Imagen 3</label> */}
                  <label className={styles.error}>
                    <ErrorMessage name="images" component={() => (<div className={styles.error}>{errors.images}</div>)}></ErrorMessage>
                  </label>
                </div>


                <div className={styles.imageContainer}>

                  <input name="image1" type="File" id="file" className="form-control opacity-75"
                    onChange={(e) => uploadImage(e)} />

                  <input name="image2" type="File" id="file" className="form-control opacity-75"
                    onChange={(e) => uploadImage(e)} />

                  <input name="image3" type="File" id="file" className="form-control opacity-75"
                    onChange={(e) => uploadImage(e)} />
                </div>

              </div>


              <div className={styles.btnContainer}>
                <button className={styles.btnPost}>Enviar</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>



    </div >
  );
}
