import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, updateUser } from "../../../redux/actions"
import { useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import verify from '../../../assets/verificado.png'

import styles from '../Transito/Transito.module.css';

const Transito = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    const transit = users?.filter(user => user.transit === "Si")

    console.log(users, 'users');
    console.log(transit, 'transit');

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    function makeStyles(transit) {
        if (transit === "Si") {
            return {
                color: 'green'
            }
        }
        else if (transit === "No") {
            return {
                color: 'red'
            }
        }

    }

    const handleAdmin = (e, email) => {
        dispatch(updateUser({ admin: e.target.value }, email))
    }

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = (rowsPerPage - Math.min(rowsPerPage, users.length - page * rowsPerPage));
    return (
        <div className={styles.tableDonations}>
            <h3 className={styles.donationTitle}>Usuarios:</h3>
            <TableContainer /* sx={{backgroundColor:'transparent'}} */ className={styles.cont} component={Paper}
                style={{ boxShadow: '0px, 13px, 20px, 0px #80808029', height: '90%' }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead >
                        <TableRow>
                            <TableCell>Usuario</TableCell>
                            <TableCell align="left">Nombre</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">City</TableCell>
                            <TableCell align="left">DNI</TableCell>
                            <TableCell align="left">Teléfono</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transit.length > 0 ? transit
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((user) => (
                                <TableRow
                                    className={styles.row}
                                    key={user.id}>
                                    <TableCell component="th" scope="row">
                                        {user.admin === true ? <div>{user.nickname} <img width='15px' height='15px' src={verify} alt="" /></div> : user.nickname}
                                    </TableCell>
                                    <TableCell className={styles.row1} align="left">{user.name}</TableCell>
                                    <TableCell className={styles.row1} align="left">{user.email}</TableCell>
                                    <TableCell className={styles.row1} align="left">{user.city}</TableCell>
                                    <TableCell className={styles.row1} align="left">{user.dni}</TableCell>
                                    <TableCell className={styles.row1} align="left">{user.telephone_number}</TableCell>
                                </TableRow>
                            )) :
                            <TableCell component="th" scope="row"> Aún no hay Usuarios de transito </TableCell>}
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
                    count={users.length}
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