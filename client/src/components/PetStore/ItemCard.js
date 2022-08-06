import React, {useState} from "react";
import styles from "./ItemCard.module.css";
import img from "../../assets/paw-print.png";
import { addToCart } from "../../redux/actions";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";
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
    const {isAuthenticated} = useAuth0();
    const dispatch = useDispatch();

    function handleAddToCart(){
        if(isAuthenticated){
            dispatch(addToCart(props.id))
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Para poder acceder al catalogo y canjear tus puntos debes registrarte!',
                footer: '<a href="https://dev-aekjy-pn.us.auth0.com/login?state=hKFo2SBDRUVkZURVdFFMbHRTaTlhVTJZcXE0dDB6V20zV0xEQaFupWxvZ2luo3RpZNkgZmxxTVZ1NEZMUndwbHJFRDJ3QlpsUEVtVGItMUU5WjGjY2lk2SBTSWYybGZ4cnFUaHVjOU4zZzFJTEQ2elN6V05JSlprZA&client=SIf2lfxrqThuc9N3g1ILD6zSzWNIJZkd&protocol=oauth2&audience=http%3A%2F%2Flocalhost%3A4000&scope=openid%20profile%20email%20read%3Amessage&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=code&response_mode=query&nonce=RUZldmFsUm5oYzdxTHJWLk9iNVVzVFY2bmk2YjZmU0U4bHVpMXVkZ0MtXw%3D%3D&code_challenge=gLWEv6YR2DNgVvdK1VAsAV8-mnAehDSMO5cByWzYgr8&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMS4xMC4yIn0%3D">Registrame en Salva una Huella</a>'
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

            <Card sx={{ width: 310, height: 340, backgroundColor: 'purple', marginBottom: 5}} >
            <Link to={`/tienda/${props.id}`}>
                <CardMedia
                component="img"
                height="200"
                width="400"
                image={props.images}
                alt="Paella dish"
                />
            </Link>
            <CardContent sx={{backgroundColor: 'transparent'}}>
            <Typography sx={{color: 'white'}} variant="body2" color="text.secondary">
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
                        <AddShoppingCartIcon sx={{color: 'yellow'}} />
                    </IconButton>
                </div>
            </CardActions>
            </Card>
    );
}
