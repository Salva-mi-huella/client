import { lightBlue } from '@mui/material/colors';
import React from 'react';
// import AdoptionReview from '../AdoptionReview/AdoptionReview';
import Updates from '../Updates/Updates';
import './RightSide.css';

const RightSide = () => {
    return (
        <div className="RightSide">
            <div className='updates' >
                <h3> Updates </h3>
                <Updates />
            </div>

            <div style={{ marginTop: '-150px', backgroundColor: 'lightBlue', width: '100%', height: '250px', justifyContent: 'space-around', display: 'flex', flexDirection: 'column' }}>
                <button className="btn-primary">
                    Voy a conectar este boton con el item " publicar huella"
                </button>


                <button className="btn-primary">
                    Y este con " publicar noticia "
                </button>

            </div>
            {/* <div>
                <h3> Adoption review </h3>
                <AdoptionReview />
            </div> */}

        </div>
    )
}

export default RightSide;