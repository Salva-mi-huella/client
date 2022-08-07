import React from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductDetail } from '../../redux/actions/index';
import huellita from "../../assets/paw-print.png"
import styles from './ProductDetail.module.css';
import { useAuth0 } from '@auth0/auth0-react';
import Swal from 'sweetalert2';
import { updateUser , getUserByEmail } from '../../redux/actions/index';
import Footer from '../Footer/Footer';


export default function ProductDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();
    //const { user, isAuthenticated } = useAuth0();


    const [numero, setNumero] = React.useState(1)
    const [user, setUser] = React.useState({
        name: "Juliano",
        lastname: "Perez",
        points:10000,

    })


    const product = useSelector (state=> state.productDetail);
    const userInfo = useSelector (state=> state.user);
    
    
    useEffect(() => {
       /*  if(user){
            dispatch(getUserByEmail(user.email));
            const userPoints = userInfo.points
            console.log(userPoints)
        } */
        dispatch(getProductDetail(id));
        window.scrollTo(0, 0);
    }, [dispatch, id]);

    


    const increment = () => {
        if(numero<10){
            setNumero(numero + 1)
        }else{
            Swal.fire({
                title: 'Oops..!',
                text: 'No puedes canjear más de 10 productos.',
                icon: 'error',
                confirmButtonText: 'OK'
              })
        }
    }
    const decrement = () => {
        if(numero>1){
            setNumero(numero - 1)
        }else{
            Swal.fire({
                title: 'Ooops..!',
                text: 'No puedes canjear menos de 1 producto.',
                icon: 'error',
                confirmButtonText: 'OK'
              })
        }
    }

    var canje = () => {
            if(user.points >= product.points*numero){
                Swal.fire({
                    title: 'Espera!',
                    text: "Estás seguro/a de que quieres canjear este producto?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sí, quiero canjear!'
                }).then((result) => {
                    if (result.isConfirmed) {
                    Swal.fire(
                        'Canjeado!',
                        'Canjeaste ' + numero + " " + product.name + " por " + product.points*numero + " puntos exitosamente. Te quedan " + (user.points - product.points*numero) + " huellitas.",
                        'success'
                    )
                        history.push('/tienda');
                        //dispatch(updateUser({points: userInfo.points - product.points*numero}, user.email));
                        setUser({
                        name: user.name,
                            lastname: user.lastname,
                            points: (parseInt(user.points) - (numero*product.price))
                        })
                    }
                })
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No tienes suficientes huellitas!',
                })
                //console.log(userInfo.points, product.points*numero)
        }
    }

    return (
        product && product.name ?
        <div>
        <div className={styles.container}>
            <div className={styles.imgContainer} >
                <img className={styles.image} src={product.images} alt='productImage'></img>
            </div>
            <div className={styles.info}>
                <div className={styles.contenedor}>
                    <h1 className={styles.name}>{product.name}</h1>
                    <p className={styles.description}>{product.description}</p>
                </div>
                <div className={styles.bottom}>
                    <div >
                        <div className={styles.price}>
                            <img className={styles.huellita} alt="foto-huellita" src={huellita}></img>
                            <p className={styles.points}> {product.points*numero}</p>
                        </div>
                    </div>

                    <div className={styles.type}>
                        <p className={styles.pet}>Mascotas</p>
                        <p>{product.type}</p>
                    </div>

                </div>
            </div>
        </div>
                <Footer />
            </div>
        : <div>Loading...</div>
    )
}