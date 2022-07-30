import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import styles from './Table.module.css'

function createData(name, petId, userId, city, date, status) {
    return { name, petId, userId, city, date, status };
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
            background: '#59bfff',
            color: 'white'
        }
    }
}

const rows = [
    createData('Maple', 1, 159, 'Haedo', 'Julio 26 2022', 'Aprobado'),
    createData('Yuki', 2, 237, 'Almagro', 'Julio 26 2022', 'Pendiente'),
    createData('Cafecito', 3, 262, 'Padua', 'Julio 26 2022', 'Aprobado'),
    createData('Bella', 4, 305, 'Caballito', 'Julio 26 2022', 'Rechazado'),
    createData('Ahri', 5, 356, 'Palermo', 'Julio 26 2022', 'Aprobado'),
];

export default function BasicTable() {



    return (
        <div className={styles.Table}>
            <h3 className={styles.h3}> Tabla de solicitudes </h3>
            <TableContainer component={Paper}
                style={{ boxShadow: '0px, 13px, 20px, 0px #80808029' }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className={styles.TableHead}>
                        <TableRow>
                            <TableCell>Huellita </TableCell>
                            <TableCell align="left">ID Huellita</TableCell>
                            <TableCell align="left">ID Usuario</TableCell>
                            <TableCell align="left">Ciudad</TableCell>
                            <TableCell align="left">Fecha</TableCell>
                            <TableCell align="left">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.petId}</TableCell>
                                <TableCell align="left">{row.userId}</TableCell>
                                <TableCell align="left" className={styles.ciudad}>{row.city}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left">
                                    <span className={styles.status} style={makeStyles(row.status)} >{row.status}</span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
