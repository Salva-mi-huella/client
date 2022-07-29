import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './Table.css'

function createData(date, foundationName, email, number, status) {
    return { date, foundationName, email, number, status };
}

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

const rows = [
    createData('29/06/2022', "Gatitos a Salvo", "gatitosasalvo@gmail.com", '0112357621',"Aprobado"),
    createData('04/07/2022', "Huellitas Heridas", "huellitasheridas@hotmail.com", '0110327423',"Aprobado" ),
    createData('12/07/2022', "Garritas en tránsito", "garritas en tránsito@hotmail.com","0114528493","Aprobado"  ),
    createData('18/07/2022', "Hogar dulce hogar", "hogardulcehogar.10@gmail.com","0112508432","Pendiente" ),
    createData('29/07/2022', "Mision Animal", "misionanimal@gmail.com","0113709411","Pendiente"),
];

export default function BasicTable() {
    return (
        <div className="Table">
            <h3> Tabla de solicitudes </h3>
            <TableContainer className='Table2' component={Paper}
                style={{ boxShadow: '0px, 13px, 20px, 0px #80808029', }}
            >
                <Table className='Tabla' sx={{ minWidth: 650 }} aria-label="simple table">
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
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                            >
                                <TableCell component="th" scope="row">
                                    {row.date}
                                </TableCell>
                                <TableCell align="left">{row.foundationName}</TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left" className="ciudad">{row.number}</TableCell>
                                <TableCell align="left">
                                    <span className="transit" style={makeStyles(row.status)} >{row.status} </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
