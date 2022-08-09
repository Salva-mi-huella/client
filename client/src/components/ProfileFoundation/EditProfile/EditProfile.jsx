import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { updateFoundation, getFoundationDetail } from "../../../redux/actions";
import Swal from "sweetalert2";
import styles from "./EditDataForm.module.css";

export default function EditProfile({ foundation }) {
  const dispatch = useDispatch();
  let history = useHistory();

const [input, setInput] = useState("")

function handleChange(e) {
        setInput(({ image: e.target.files[0] }))
}

  return (
    <div>
      <Formik
        initialValues={{
          name: foundation?.name ? foundation.name : "",
          description: foundation?.description ? foundation.description : "",
          images: foundation?.images ? foundation.images : "",
          email: foundation?.email ? foundation.email : "",
          cbu: foundation?.CBU ? foundation.CBU : "",
          bank: foundation?.bank ? foundation.bank : "",
          alias: foundation?.alias ? foundation.alias : "",
          address: foundation?.address ? foundation.address : "",
          city: foundation?.city ? foundation.city : "",
          telephone_number: foundation?.telephone_number
            ? foundation.telephone_number
            : "",
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

          //VALIDACION CBU
          if (!values.cbu) {
            errores.cbu = "Por favor ingresa el cbu de la fundacion";
          } else if (values.cbu.length < 22) {
            errores.cbu =
              "Por favor ingresa un cbu valido (Debe contener 22 digitos)";
          }

          //VALIDACION BANCO
          if (!values.bank) {
            errores.bank = "Por favor escribe el banco";
          } else if (values.bank.length < 5) {
            errores.description = "Por favor ingresa un banco valido ";
          }

          //VALIDACION ALIAS
          if (!values.alias) {
            errores.alias = "Por favor escribe el nickname de la fundacion";
          } else if (values.alias.length < 5) {
            errores.description = "Por favor ingresa un alias valido ";
          }

          //VALIDACION DIRECCION
          if (!values.address) {
            errores.address =
              "Por favor escribe la direccion donde se encuentra ubicada la fundacion";
          }

          //VALIDACION CIUDAD
          if (!values.city) {
            errores.city =
              "Por favor escribe la ciudad donde se encuentra ubicada la fundacion";
          }

          //VALIDACION TELEFONO
          if (!values.telephone_number) {
            errores.telephone_number =
              "Por favor escribe un telefono para la fundacion";
          } else if (values.telephone_number.length < 10) {
            errores.telephone_number =
              "Por favor ingrese un telefono valido (10 digitos)";
          }

          return errores;
        }}
        onSubmit={async (values) => {
          Swal.fire({
            title: "Quieres actualizar tus datos?",
            showDenyButton: true,
            confirmButtonText: "Si, postear",
            denyButtonText: `No, cancelar`,
          }).then(async (result) => {
            if (result.isConfirmed) {
              const data = new FormData();
                data.append("file", input.image);
                data.append("upload_preset", "koafybza");
                const res = await fetch(
                  "https://api.cloudinary.com/v1_1/djasy7hxk/image/upload",
                  {
                    method: "POST",
                    body: data,
                  }
                );
                let file = await res.json();

                dispatch(updateFoundation({
                      name: values.name,
                      description: values.description,
                      images: [file.secure_url],
                      email: values.email,
                      cbu: values.cbu,
                      bank: values.bank,
                      alias: values.alias,
                      address: values.address,
                      city: values.city,
                      telephone_number: values.telephone_number
                },foundation.id))                
                
                Swal.fire("Perfil Actualizado!", "", "success");

                setTimeout(() => {
                  history.push("/perfil")                  
                }, 3000);
            }
          });
        }}
      >

        {({ errors }) => (
          <Form className={styles.form}>
            <div className={styles.div1}>
              <div className={styles.imgcontainer}>
                <img
                  className={styles.btnUploadImage}
                  src={foundation?.images}
                ></img>
                <input type="file" name="images" id="images" onChange={handleChange}></input>
              </div>
              <div className={styles.description}>
                {/* <label >Descripcion:</label> */}
                <Field
                  as="textarea"
                  name="description"
                  id="description"
                  className={styles.inputDescription}
                  placeholder="Descripcion o historia de la fundacion"
                ></Field>
              </div>
            </div>

            <div className={styles.div2}>
              <h1>Mis datos</h1>

              {/* NOMBRE */}
              <div className={styles.groupinputs}>
                <div className="w-100 text-dark mt-3">
                  <Field
                    className="form-control opacity-50"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nombre"
                  />
                  <ErrorMessage
                    name="name"
                    component={() => (
                      <div className={styles.error}>{errors.name}</div>
                    )}
                  ></ErrorMessage>
                </div>
                {/* EMAIL */}
                <div className="w-100 text-dark mt-3">
                  <Field
                    className="form-control opacity-50"
                    type="text"
                    name="email"
                    id="email"
                    disabled
                  />
                </div>
                {/* CBU */}
                <div className="w-100 text-dark mt-3">
                  <Field
                    className="form-control opacity-50"
                    type="text"
                    name="cbu"
                    id="cbu"
                    placeholder="Cbu"
                  />
                  <ErrorMessage
                    name="cbu"
                    component={() => (
                      <div className={styles.error}>{errors.cbu}</div>
                    )}
                  ></ErrorMessage>
                </div>
                {/* BANCO */}
                <div className="w-100 text-dark mt-3">
                  <Field
                    className="form-control opacity-50"
                    type="text"
                    name="bank"
                    id="bank"
                    placeholder="Banco"
                  />
                  <ErrorMessage
                    name="bank"
                    component={() => (
                      <div className={styles.error}>{errors.bank}</div>
                    )}
                  ></ErrorMessage>
                </div>
                {/* Alias */}
                <div className="w-100 text-dark mt-3">
                  <Field
                    className="form-control opacity-50"
                    type="text"
                    name="alias"
                    id="alias"
                    placeholder="Alias"
                  />
                  <ErrorMessage
                    name="alias"
                    component={() => (
                      <div className={styles.error}>{errors.alias}</div>
                    )}
                  ></ErrorMessage>
                </div>
                {/* BANCO */}
                <div className="w-100 text-dark mt-3">
                  <Field
                    className="form-control opacity-50"
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Direccion"
                  />
                  <ErrorMessage
                    name="address"
                    component={() => (
                      <div className={styles.error}>{errors.address}</div>
                    )}
                  ></ErrorMessage>
                </div>
                {/* CIUDAD */}
                <div className="w-100 text-dark mt-3">
                  <Field
                    className="form-control opacity-50"
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Ciudad"
                  />
                  <ErrorMessage
                    name="city"
                    component={() => (
                      <div className={styles.error}>{errors.city}</div>
                    )}
                  ></ErrorMessage>
                </div>
                {/* TELEFONO */}
                <div className="w-100 text-dark mt-3">
                  <Field
                    className="form-control opacity-50"
                    type="text"
                    name="telephone_number"
                    id="telephone_number"
                    placeholder="Telefono de contacto"
                  />
                  <ErrorMessage
                    name="telephone_number"
                    component={() => (
                      <div className={styles.error}>
                        {errors.telephone_number}
                      </div>
                    )}
                  ></ErrorMessage>
                </div>
              </div>
              <div className={styles.buttoncontainer}>
                <button className={styles.button}>Actualizar</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
