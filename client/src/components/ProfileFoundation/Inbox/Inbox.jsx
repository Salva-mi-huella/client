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
            <h3 className={styles.inboxTitle}> Bandeja de entrada </h3>


            <TableContainer component={Paper}
                style={{ boxShadow: '0px, 13px, 20px, 0px #80808029', height: '85%' }}
            >
                <Table sx={{ maxWidth: 800. }} aria-label="simple table">
                    <TableHead >
                        <TableRow sx={styles.TableRow} >
                            <TableCell align="left">Usuario</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Mensaje</TableCell>
                        </TableRow>
                    </TableHead>
                    {/* BODY */}
                    <TableBody>
                        {foundation && foundation.messages
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((r) => (
                                <TableRow key={r.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                    {/* USER IMAGE ? */}
                                    {/* <TableCell component="th" scope="row">
                                        <img className={styles.petImg} src={r.pet.images[0]} />
                                        {r.pet.name}
                                    </TableCell> */}

                                    <TableCell className={styles.tableCell} align="left">{r.name}</TableCell>
                                    <TableCell className={styles.tableCell} align="left">{r.email}</TableCell>
                                    <TableCell className={styles.ciudad} align="left" >{r.message || 'Sin especificar'}</TableCell>
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



        </div>
    )
}

export default Inbox