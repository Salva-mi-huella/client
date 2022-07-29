import React from 'react';
import './AdoptionRequests.css'
import Table from '../Table/Table.jsx';
import img from '../../../assets/cat-mouse.gif'

const AdoptionRequests = () => {
  return (
    <>

      <div className='adopctionRequest'>
        <Table />
        <img src={img} />
      </div>

    </>

  )
}

export default AdoptionRequests