import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { useAuth0 } from '@auth0/auth0-react';
// import { getFoundations } from '../../../redux/actions';

import TablePagination from '@mui/material/TablePagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import styles from '../Donations/Donations.module.css';
import { getDonations } from '../../../redux/actions';



const makeStyles = (method) => {

    if (method === 'paypal') {

        return {
            // background: 'rgb(145 254 159 / 47%)',
            fontWeight: '500',
            color: 'rgb(27, 189, 27)',
        }

    }
    else {
        return {
            background: '#59bfff',
            color: 'white'
        }
    }
}


const Donations = () => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const user = JSON.parse(localStorage.getItem('user'));
    // const { user } = useAuth0();
    const dispatch = useDispatch();
    let foundation = useSelector(state => state.foundations);

    let donations = useSelector(state => state.donations);

    if (user) {
        // console.log(donations, 'donations sin filtro  ');
        foundation = foundation.find(f => f.email === user.email);
        donations = donations.filter(donation => donation.foundationId === foundation.id)

        console.log(donations, 'donations Filtrado ');
    }


    React.useEffect(() => {
        dispatch(getDonations());
    }, [dispatch])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = (rowsPerPage - Math.min(rowsPerPage, donations?.length - page * rowsPerPage));

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
                            <TableCell sx={{ color: 'purple', fontWeight: '700', fontSize: '16px' }}> Nombre del Usuario </TableCell>
                            <TableCell sx={{ color: 'purple', fontWeight: '700', fontSize: '16px' }} align="left"> Email </TableCell>
                            <TableCell sx={{ color: 'purple', fontWeight: '700', fontSize: '16px' }} align="left"> Fecha de Donacion</TableCell>
                            <TableCell sx={{ color: 'purple', fontWeight: '700', fontSize: '16px' }} align="left"> Metodo Utilizado</TableCell>
                            <TableCell sx={{ color: 'purple', fontWeight: '700', fontSize: '16px' }} align="left" > Cantidad </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {donations && donations?.length > 0 ? donations
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <TableRow className={styles.row} key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 1 } }}>
                                    <TableCell component="th" scope="row"> {!row.user?.name ? 'Anonimo' : `${row.user?.name}`} </TableCell>
                                    <TableCell align="left">{!row.user?.email ? 'Anonimo' : `${row.user?.email}`} </TableCell>
                                    <TableCell align="left">{row.date}</TableCell>
                                    <TableCell align="left"><div className={styles.methodContainer} >{row.method}</div></TableCell>
                                    <TableCell style={makeStyles(row.method)}
                                        align="left">{row.method === 'paypal' ? `$ ${new Intl.NumberFormat().format(row.amount)} USD ` : `$ ${new Intl.NumberFormat().format(row.amount)} ARS `}</TableCell>
                                </TableRow>
                            )) :
                            <TableCell component="th" scope="row"> Aun no hay donaciones </TableCell>}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 62.5 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>

                <TablePagination
                    sx={{ justifyContent: 'center', alignSelf: 'center', flex: 'center', marginTop: '20px', textAlign: 'center', }}
                    className={styles.pagination}
                    component="div"
                    count={donations?.length}
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

export default Donations