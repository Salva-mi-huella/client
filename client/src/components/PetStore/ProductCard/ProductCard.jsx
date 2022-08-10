import React from "react";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions";

import img from "../../../assets/yellow-paw.png";
import styles from '../ProductCard/ProductCard.module.css';

export default function Card(props) {

    const { isAuthenticated, loginWithRedirect } = useAuth0();
    const dispatch = useDispatch();

    function handleAddToCart() {
        if (isAuthenticated) {
            dispatch(addToCart(props.id))
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Producto agregado al carrito',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Para agregar productos al carrito debes registrarte o iniciar sesión.',
                showDenyButton: true,
                denyButtonText: `Registrarse`,
            }).then((result) => {
                if (result.isDenied) {
                    loginWithRedirect()
                }
            })
        }
    }


    return (
        <div className={styles.body}>


            <div className={styles.card}>

                {/* FRONT */}
                <Link className={styles.linkTag} to={`/tienda/${props.id}`}>
                    <div className={styles.front}>
                        <img src={props.images} alt={'Failed loading '} />
                        <h3>{props.name}</h3>
                    </div>
                </Link>


                {/* BACK */}
                <div className={styles.back}>
                    <Link className={styles.linkTag} to={`/tienda/${props.id}`}>
                        <h4>{props.name}</h4>
                    </Link>
                    <h5>{props.points}</h5>
                    <img className={styles.paws} src={img} alt='points'></img>

                    <div className={styles.link}>
                        <Link className={styles.linkTag} to={`/tienda/${props.id}`}>
                            <a href='Details'> Details </a>
                        </Link>
                        <button className={styles.button} onClick={handleAddToCart}>

                        </button>
                    </div>
                </div>

            </div>


        </div >
    )

}