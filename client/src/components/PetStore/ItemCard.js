import React from "react";
import styles from "./ItemCard.module.css";
import img from "../../assets/yellow-paw.png";

import { addToCart } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useAuth0 } from '@auth0/auth0-react';
import Swal from 'sweetalert2';


export default function ItemCard(props) {
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
        // <div className={styles.container}>
        //     <div className={styles.imagecard}>
        //         <img src={props.images} alt="Img Card" />
        //     </div>

        //     <div className={styles.productname}>
        //     <h4>{props.name}</h4>
        //     </div>

        //     <div className={styles.detail}>
        //         <h4>{props.points}</h4>
        //         <img className={styles.paws} src={img}></img>
        //     </div>

        //     <div className={styles.canje}>
        //         <button onClick={()=>dispatch(addToCart(props.id))} className="btn btn-dark">AGREGAR</button>
        //     </div>
        // </div>

        <Card
            sx={{
                width: '21vw',
                height: '23vw',
                backgroundColor: 'transparent',
                marginBottom: 5
            }} >
            <Link to={`/tienda/${props.id}`}>
                <CardMedia
                    component="img"
                    height="200"
                    width="400"
                    image={props.images}
                    alt="Paella dish"
                />
            </Link>
            <CardContent sx={{ backgroundColor: 'transparent' }}>
                <Typography sx={{ color: 'rgb(78, 14, 104)' }} variant="body2" color="text.secondary">
                    <h4>{props.name}</h4>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <div className={styles.detail} >
                    <div>
                        <h4>{props.points}</h4>
                        <img className={styles.paws} src={img} alt='points'></img>
                    </div>
                    <IconButton onClick={handleAddToCart} aria-label="add to favorites">
                        <AddShoppingCartIcon sx={{ color: 'rgb(255, 230, 0)' }} />
                    </IconButton>
                </div>
            </CardActions>
        </Card>
    );
}
