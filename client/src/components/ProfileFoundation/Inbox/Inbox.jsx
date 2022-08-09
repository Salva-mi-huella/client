import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TablePagination from '@mui/material/TablePagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Swal from 'sweetalert2'

import styles from '../Inbox/Inbox.module.css'


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


const Inbox = () => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);


    const user = JSON.parse(localStorage.getItem('user'));

    let foundation = useSelector(state => state.foundations);
    if (user) {
        foundation = foundation.find(f => f.email === user.email);
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = (rowsPerPage - Math.min(rowsPerPage, foundation?.messages.length - page * rowsPerPage));



    return (
        <div className={styles.inboxTable} >
            <TableContainer className={styles.cont} component={Paper}
                style={{
                    boxShadow: '0px, 13px, 20px, 0px #80808029',
                    height: '90%',
                    marginTop: '2%',
                    border: '1px solid gray'
                }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead >
                        <TableRow sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.067)' }}>
                            <TableCell sx={{ color: 'purple', fontWeight: '700', fontSize: '16px' }} align="left">Usuario</TableCell>
                            <TableCell sx={{ color: 'purple', fontWeight: '700', fontSize: '16px' }} align="left">Email</TableCell>
                            <TableCell sx={{ color: 'purple', fontWeight: '700', fontSize: '16px' }} align="left">Mensaje</TableCell>
                        </TableRow>
                    </TableHead>
                    {/* BODY */}
                    <TableBody>
                        {foundation && foundation.messages
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((r) => (
                                <TableRow key={r.id}
                                    className={styles.row}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    {/* USER IMAGE ? */}
                                    {/* <TableCell component="th" scope="row">
                                        <img className={styles.petImg} src={r.pet.images[0]} />
                                        {r.pet.name}
                                    </TableCell> */}

                                    <TableCell className={styles.tableCell} align="left">{r.name}</TableCell>
                                    <TableCell className={styles.tableCell} align="left">{r.email}</TableCell>
                                    <TableCell className={styles.ciudad} align="left" >
                                        {r.message ? <button className={styles.boton} onClick={() => {
                                            Swal.fire({
                                                title: r.message,
                                                showClass: {
                                                    popup: 'animate__animated animate__fadeInDown'
                                                },
                                                hideClass: {
                                                    popup: 'animate__animated animate__fadeOutUp'
                                                }
                                            })
                                        }}> Leer Mensaje </button>
                                            :
                                            'Error'
                                        }
                                    </TableCell>
                                    {/* <TableCell className={styles.tableCell} align="left">DATE?</TableCell> */}



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
                    sx={{ justifyContent: 'center', alignSelf: 'center', flex: 'center', marginTop: '20px', textAlign: 'center', }}
                    className={styles.pagination}
                    component="div"
                    count={foundation?.messages.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[10]}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />

            </TableContainer>

        </div >
    )
}

export default Inbox