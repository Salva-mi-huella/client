import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getUsers } from "../../../redux/actions"

import TablePagination from '@mui/material/TablePagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import verify from '../../../assets/verificado.png'
import styles from '../Transito/Transito.module.css';

const Transito = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    const transit = users?.filter(user => user.transit === "Si")

    // console.log(users, 'users');
    // console.log(transit, 'transit');

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])


    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = (rowsPerPage - Math.min(rowsPerPage, users?.length - page * rowsPerPage));

    return (
        <div className={styles.tableDonations}>
            <TableContainer className={styles.cont} component={Paper}
                style={{
                    boxShadow: '0px, 13px, 20px, 0px #80808029',
                    height: '90%',
                    marginTop: '2%',
                    border: '1px solid gray'
                }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.067)' }}>
                            <TableCell sx={{ color: 'purple', fontWeight: '700', fontSize: '16px' }}> Usuario</TableCell>
                            <TableCell sx={{ color: 'purple', fontWeight: '700', fontSize: '16px' }} align="left">Nombre</TableCell>
                            <TableCell sx={{ color: 'purple', fontWeight: '700', fontSize: '16px' }} align="left">Email</TableCell>
                            <TableCell sx={{ color: 'purple', fontWeight: '700', fontSize: '16px' }} align="left">City</TableCell>
                            <TableCell sx={{ color: 'purple', fontWeight: '700', fontSize: '16px' }} align="left">DNI</TableCell>
                            <TableCell sx={{ color: 'purple', fontWeight: '700', fontSize: '16px' }} align="left">Teléfono</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {transit.length > 0 ? transit
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((user) => (
                                <TableRow className={styles.row} key={user.name} sx={{ '&:last-child td, &:last-child th': { border: 1 } }}>

                                    <TableCell component="th" scope="row">
                                        {
                                            user.admin === true
                                                ? <div>{user.nickname} <img width='15px' height='15px' src={verify} alt="" /></div>
                                                : user.nickname
                                        }
                                    </TableCell>

                                    <TableCell align="left">{user.name}</TableCell>
                                    <TableCell align="left">{user.email}</TableCell>
                                    <TableCell align="left">{user.city}</TableCell>
                                    <TableCell align="left">{user.dni}</TableCell>
                                    <TableCell align="left"><div className={styles.phoneContainer}>{user.telephone_number}</div></TableCell>
                                </TableRow>
                            )) :
                            <TableCell component="th" scope="row"> Aún no hay Usuarios de transito </TableCell>}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 93 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>

                <TablePagination
                    sx={{ justifyContent: 'center', alignSelf: 'center', flex: 'center', marginTop: '23px', textAlign: 'center' }}
                    className={styles.pagination}
                    component="div"
                    count={users?.length}
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

export default Transito