import React from 'react';
import { useSelector } from 'react-redux';

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

export default function BasicTable({ requests }) {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);

    const user = JSON.parse(localStorage.getItem('user'));
    let foundation = useSelector(state => state.foundations);



    if (user) {
        foundation = foundation.find(f => f.email === user.email);
    }

    // useEffect(() => {
    //     dispatch(getRequestsAdopt())
    // }, [dispatch])

    // requests = requests.filter(r => r.foundationId === foundation.id)
    

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
            <h3 className={styles.MDTableTitle}> Solicitudes de adopción </h3>

            <TableContainer component={Paper}
                style={{ boxShadow: '0px, 13px, 20px, 0px #80808029' }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className={styles.TableHead}>
                        <TableRow>
                            <TableCell>Huella </TableCell>
                            <TableCell align="left">Nombre</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Teléfono</TableCell>
                            <TableCell align="left">Ciudad</TableCell>
                            <TableCell align="left">Fecha</TableCell>
                            <TableCell align="left">Estado</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {requests && requests
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((r) => (
                                <TableRow
                                    className={styles.bodyRow}
                                    key={r.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {r.pet?.name}
                                    </TableCell>
                                    <TableCell align="left">{r.name} {r.lastname}</TableCell>
                                    <TableCell align="left">{r.email}</TableCell>
                                    <TableCell align="left" className={styles.ciudad}>{r.phone || 'Sin especificar'}</TableCell>
                                    <TableCell align="left" className={styles.ciudad}>{r.user?.city || 'Sin especificar'}</TableCell>
                                    <TableCell align="left">{r.post_date}</TableCell>
                                    <TableCell align="left">
                                        <span className={styles.status} style={makeStyles('Pendiente')} >{r.status}</span>
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
