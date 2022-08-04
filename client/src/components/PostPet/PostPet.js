import React, { useState } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import styles from "./PostPet.module.css";
import { useDispatch } from "react-redux";
import { postPets } from "../../redux/actions";

export default function PostPet() {
  var date = Date();

  const [imag, setImag] = useState("");

  const dispatch = useDispatch()
  const uploadImage = (e) => {
    setImag(e.target.files[0, 1, 2])
  }


  return (

    <div className={styles.postPetsContainer}>
      <Formik
        initialValues={{
          name: "",
          images: `${imag}`,
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
            errores.type = "Selecciona el sexo de la mascota"
          }

          //VALIDACION EDAD
          if (!values.age) {
            errores.age = "Por favor ingresa la edad"
          } else if (values.age < 0 || values.age > 20) {
            errores.age = "Por favor ingresa una edad valida para tu mascota"
          }

          //VALIDACION MENSAJE
          if (!values.description) {
            errores.description = "Por favor cuentanos mas sobre la mascota"
          } else if (values.description.length > 400) {
            errores.description = "Superaste el limite de caracteres: " + (values.description.length - 1)
          }

          if (values.images.length < 3) {
            errores.images = "Por favor, selecciona al menos 3 imagenes (manten presionado ctrl mientras seleccionas)"
          }

          return errores;
        }}

        onSubmit={async (values, { resetForm }) => {

          const data = new FormData();
          data.append("file", imag);
          data.append("upload_preset", "koafybza");
          const res = await fetch("https://api.cloudinary.com/v1_1/djasy7hxk/image/upload",
            {
              method: "POST",
              body: data
            })
          let file = await res.json()

          console.log({
            images: [file.secure_url],
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
            <div className={styles.postPetForm}>
              <div className={styles.titles}>
                <h1 className={styles.postPetTitle} >Mis Huellas</h1>
              </div>

              <div className={styles.inputNameContainer}>

                <div className="w-75 text-dark">
                  <label htmlFor="name">Nombre</label>
                  <Field
                    className="form-control opacity-50"
                    type="text"
                    name="name"
                    id="name"
                  />
                  <ErrorMessage name="name" component={() => (<div className={styles.error}>{errors.name}</div>)}></ErrorMessage>
                </div>

              </div>

              <div className={styles.inputCheckContainer}>

                <div className={styles.checks}>
                  <label>Tipo de huella</label>

                  <div>
                    <label htmlFor="dog">Perro</label>
                    <Field
                      className="form-check-input mx-3"
                      type="radio"
                      name="type"
                      id="dog"
                      value="Perro"
                    />
                    <label htmlFor="gender">Gato</label>
                    <Field
                      className="form-check-input mx-3"
                      type="radio"
                      name="type"
                      id="cat"
                      value="Gato"
                    />
                    <ErrorMessage name="type" component={() => (<div className={styles.error}>{errors.type}</div>)}></ErrorMessage>
                  </div>

                </div>


                <div className={styles.edad}>
                  <label htmlFor="age">Edad</label>
                  <Field
                    className="form-control w-50 opacity-50"
                    type="number"
                    name="age"
                    id="age"
                  />
                  <ErrorMessage name="age" component={() => (<div className={styles.error}>{errors.age}</div>)}></ErrorMessage>
                </div>
                <div className={styles.sexo}>
                  <label>Sexo</label>
                  <div>
                    <label htmlFor="gender">Macho</label>
                    <Field
                      className="form-check-input mx-3"
                      type="radio"
                      name="gender"

                      value="Macho"
                    />
                    <label htmlFor="gender">Hembra</label>
                    <Field
                      className="form-check-input mx-3"
                      type="radio"
                      name="gender"

                      value="Hembra"
                    />
                    <ErrorMessage name="type" component={() => (<div className={styles.error}>{errors.type}</div>)}></ErrorMessage>
                  </div>
                </div>
              </div>

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

              <div className={styles.image}>
                <label>Imagenes</label>
                <input multiple className="form-control opacity-75" type="File" id="file" onChange={(e) => uploadImage(e)} />
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
