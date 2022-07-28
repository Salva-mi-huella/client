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
    createData('El Campito Refugio', '$3.00,00', 15000, 'Haedo', 'Julio 26 2022', 'Aprobado'),
    createData('Gatitos de Palermo', '$3.00,00', 15000, 'Almagro', 'Julio 26 2022', 'Aprobado'),
    createData('Patitas Glew', '$3.000,00', 15000, 'Padua', 'Julio 26 2022', 'Aprobado'),
    // createData('Bella', 4, 305, 'Caballito', 'Julio 26 2022', 'Rechazado'),
    // createData('Ahri', 5, 356, 'Palermo', 'Julio 26 2022', 'Aprobado'),
];

export default function DonationTable() {
    return (
        <div className="Table">
            <h1 className='titles'> Mis donaciones </h1>
            <TableContainer component={Paper}
                style={{ backgroundColor: 'transparent', width: '90%' }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{color: 'yellow', fontSize:'30px'}}>Fundación</TableCell>
                            <TableCell align="left" sx={{color: 'yellow', fontSize:'30px'}}>Importe</TableCell>
                            <TableCell align="left" sx={{color: 'yellow', fontSize:'30px'}}>Huellitas</TableCell>
                            {/* <TableCell align="left">Ciudad</TableCell> */}
                            <TableCell align="left" sx={{color: 'yellow', fontSize:'30px'}}>Fecha</TableCell>
                            <TableCell align="left" sx={{color: 'yellow', fontSize:'30px'}}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" sx={{color: 'azure', fontSize:'25px'}}>
                                    {row.name} 
                                </TableCell>
                                <TableCell align="left" sx={{color: 'azure', fontSize:'22px'}}>{row.petId} </TableCell>
                                <TableCell align="left" sx={{color: 'azure', fontSize:'22px'}}>{row.userId}</TableCell>
                                {/* <TableCell align="left" className="ciudad">{row.city}</TableCell> */}
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
