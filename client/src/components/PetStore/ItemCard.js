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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function ItemCard(props) {
    const dispatch = useDispatch();

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
                    <IconButton onClick={()=>dispatch(addToCart(props.id))} aria-label="add to favorites">
                        <ShoppingCartIcon sx={{color: 'yellow'}} />
                    </IconButton>
                </div>
            </CardActions>
            </Card>
    );
}
