import React from 'react';
import './Request.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './Table.css'

const makeStyles = (status) => {
    if (status === 'Aprobado') {
        return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green'
        }
    }
    else if (status === 'Rechazado') {
        return {
            background: '#ffadad8f',
            color: 'red'
        }
    }
    else if (status === 'Pendiente') {
        return {
            background: '#aaa9ad',
            color: 'white'
        }
    }
}


const Request = ({requests_foundations}) => {
    return (
        <div className='containerRequest' >
            <h1>Solicitudes:</h1>
        <TableContainer component={Paper}
            style={{ boxShadow: '0px, 13px, 20px, 0px #80808029', }}
        >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Fecha</TableCell>
                        <TableCell align="left">Nombre de Fundación</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Teléfono</TableCell>
                        <TableCell align="left">Estado</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {requests_foundations.map((r) => (
                        <TableRow
                            key={r.name}
                        >
                            <TableCell component="th" scope="row">
                                01/08/2022
                            </TableCell>
                            <TableCell align="left">{r.name}</TableCell>
                            <TableCell align="left">{r.email}</TableCell>
                            <TableCell align="left" className="ciudad">-</TableCell>
                            {/* <TableCell align="left">{row.date}</TableCell> */}
                            <TableCell align="left">
                                <span className="transit" style={makeStyles('Pendiente')} >Pendiente </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    )
}

export default Request