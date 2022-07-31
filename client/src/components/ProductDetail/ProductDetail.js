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
    }, [dispatch, id]);

    


    const increment = () => {
        if(numero<10){
            setNumero(numero + 1)
        }else{
            Swal.fire({
                title: 'Error!',
                text: 'No puedes comprar mas de 10 productos',
                icon: 'error',
                confirmButtonText: 'Entiendo'
              })
        }
    }
    const decrement = () => {
        if(numero>1){
            setNumero(numero - 1)
        }else{
            Swal.fire({
                title: 'Error!',
                text: 'No puedes comprar menos de 1 producto',
                icon: 'error',
                confirmButtonText: 'Entiendo'
              })
        }
    }

    var canje = () => {
            if(user.points >= product.points*numero){
                Swal.fire({
                    title: 'Espera!',
                    text: "Estas seguro/a de que quieres canjear este producto?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si quiero canjear!'
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
        <div className={styles.container}>
            <div className={styles.imgContainer} >
                <img className={styles.image} src={product.images}></img>
            </div>
            <div className={styles.info}>
                <h1 className={styles.name}>{product.name}</h1>
                <p className={styles.description}>{product.description}</p>
                <div >
                    <div className={styles.price}>
                    <img className={styles.huellita} src={huellita}></img>
                    <p className={styles.points}> {product.points*numero}</p>
                    </div>
                    
                    <div>
                        <p className={styles.unidad}>Huellitas por unidad: {product.points}</p>
                    </div>
                </div>
                <div className={styles.containerButton}>
                    <div className={styles.moreLess}>
                        <button className={styles.button2} onClick={decrement}>-</button>
                        <p className={styles.numero}>{numero}</p>
                        <button className={styles.button2} onClick={increment}>+</button>
                    </div>
                    <div>
                        <button className={styles.button} onClick={canje}>CANJEAR</button>
                    </div>
                </div>
                <div className={styles.type}>
                <p className={styles.pet}>Mascotas</p>
                <p>{product.type}</p>
                </div>
            </div>
        </div>
        : <div>Loading...</div>
    )
}