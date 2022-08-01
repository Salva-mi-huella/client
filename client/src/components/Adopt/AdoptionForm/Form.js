import styles from "./Form.module.css";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useSelector, useDispatch  } from "react-redux";
import { useEffect, useState} from "react";
import { getAllPets, getFoundations, postRequestAdopt, getUserByEmail } from "../../../redux/actions";
import Swal from 'sweetalert2'
import { useAuth0 } from '@auth0/auth0-react';

export default function Formulario() {

const [submittedForm, setSubmittedForm] = useState(false);

const {isAuthenticated, user} = useAuth0();


const dispatch = useDispatch();

useEffect(() => {
  dispatch(getAllPets())
  dispatch(getFoundations())
  if (isAuthenticated) {
    dispatch(getUserByEmail(user.email))
  }
}, [dispatch]);

const petDetail = useSelector(state => state.petDetail)
const pets = useSelector(state => state.allPets)
const foundations = useSelector(state => state.foundations)
const userDetail = useSelector(state => state.user);
  
  
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          email: "",
          phone: "",
          age: "",
          pet: petDetail.id,
          foundation: petDetail.foundationId,
          textarea:"",
          checkbox:false,
          // user: ''
        }}
        validate={(values) => {
          let errores = {};
          
          //VALIDACION NOMBRE
          if (!values.name) {
            errores.name = "Por favor ingrese un nombre";
          } else if(values.name.length < 3){
            errores.name = "El nombre debe incluir más de 3 caracteres";
          }else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
            errores.name = "El nombre solo puede contener letras y espacios";
          }

          //VALIDACION APELLIDO
          if (!values.lastname) {
            errores.lastname = "Por favor ingrese un apellido";
          } else if(values.lastname.length < 3){
            errores.lastname = "El nombre debe incluir más de 3 caracteres"}
            else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastname)) {
            errores.lastname =
              "El apellido solo puede contener letras y espacios";
          }

          //VALIDACION CORREO
          if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
            errores.email =
            "Por favor escribe un correo válido ej:correo@correo.com";
          }

          //VALDIACION TELEFONO
          if(!values.phone){
            errores.phone="Por favor ingresa un teléfono de contacto"
          }else if(values.phone.length < 7 || values.phone.length > 10){
            errores.phone="El teléfono de contacto debe tener 10 digitos"
          }

          //VALIDACION EDAD
          if(!values.age){
            errores.age="Por favor ingresa tu edad"
          }else if(values.age < 18){
            errores.age="Recuerda que para adoptar debes ser mayor de 18 años"
          }
          
          //VALIDACION MENSAJE
          if(!values.textarea){
            errores.textarea="Por favor escríbenos porque te gustaría adoptar"
          }

          //VALIDACION CHECKBOX
          if(values.checkbox !== true){
            errores.checkbox="Debes aceptar nuestros términos y condiciones para continuar con el proceso de adopción"
          }
          
          return errores;
        }}
        onSubmit={(values, { resetForm }) => {  
          console.log(values)
          console.log(userDetail)
          
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Enviado con éxito',
            showConfirmButton: false,
            timer: 1500
          })
          dispatch(postRequestAdopt({
            age: parseInt(values.age),  name: values.name, lastname: values.lastname, email:values.email, phone:values.phone, textarea: values.textarea, checkbox:values.checkbox, 
            pet: values.pet, foundation: values.foundation, user: userDetail.id
          }))
          resetForm();
        }}
      >
        {({errors}) => (
          <Form>
            <div className={styles.title}>
              <h1 className={styles.titletext}>FORMULARIO DE ADOPCIÓN</h1>
            </div>

            <div className={styles.groupinp}>
              <div className={styles.inp}>
                <label htmlFor="name">Nombres</label>
                <Field 
                  // className="form-control opacity-25"
                  className={`form-control ${styles.inputsForm}` }
                  type="text"
                  name="name"
                  id="name"                  
                />
                <ErrorMessage name="name" component={()=> (<div className={styles.error}>{errors.name}</div>)}></ErrorMessage>
              </div>

              <div className={styles.inp}>
                <label htmlFor="lastname">Apellidos</label>
                <Field
                  className={`form-control ${styles.inputsForm}`}
                  type="text"
                  name="lastname"
                  id="lastname"
                />
                <ErrorMessage name="lastname" component={()=> (<div className={styles.error}>{errors.lastname}</div>)}></ErrorMessage>
              </div>
            </div>

            <div className={styles.groupinp}>
              <div className={styles.inp}>
                <label htmlFor="email">Email</label>
                <Field sx={{color: 'white'}}
                  className={`form-control ${styles.inputsForm}`}
                  type="email"
                  name="email"
                  id="email"
                />
                <ErrorMessage name="email" component={()=> (<div className={styles.error}>{errors.email}</div>)}></ErrorMessage>
              </div>

              <div className={styles.inp}>
                <label htmlFor="telefono">Teléfono</label>
                <Field
                  className={`form-control w-75 ${styles.inputsForm}`}
                  type="tel"
                  name="phone"
                  id="phone"
                />
                <ErrorMessage name="phone" component={()=> (<div className={styles.error}>{errors.phone}</div>)}></ErrorMessage>
              </div>
            </div>

            <div className={styles.groupinp3}>
              <div className={styles.inp}>
                <label htmlFor="age">Edad</label>
                <Field
                  className={`form-control w-50 ${styles.inputsForm}`}
                  type="number"
                  name="age"
                  id="age"                  
                />
                <ErrorMessage name="age" component={()=> (<div className={styles.error}>{errors.age}</div>)}></ErrorMessage>
              </div>

              <div className={styles.inp}>
                <label htmlFor="pet">Huella</label>
                <Field as="select"  className={`form-control w-75 ${styles.inputsForm}`} name="pet" id="pet">
                  {petDetail && petDetail.name && <option selected defaultValue={petDetail.name} value={petDetail.id}>{petDetail.name}</option>  }              
                  {pets && pets.map((pet) => petDetail.name !== pet.name?(<option value={pet.id}>{pet.name}</option>):null)}
                </Field>
              </div>

              <div className={styles.inp}>
                <label htmlFor="foundation">Fundación</label>
                <Field as="select"  className={`form-control w-100 ${styles.inputsForm}`} type="text" name="foundation" id="foundation">
                {petDetail.foundation && petDetail.foundation.name && <option selected defaultValue={petDetail.foundation.id} value={petDetail.foundation.id}>{petDetail.foundation.name}</option>}
                  {foundations && foundations.map((foundation)=> (<option value={foundation.id}>{foundation.name}</option>))}
                </Field>                                  
              </div>
            </div>

            <div className={styles.textarea}>
              <label htmlFor="Textarea" className="form-label">
                ¿ Porque quieres adoptar ?
              </label>
              <Field as="textarea" className={`form-control ${styles.inputsForm}`} id="textarea" name="textarea" rows="4" placeholder="Mensaje...">
              </Field>
              <ErrorMessage name="textarea" component={()=> (<div className={styles.error}>{errors.textarea}</div>)}></ErrorMessage>
            </div>

            <div className={styles.check}>
              <Field type="checkbox" className="form-check-input me-4" name="checkbox"></Field>
              <label>
                He leído y acepto todos los {" "}
                <a href="/tienda">términos y condiciones.</a>
              </label>
            </div>
            <div className={styles.checkerror}>
              <ErrorMessage name="checkbox" component={()=> (<div className={styles.error}>{errors.checkbox}</div>)}></ErrorMessage>
            </div>

            <div className={styles.boton}>
              <button className={styles.send}>ENVIAR</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
