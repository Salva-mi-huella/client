import styles from "./Form.module.css";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useDispatch  } from "react-redux";
import { postMessage } from "../../../redux/actions";
import Swal from 'sweetalert2'

export default function MessageForm({foundationId}) {


const dispatch = useDispatch();

  
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          textarea:"",
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

          //VALIDACION CORREO
          if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
            errores.email =
            "Por favor escribe un correo válido ej:correo@correo.com";
          }
          
          //VALIDACION MENSAJE
          if(!values.textarea){
            errores.textarea="Por favor escríbenos porque te gustaría adoptar"
          } else if (values.textarea.length > 400) errores.textarea="Máximo 400 caracteres";

          
          return errores;
        }}
        onSubmit={(values, { resetForm }) => {  
          
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Mensaje enviado con éxito',
            showConfirmButton: false,
            timer: 2000
          })
          dispatch(postMessage({
         name: values.name, email: values.email, message: values.textarea, foundation: foundationId
          }))
          resetForm();
        }}
      >
        {({errors}) => (
          <Form>
            <div className={styles.title}>
              <h1 className={styles.titletext}>¡Dejanos un mensaje!</h1>
            </div>

            <div className={styles.groupinp}>
              <div className={styles.inp}>
                <label htmlFor="name">Nombre</label>
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
                <label htmlFor="email">Email</label>
                <Field sx={{color: 'white'}}
                  className={`form-control ${styles.inputsForm}`}
                  type="email"
                  name="email"
                  id="email"
                />
                <ErrorMessage name="email" component={()=> (<div className={styles.error}>{errors.email}</div>)}></ErrorMessage>
              </div>

            </div>

            <div className={styles.textarea}>
              <label htmlFor="Textarea" className="form-label">
                ¿Qué te gustaría saber de nosotros?
              </label>
              <Field as="textarea" className={`form-control ${styles.inputsForm}`} id="textarea" name="textarea" rows="4" placeholder="Mensaje...">
              </Field>
              <ErrorMessage name="textarea" component={()=> (<div className={styles.error}>{errors.textarea}</div>)}></ErrorMessage>
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
