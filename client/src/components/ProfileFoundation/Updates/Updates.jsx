import React from 'react';
import styles from './Updates.module.css';

import { useHistory } from 'react-router-dom';

import { BsTrash } from 'react-icons/bs'
import { useDispatch, } from 'react-redux';
import { deleteNew } from '../../../redux/actions';
import Swal from 'sweetalert2';



const Updates = ({ foundation }) => {



    const history = useHistory();
    const dispatch = useDispatch();

    const handleDelete = (id) => {
       
        Swal.fire({
            title: 'Estas seguro?',
            text: "Esta accion no se puede deshacer!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminalo!'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(id)
                dispatch(deleteNew(id));
                history.push('/home#news');
                Swal.fire(
                    'Eliminado!',
                    'Tu Noticia ha sido eliminada correctamente.',
                    'success'
                )
            }
        })
       
        

    }

    return (
        <div className={styles.updatedNewsContainer}>
            <h1>Mis noticias</h1>

            {foundation?.news?.length && foundation.news.map((update) =>
                <div className={styles.singleUpdateContainer}>

                    <span onClick={(id) => handleDelete(update.id)} > <BsTrash className={styles.deleteIcon} /> </span>

                    <div className={styles.singleNew}>

                        <img className={styles.singleUpdateImg} src={update.images[0]} alt='User not available' />
                        <span className={styles.singleUpdateDate} >
                            {update.campaign ? <div className={styles.campaign}> </div> : null}
                            {update.post_date}
                        </span>


                        <div style={{ marginBottom: '0.5rem' }}>
                            <p>{update.title}</p>
                            <span className={styles.description} > {update.description}</span>
                        </div>

                    </div>
                </div>
            )}

        </div>
    )
}

export default Updates;