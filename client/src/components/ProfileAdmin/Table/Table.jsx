import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from '../Table/Table.module.css'


const makeStyles = (status) => {
    if (status === 'Aprobada') {
        return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green'
        }
    }
    else if (status === 'Rechazada') {
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

export default function BasicTable({requests_foundations}) {
    return (
        <div className={styles.Table}>
            <h3 className={styles.title}> Tabla de solicitudes </h3>
            <TableContainer sx={{maxWidth:10000, overflow: "hidden"}} className={styles.cont} component={Paper}
                style={{ boxShadow: '0px, 13px, 20px, 0px #80808029', }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Fecha</TableCell>
                            <TableCell align="left">Nombre de Fundación</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Teléfono</TableCell>
                            <TableCell className={styles.estado} align="left">Estado</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {requests_foundations.map((r) => (
                        <TableRow
                        className={styles.row}
                            key={r.name}
                        >
                            <TableCell component="th" scope="row">
                                {r.post_date}
                            </TableCell>
                            <TableCell align="left">{r.name}</TableCell>
                            <TableCell align="left">{r.email}</TableCell>
                            <TableCell align="left">{r.telephone}</TableCell>
                            <TableCell align="left">
                                <span className={styles.transito} style={makeStyles(r.status)} >{r.status} </span>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
