import styles from "./Form.module.css";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useSelector, useDispatch  } from "react-redux";
import { useEffect, useState, useRef} from "react";
import { getAllPets, getFoundations, postRequestAdopt, getUserByEmail } from "../../../redux/actions";
import Swal from 'sweetalert2'
import { useAuth0 } from '@auth0/auth0-react';
import emailjs from 'emailjs-com';


export default function Formulario({setModal, setCheck, check}) {

const [submittedForm, , setSubmittedForm] = useState(false);

const {isAuthenticated, user, loginWithRedirect} = useAuth0();



const dispatch = useDispatch();
const petDetail = useSelector(state => state.petDetail)
const pets = useSelector(state => state.allPets)
const foundations = useSelector(state => state.foundations)
const userDetail = useSelector(state => state.user)

useEffect(() => {
  dispatch(getAllPets())
  dispatch(getFoundations())
  if (isAuthenticated && user.email) {
    dispatch(getUserByEmail(user?.email))
  }
}, [dispatch]);


const [foundationSelected, setFoundationSelected] = useState(true)

const handleOnClick = () => {
  setModal(true);
}

const handleOnCheck = () => {
  setCheck(false);
}

const handleOnChange = (e) => {
  setFoundationSelected(false)
}

const ref = useRef(null)

return (
    <div className={styles.container}>
       <p>Completá con tus datos el siguiente formulario para continuar con el proceso de adopción.</p>
      <Formik
        innerRef={ref}
        initialValues={{
          name: userDetail?.name?.length >0 ? userDetail.name : "",
          lastname: userDetail?.lastname?.length >0 ? userDetail.lastname : "",
          email: userDetail?.email ? userDetail.email : "",
          phone: userDetail?.telephone_number ? userDetail.telephone_number : "",
          age: "",
          pet: petDetail?.id ? petDetail.id : foundations[0]?.pets[0]?.id,
          foundation: petDetail?.foundationId ? petDetail.foundationId : 1,
          textarea:"",
          checkbox:"",
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
            errores.lastname = "El apellido debe incluir más de 3 caracteres"}
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
          } else if(values.age > 80) errores.age="Para adoptar debes ser menor de 80 años"
          
          //VALIDACION MENSAJE
          if(!values.textarea){
            errores.textarea="Por favor cuéntanos porque te gustaría adoptar"
          }
          
          //VALIDACION CHECKBOX
          if(values.checkbox !== true){
            errores.checkbox="Debes aceptar el acuerdo de adopción para continuar"
          }
          
          return errores;
        }}
        
        onSubmit={(values, { resetForm }) => {  
          
          const petSelected = pets.find(p => p.id == values.pet)?.name
          const foundationSelected = foundations.find(f => f.id == values.foundation)?.name

          
          values.petSelected=petSelected
          values.foundationSelected=foundationSelected
          
          
          
          // Swal.fire({
            //   position: 'center',
            //   icon: 'success',
            //   title: 'Enviado con éxito',
            //   showConfirmButton: false,
            //   timer: 2000
            // })
            
          Swal.fire({
            title: `¿Estás seguro de querer enviar el formulario?`,
            text: !isAuthenticated && '¡Registrate antes para sumar huellitas en caso de que concrete la adopción!',
            showClass: {
              popup: 'swal2-show',
              backdrop: 'swal2-backdrop-show',
              icon: 'swal2-icon-show'
            },
            color: 'purple',
            padding: '2rem',
            width: '40rem',
            heigth: '60rem',
            
            showDenyButton: !isAuthenticated && true,
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: 'Confirmar',
            cancelButtonText: `Cancelar`,
            denyButtonText: `Registrarse`,
            
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                text: 'Ahora podrás visualizarla desde tu perfil',
                title: 'Tu solicitud ha sido enviada con éxito',
                showConfirmButton: false,
                timer: 2000
              })
              dispatch(postRequestAdopt({
                age: parseInt(values.age),  name: values.name, lastname: values.lastname, email:values.email, phone:values.phone, textarea: values.textarea, checkbox:values.checkbox, 
                pet: values.pet, foundation: values.foundation, user: userDetail.id
              }))

              emailjs.send('service_q0212bn', 'template_zja2jzv', values, 'Aq8UicE7cYgpn5IXB')
              .then((result) => {
                console.log(result);
              }, (error) => {
                console.log(error.text);
              });

               emailjs.send('service_h2hpe6c', 'template_bmnys4i', values, 'VYEG6lTjXQeDRaF3J')
              .then((result) => {
                console.log(result);
              }, (error) => {
                console.log(error.text);
              });
              
              resetForm();
            } else if (result.isDenied) {
              loginWithRedirect()
            } 
          })

          // dispatch(postRequestAdopt({
            //   age: parseInt(values.age),  name: values.name, lastname: values.lastname, email:values.email, phone:values.phone, textarea: values.textarea, checkbox:values.checkbox, 
            //   pet: values.pet, foundation: values.foundation, user: userDetail.id
            // }))
            
          }}
          >
        {({errors}) => (
          <Form>

            <div className={styles.groupinp}>
              <div className={styles.inp}>
                <label htmlFor="name"></label>
                <Field 
                  // className="form-control opacity-25"
                  className={`${styles.inputsForm}` }
                  type="text"
                  name="name"
                  id="name"   
                  placeholder="Nombre"              
                /> 
                <ErrorMessage name="name" component={()=> (<div className={styles.error}>{errors.name}</div>)}></ErrorMessage>
              </div>

              <div className={styles.inp}>
                <Field
                  className={`${styles.inputsForm}`}
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Apellido"              
                  />
                <ErrorMessage name="lastname" component={()=> (<div className={styles.error}>{errors.lastname}</div>)}></ErrorMessage>
              </div>
            </div>

            <div className={styles.groupinp}>
              <div className={styles.inp}>
                <Field sx={{color: 'white'}}
                  className={`  ${styles.inputsForm}`}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"              

                  /> 
                  <ErrorMessage name="email" component={()=> (<div className={styles.error}>{errors.email}</div>)}></ErrorMessage>
              </div>

              <div className={styles.inp}>
                <Field
                  className={`  ${styles.inputsForm}`}
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Teléfono"              

                /> 
                <ErrorMessage name="phone" component={()=> (<div className={styles.error}>{errors.phone}</div>)}></ErrorMessage>
              </div>
            </div>

            <div className={styles.groupinp3}>
              <div className={styles.age}>
                <Field
                  className={`  w-50 ${styles.inputsForm}`}
                  type="number"
                  name="age"
                  id="age"    
                  placeholder="Edad"              

                  />
                <ErrorMessage name="age" component={()=> (<div className={styles.error}>{errors.age}</div>)}></ErrorMessage>
              </div>

              <div className={styles.pet}>
                <label htmlFor="pet"></label>
                <Field defaultValue={foundationSelected ? (petDetail.id ? petDetail.id : foundations[0]?.pets[0]?.id) : 'Elegí tu huella'} as="select" className={`w-75 ${styles.inputsForm}`} name="pet" id="pet">
                  {/* {pets && pets.map((pet) => ref.current?.values?.foundation == pet.foundationId?(<option  value={pet.id}>{pet.name}</option>):null)} */}
                  <option>Elegí tu huella</option>
                  {foundations && foundations.filter(f => f.id == ref.current?.values?.foundation).map((foundation) =>
                   foundation.pets.map((pet) => <option value={pet.id}>{pet.name}</option>))}
                </Field>
              </div>

              <div className={styles.foundation}>
                <label htmlFor="foundation"></label>
                <Field as="select" onClick={handleOnChange} className={` w-100 ${styles.inputsForm}`} type="text" name="foundation" id="foundation" defaultValue={petDetail.foundationId ? petDetail.foundationId : foundations[0]?.id}>
                {/* {petDetail.foundation && petDetail.foundation.name && <option value={petDetail.foundation.id}>{petDetail.foundation.name}</option>} */}
                  {/* {foundations && foundations.filter(f => f.id !== petDetail.foundationId).map((foundation)=> (<option value={foundation.id}>{foundation.name}</option>))} */}
                  {foundations && foundations.map((foundation)=> (<option onClick={handleOnChange} value={foundation.id}>{foundation.name}</option>))}
                </Field>                                  
              </div>
            </div>

            <div className={styles.textarea}>
              <label htmlFor="Textarea" className="form-label">
                ¿ Porque quieres adoptar ?
              </label>
              <Field as="textarea" className={`${styles.inputsForm}`} id="textarea" name="textarea" rows="4" placeholder="Mensaje...">
              </Field>
              <ErrorMessage name="textarea" component={()=> (<div className={styles.error}>{errors.textarea}</div>)}></ErrorMessage>
            </div>

            <div className={styles.check}>
              {check ? 
              <Field type="checkbox" onClick={handleOnCheck} checked="true" value="true" className="form-check-input me-4" name="checkbox"></Field> : 
              <Field type="checkbox" className="form-check-input me-4" name="checkbox"></Field>}
              <label>
                He leído y acepto el {" "}
                <button onClick={handleOnClick} type="button" >acuerdo de adopción.</button>
              </label>
            </div>
            <div className={styles.checkerror}>
              <ErrorMessage name="checkbox" component={()=> (<div className={styles.error}>{errors.checkbox}</div>)}></ErrorMessage>
            </div>

            <div className={styles.boton}>
              <button  className={styles.send}>ENVIAR</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
