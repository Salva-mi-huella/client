import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useAuth0 } from '@auth0/auth0-react';
import { getFoundations } from '../../../redux/actions';

import TablePagination from '@mui/material/TablePagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import styles from '../InfoPets/InfoPets.module.css';

// import './Donations.css'

const makeStyles = (status) => {
    if (status) {
        return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green'
        }
    }
    else if (!status) {
        return {
            background: '#59bfff',
            color: 'white'
        }
    }
}

const Donations = () => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const { user } = useAuth0();
    const dispatch = useDispatch();
    let foundation = useSelector(state => state.foundations);

    if (user) {
        console.log(user, 'user info');
        foundation = foundation.find(f => f.email === user.email);
        console.log(foundation, 'foundation info');
    }

    React.useEffect(() => {
        dispatch(getFoundations());
    }, [dispatch])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, foundation.donations.length - page * rowsPerPage);

    return (

        <div className={styles.Table}>
            <div className={styles.h3}> Historial de Donaciones </div>
            <TableContainer component={Paper}
                style={{ boxShadow: '0px, 13px, 20px, 0px #80808029', height: '80%' }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell> ID Usuario </TableCell>
                            <TableCell align="left"> Fecha de Donacion</TableCell>
                            <TableCell align="left"> Metodo Utilizado</TableCell>
                            <TableCell align="left"> Cantidad </TableCell>
                            <TableCell align="left"> Puntos Acumulados</TableCell>
                            {/* <TableCell align="left">Status</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {foundation.donations && foundation.donations
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <TableRow key={row.userId} sx={{ '&:last-child td, &:last-child th': { border: 1 } }} >
                                    <TableCell component="th" scope="row"> {!row.userId ? 'Anonimo' : `${row.userId}`} </TableCell>
                                    <TableCell align="left">{row.date}</TableCell>
                                    <TableCell align="left">{row.method}</TableCell>
                                    <TableCell align="left">{row.method === 'paypal' ? `$ ${row.amount} USD ` : `$ ${row.amount} ARS `}</TableCell>
                                    <TableCell align="left">{new Intl.NumberFormat().format(row.points)}</TableCell>
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
                    count={foundation.pets.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[5, 10]}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />

            </TableContainer>

        </div>
    )
}

export default Donations