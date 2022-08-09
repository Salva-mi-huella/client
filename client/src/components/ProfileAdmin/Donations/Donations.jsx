import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDonations } from '../../../redux/actions'

import TablePagination from '@mui/material/TablePagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from '../Donations/Donations.module.css';


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

    const dispatch = useDispatch()
    const donations = useSelector(state => state.donations)

    useEffect(() => {
        dispatch(getDonations())
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

    const emptyRows = (rowsPerPage - Math.min(rowsPerPage, donations.length - page * rowsPerPage));

    return (
        <div className={styles.tableDonations}>

          {/*   <h3 className={styles.donationTitle}> Historial de Donaciones </h3> */}

            <TableContainer  sx={{border: "1px solid #e5e5e5" }}  component={Paper}
                style={{  background:"transparent",maxHeight: '71vh', maxWidth: '70vw',marginTop:"7vh" }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow  sx={{boxShadow: '0 0 10px rgba(0, 0, 0, 0.067)'}}>
                            <TableCell sx={{color:'black', fontWeight:'700', fontSize:'1rem'}}> Usuario </TableCell>
                            <TableCell sx={{color:'black', fontWeight:'700', fontSize:'1rem'}} align="left"> Fecha de Donacion</TableCell>
                            <TableCell sx={{color:'black', fontWeight:'700', fontSize:'1rem'}} align="left"> Metodo Utilizado</TableCell>
                            <TableCell sx={{color:'black', fontWeight:'700', fontSize:'1rem'}} align="left" > Cantidad </TableCell>
                            <TableCell sx={{color:'black', fontWeight:'700', fontSize:'1rem'}} align="left"> Puntos Acumulados</TableCell>
                            <TableCell sx={{color:'black', fontWeight:'700', fontSize:'1rem'}} align="left">Fundación</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {donations.length > 0 ? donations.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => (
                                <TableRow className={styles.row} key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 1 } }} >

                                    <TableCell sx={{color:'black', fontWeight:'500'}} component="th" scope="row"> {!row.user ? 'Anonimo' : `${row.user.nickname}`} </TableCell>

                                    <TableCell sx={{color:'black', fontWeight:'500'}} align="left">{row.date}</TableCell>

                                    <TableCell sx={{color:'black', fontWeight:'500'}} align="left">{row.method}</TableCell>

                                    <TableCell sx={{color:'black', fontWeight:'500'}} style={makeStyles(row.method)} align="left">{row.method === 'paypal' ? `$ ${row.amount} USD ` : `$ ${row.amount} ARS `}</TableCell>

                                    <TableCell sx={{color:'black', fontWeight:'500'}} align="left">{new Intl.NumberFormat().format(row.points)}</TableCell>

                                    <TableCell sx={{color:'black', fontWeight:'500'}} align="left">{row.foundation.name}</TableCell>

                                </TableRow>
                            )) :
                            <TableCell component="th" scope="row"> Aún no hay donaciones </TableCell>}
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
                    count={donations.length}
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