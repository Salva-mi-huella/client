import * as React from 'react';

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

const rows = [
    createData('Maple', 1, 'Patitas Glew', 'Haedo', 'Julio 26 2022', 'Aprobado'),
    createData('Yuki', 2, 'El Camp[ito Felino', 'Almagro', 'Julio 26 2022', 'Pendiente'),
    createData('Cafecito', 3, 'Ayudacan', 'Padua', 'Julio 26 2022', 'Rechazado'),
];

export default function RequestTable() {
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
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }, color: 'white' }}
                            >
                                <TableCell component="th" scope="row"
                               sx={{color: 'azure', fontSize:'22px'}}
                                >
                                    {row.name}
                                </TableCell>
                                <TableCell align="left" sx={{color: 'azure', fontSize:'22px'}}>{row.userId} </TableCell>
                                <TableCell align="left" sx={{color: 'azure', fontSize:'22px'}}>{row.date}</TableCell>
                                <TableCell align="left" sx={{color: 'azure', fontSize:'22px'}}>
                                    <span className="status" style={makeStyles(row.status)} >{row.status}</span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
