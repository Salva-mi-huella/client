import React from 'react'

export default function PetsFoundation({name, img}) {
  return (
    <div>
        <img src={img}/>
        <h6>{name}</h6>
    </div>
  )
}
