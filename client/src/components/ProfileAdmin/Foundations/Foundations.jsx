import React, { useEffect } from 'react';
import './Foundations.css'
import {  useDispatch, useSelector } from 'react-redux';
import {getFoundations} from "../../../redux/actions"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './Table.css'


const Foundations = () => {

  const dispatch = useDispatch()

  useEffect(() => { 
    dispatch(getFoundations())
 },[dispatch])

  const foundations = useSelector(state => state.foundations)
  console.log(foundations)



  return (
    <div className='containerFoundation'>
      <h1>Fundaciones:</h1>

                <TableContainer component={Paper}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table" className='conatinerTable'>
                    <TableHead>
                        <TableRow>
                            <TableCell>N°</TableCell>
                            <TableCell align="left">Fundación</TableCell>
                            <TableCell align="left">Teléfono</TableCell>
                            <TableCell align="left">Ciudad</TableCell>
                            <TableCell align="left">Localidad</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Estado</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {foundations.map((f) => (
                                <TableRow key={f.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">{f.id}</TableCell>
                                <TableCell align="left">{f.name}</TableCell>
                                <TableCell align="left">{f.telephone_number}</TableCell>
                                <TableCell align="left">{f.state}</TableCell>
                                <TableCell align="left" className="ciudad">{f.city}</TableCell>
                                <TableCell align="left">{f.email}</TableCell>
                                <TableCell align="left"><button className='btn'>Dar de baja</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    
    
    </div>
  )
}

export default Foundations