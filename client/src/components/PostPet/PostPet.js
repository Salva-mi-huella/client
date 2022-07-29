import React, { useState } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import styles from "./PostPet.module.css";

export default function PostPet() {
var date = Date();

  const [imag, setImag ] = useState("");


  // Esta info agregarla al submit y con el onchange de la imagen solo modificar linea 15
  const uploadImage = async (e) =>{
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]); 
    data.append("upload_preset", "koafybza");
    const res = await fetch ("https://api.cloudinary.com/v1_1/djasy7hxk/image/upload",
    {
      method: "POST",
      body: data
    })
    let file = await res.json()
    setImag(file.secure_url);

  }
  

  return (
    <div className={styles.container}>
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
          
          console.log(values)
          //VALIDACION NOMBRE
          if (!values.name) {
            errores.name = "Por favor ingrese un nombre";
          } else if(values.name.length < 3){
            errores.name = "El nombre debe incluir mas de 3 caracteres";
          }else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
            errores.name = "El nombre solo puede contener letras y espacios";
          }

          //VALIDACION RADIO
          if(values.type === ""){
            errores.type="Selecciona el sexo de la mascota"
          }

          //VALIDACION EDAD
          if(!values.age){
            errores.age="Por favor ingresa la edad"
          }else if(values.age < 0){
            errores.age="Por favor ingresa una edad valida para tu mascota"
          }

          //VALIDACION MENSAJE
          if(!values.description){
            errores.description="Por favor cuentanos mas sobre la mascota"
          }

          return errores;
        }}

        onSubmit={(values, { resetForm }) => {
          // setSubmittedForm(true)
          // setTimeout(()=> setSubmittedForm(false),5000)
          resetForm();
        }}
      >
        {({errors}) => (
          <Form>
            <div className={styles.formu}>
              <div className={styles.titles}>
                <h1>Mis Huellas</h1>
              </div>

              <div className={styles.groupinp}>
                <div className="w-75 text-dark">
                  <label htmlFor="name">Nombre</label>
                  <Field
                    className="form-control opacity-50"
                    type="text"
                    name="name"
                    id="name"
                  />
                  <ErrorMessage name="name" component={()=> (<div className={styles.error}>{errors.name}</div>)}></ErrorMessage>
                </div>
              </div>

              <div className={styles.group2}>
                <div className={styles.checks}>
                  <label>Tipo de huella</label>
                  <div>
                    <label htmlFor="type">Perro</label>
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
                    <ErrorMessage name="type" component={()=> (<div className={styles.error}>{errors.type}</div>)}></ErrorMessage>
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
                  <ErrorMessage name="age" component={()=> (<div className={styles.error}>{errors.age}</div>)}></ErrorMessage>
                </div>
                <div className={styles.sexo}>
                  <label htmlFor="gender">Sexo</label>
                  <Field
                    as="select"
                    className="form-control opacity-50"
                    name="gender"
                    id="gender"
                  >
                    <option value="Macho" selected>Macho</option>
                    <option value="Hembra">Hembra</option>
                  </Field>
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
                <ErrorMessage name="description" component={()=> (<div className={styles.error}>{errors.description}</div>)}></ErrorMessage>
              </div>

              <div>
                <label>Imagenes</label>
                <input className="form-control opacity-75" type="File" id="file" onChange={(e) => uploadImage(e)}/>
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
