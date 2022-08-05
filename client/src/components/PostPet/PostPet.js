import React, { useState } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import styles from "./PostPet.module.css";
import { useDispatch } from "react-redux";

import { postPets } from "../../redux/actions";

export default function PostPet() {

  const dispatch = useDispatch()
  var date = Date();

  const [imag, setImag] = useState([]);


  const uploadImage = (e) => {
    // setImag(imag)
    // setImag(e.target.files[0])
    //[e.target.name]: e.target.files[0]

    setImag({ ...imag, [e.target.name]: e.target.files[0] })
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
            errores.name = "Por favor ingrese un nombre";
          } else if (values.name.length < 3) {
            errores.name = "El nombre debe incluir mas de 3 caracteres";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
            errores.name = "El nombre solo puede contener letras y espacios";
          }

          //VALIDACION RADIO
          if (values.type === "") {
            errores.type = "Selecciona su tipo"
          }

          if (values.gender === "") {
            errores.gender = "Selecciona el genero"
          }

          //VALIDACION EDAD
          if (!values.age) {
            errores.age = "Por favor ingresa la edad"
          } else if (values.age < 0 || values.age > 20) {
            errores.age = "Por favor ingresa una edad valida"
          }

          //VALIDACION MENSAJE
          if (!values.description) {
            errores.description = "Por favor cuentanos mas sobre la huella"
          } else if (values.description.length > 400) {
            errores.description = "Superaste el limite de caracteres: " + (values.description.length - 1)
          }

          // if (!values.images) {
          //   errores.images = "Por favor, selecciona al menos 3 imagenes (manten presionado ctrl mientras seleccionas)"
          // }

          return errores;
        }}

        onSubmit={async (values, { resetForm }) => {

          const data = new FormData();
          data.append(`file`, imag);
          data.append("upload_preset", "koafybza");
          const res = await fetch("https://api.cloudinary.com/v1_1/djasy7hxk/image/upload",
            {
              method: "POST",
              body: data
            })
          let file = await res.json()
          console.log({
            images: imag,
            name: values.name,
            age: values.age,
            type: values.type,
            gender: values.gender,
            description: values.description
          })

          // dispatch(postPets({
          //   images: [file.secure_url],
          //   name: values.name,
          //   age: values.age,
          //   type: values.type,
          //   gender: values.gender,
          //   description: values.description
          // }))

          resetForm();
        }}
      >
        {({ errors }) => (

          <Form>

            {/* TITULO */}
            <div className={styles.postPetForm}>
              <div className={styles.titles}>
                <h1 className={styles.postPetTitle} > Mis Huellas </h1>
              </div>


              {/* NOMBRE */}
              <div className={styles.inputNameContainer}>
                <div className="w-100 text-dark">
                  <label htmlFor="name">Nombre</label>
                  <Field className="form-control opacity-50" type="text" name="name" id="name" />
                  <ErrorMessage name="name" component={() => (<div className={styles.error}>{errors.name}</div>)}></ErrorMessage>
                </div>
              </div>



              {/* CHECKBOX CONTAINER*/}
              <div className={styles.secondContainer}>

                {/* - 1 - EDAD */}
                <div className={styles.firstCheckboxContainer}>

                  <div className={styles.edadContainer}>
                    <label className={styles.checkboxLabels} htmlFor="age">Edad</label>
                    <Field className="form-control w-25 h-25 opacity-50" type="number" name="age" id="age" />
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
                    <Field className="form-check-input mx-3" type="radio" name="type" id="dog" value="Perro" />
                    <label className={styles.checkboxLabels} htmlFor="cat">Gato</label>
                    <Field className="form-check-input mx-3" type="radio" name="type" id="cat" value="Gato" />
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
                  className="form-control opacity-50"
                  id="description"
                  name="description"
                  rows="4"
                  placeholder="Mensaje..."
                ></Field>
                <ErrorMessage name="description" component={() => (<div className={styles.error}>{errors.description}</div>)}></ErrorMessage>
              </div>

              <div className={styles.imageTitleContainer}>
                <label>Imagen 1</label>
                <label>Imagen 2</label>
                <label>Imagen 3</label>
              </div>

              <div className={styles.imageContainer}>

                <input name="image1" type="File" id="file" className="form-control opacity-75 w-50"
                  onChange={(e) => uploadImage(e)} />

                <input name="image2" type="File" id="file" className="form-control opacity-75 w-50"
                  onChange={(e) => uploadImage(e)} />

                <input name="image3" type="File" id="file" className="form-control opacity-75 w-50"
                  onChange={(e) => uploadImage(e)} />

                <ErrorMessage name="images" component={() => (<div className={styles.error}>{errors.images}</div>)}></ErrorMessage>
              </div>

              <div className={styles.wrap}>
                <button className={styles.bot}>Enviar</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>



    </div>
  );
}
