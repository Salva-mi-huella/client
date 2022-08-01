import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getRequestsAdopt} from '../../../redux/actions';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './RequestTable.css'

function createData(name, petId, userId, city, date, status) {
    return { name, petId, userId, city, date, status };
}

const makeStyles = (status) => {
    if (status === 'Aprobado') {
        return {
            background: 'green',
            color: 'azure'
        }
    }
    else if (status === 'Rechazado') {
        return {
            background: 'red',
            color: 'azure'
        }
    }
    else if (status === 'Pendiente') {
        return {
            background: '#59bfff',
            color: 'white'
        }
    }
}

export default function RequestTable({userId}) {

    const dispatch=useDispatch()


    useEffect(() => { 
        dispatch(getRequestsAdopt())
     }, [])

     let requests = useSelector(state => state.requests_adopt);

     requests = requests.filter(r => r.userId === userId)

     console.log(requests, 'hola')


    return (
        <div className="Table">
            <h1 className="titles"> Mis solicitudes </h1>
            <TableContainer component={Paper}
                 style={{ boxShadow: '0px, 13px, 20px, 0px #80808029', backgroundColor: 'transparent', width: '90%' }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell  sx={{color: 'yellow', fontSize:'30px'}}>Huella </TableCell>
                            <TableCell align="left"  sx={{color: 'yellow', fontSize:'30px'}}>Fundación</TableCell>
                            <TableCell align="left"  sx={{color: 'yellow', fontSize:'30px'}}>Fecha</TableCell>
                            <TableCell align="left"  sx={{color: 'yellow', fontSize:'30px'}}>Estado</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {requests.map((r) => (
                            <TableRow
                                key={r.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }, color: 'white' }}
                            >
                                <TableCell component="th" scope="row"
                               sx={{color: 'azure', fontSize:'22px'}}
                                >
                                    {r.pet.name}
                                </TableCell>
                                <TableCell align="left" sx={{color: 'azure', fontSize:'22px'}}>{r.foundation.name} </TableCell>
                                <TableCell align="left" sx={{color: 'azure', fontSize:'22px'}}>01/08/2022</TableCell>
                                <TableCell align="left" sx={{color: 'azure', fontSize:'22px'}}>
                                    <span className="status" style={makeStyles('Pendiente')} >Pendiente</span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
