import React from 'react';
import './DataFounda.css';
import { dataFoundations } from '../../mocks/ListFundationMock/ListFundationMock';
import PetsFoundation from './PetsFoundation';

export default function DataFoundation() {
  return (
    <div>
        {/* {
            dataFoundations.map(f =>{
                return(
                    <div className='infoFoundation'>
                        <h5>{f.name}</h5>
                        <h5>{f.location}</h5>
                        <h5>{f.telephone_number}</h5>
                        <h5>{f.description}</h5>
                        <h5>{f.email}</h5>
                        <h5>{f.web}</h5>
                        <h5>{f.instagram}</h5>
                        {
                            f?.pets(p => {
                                return(
                                    <div>
                                    <PetsFoundation name={p.name} img={p.img[0]}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            })
        } */}
    </div>
  )
}
