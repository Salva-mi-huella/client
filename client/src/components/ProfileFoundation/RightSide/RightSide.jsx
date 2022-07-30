import React from 'react';
// import AdoptionReview from '../AdoptionReview/AdoptionReview';
import Updates from '../Updates/Updates';
import styles from './RightSide.module.css';

const RightSide = () => {
    return (
        <div className={styles.RightSide}>
            <div className={styles.updates} >
                <h3> Updates </h3>
                <Updates />
            </div>

            {/* <div className={styles.btnContainer}>
                <button
                    onClick={() => { }}
                    className={styles.btnPrimary}>
                    PUBLICAR HUELLA
                </button>


                <button
                    onClick={() => { }}
                    className={styles.btnPrimary}>
                    PUBLICAR NOTICIA
                </button>

            </div> */}
            {/* <div>
                <h3> Adoption review </h3>
                <AdoptionReview />
            </div> */}

        </div >
    )
}

export default RightSide;