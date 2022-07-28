import React from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductDetail } from '../../redux/actions/index';
import huellita from "../../assets/paw-print.png"
import styles from './ProductDetail.module.css';
import { useAuth0 } from '@auth0/auth0-react';


export default function ProductDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();
    const [user, setUser] = useState({
        name: 'Juliano',
        lastname: 'Argumedo',
        points: '10000',
    });

    const [numero, setNumero] = React.useState(1)


    const product = useSelector (state=> state.productDetail);

    useEffect(() => {
        dispatch(getProductDetail(id));

    }, [dispatch, id]);

    const increment = () => {
        if(numero<10){
            setNumero(numero + 1)
        }else{
            alert("No puedes comprar mas de 10")
        }
    }
    const decrement = () => {
        if(numero>1){
            setNumero(numero - 1)
        }else{
            alert("No puedes comprar menos de 1")
        }
    }

    const canje = () => {
        if(user.points>=product.points*numero){
            alert("Hola " + user.name + " cambiaste "+ numero + " " + product.name + " por " + parseInt(numero*product.points) + " huellitas. Te quedan " + (parseInt(user.points) - (numero*product.points)) + " huellitas")
            history.push("/tienda")
            setUser({
                name: user.name,
                lastname: user.lastname,
                points: (parseInt(user.points) - (numero*product.price))
            })
        }else{
            alert("No tienes suficientes huellitas")
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