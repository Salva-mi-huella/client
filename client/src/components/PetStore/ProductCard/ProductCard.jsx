import React from "react";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions";
import styles from '../ProductCard/ProductCard.module.css';

export default function Card(props) {

    const { isAuthenticated, loginWithRedirect } = useAuth0();
    const dispatch = useDispatch();

    function handleAddToCart() {
        if (isAuthenticated) {
            dispatch(addToCart(props.id))
            Swal.fire({
                position: 'top-start',
                icon: 'success',
                title: 'Producto agregado al carrito',
                showConfirmButton: false,
                timer: 1000
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
            
                    <div className={styles.front}>
                        <div>
                            <img src={props.images} alt={'Failed loading '} />
                            <h3>{props.name}</h3>
                        </div>
                    <div className={styles.detail}>
                        <span className={styles.pawsIcon}><i class="fa-solid fa-paw"></i></span>
                        <h5>{props.points}</h5>
                    </div>
                    </div>


                {/* BACK */}
                <div className={styles.back}>
                        <h4>{props.name}</h4>
                    <p>
                        {props.desc}
                    </p>
                    <div className={styles.containerBtn}>
                    <button className={styles.button} onClick={handleAddToCart}>
                            Agregar
                        </button>
                    </div>
                </div>

            </div>


        </div >
    )

}