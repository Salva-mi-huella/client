import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRequestsAdopt } from '../../../redux/actions';

import TablePagination from '@mui/material/TablePagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import styles from './Table.module.css';

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

export default function BasicTable() {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);

    const dispatch = useDispatch()

    const user = JSON.parse(localStorage.getItem('user'));
    let foundation = useSelector(state => state.foundations);
    let requests = useSelector(state => state.requests_adopt);


    if (user) {
        foundation = foundation.find(f => f.email === user.email);
        console.log(foundation, 'Foundation');
    }

    useEffect(() => {
        dispatch(getRequestsAdopt())
    }, [dispatch])

    requests = requests.filter(r => r.foundationId === foundation.id)
    console.log(requests, 'requests_adopt');

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = (rowsPerPage - Math.min(rowsPerPage, requests?.length - page * rowsPerPage));

    return (
        <div className={styles.Table}>

            {/* <h3 className={styles.MDTableTitle} >Requests</h3> */}
            <h3 className={styles.MDTableTitle}> Tabla de solicitudes </h3>

            <TableContainer component={Paper}
                style={{ boxShadow: '0px, 13px, 20px, 0px #80808029' }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className={styles.TableHead}>
                        <TableRow>
                            <TableCell>Huellita </TableCell>
                            <TableCell align="left">Usuario</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Teléfono</TableCell>
                            <TableCell align="left">Ciudad</TableCell>
                            <TableCell align="left">Fecha</TableCell>
                            <TableCell align="left">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {requests && requests
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((r) => (
                                <TableRow
                                    key={r.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {r.pet.name}
                                    </TableCell>
                                    <TableCell align="left">{r.user.name}</TableCell>
                                    <TableCell align="left">{r.user.email}</TableCell>
                                    <TableCell align="left" className={styles.ciudad}>{r.user.telephone_number || 'Sin especificar'}</TableCell>
                                    <TableCell align="left" className={styles.ciudad}>{r.user.city || 'Sin especificar'}</TableCell>
                                    <TableCell align="left">01/08/2022</TableCell>
                                    <TableCell align="left">
                                        <span className={styles.status} style={makeStyles('Pendiente')} >Pendiente</span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>

                <TablePagination
                    className={styles.pagination}
                    component="div"
                    count={foundation?.request_adopts.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[4]}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />

            </TableContainer>
        </div>
    );
}
