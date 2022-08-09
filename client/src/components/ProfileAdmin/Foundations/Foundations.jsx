import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFoundations, updateFoundation } from "../../../redux/actions"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import Swal from 'sweetalert2'
import styles from '../Foundations/Foundations.module.css';


const Foundations = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFoundations())
    }, [dispatch])

    const foundations = useSelector(state => state.foundations)

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const handleUpdate = (e, id) => {
        dispatch(updateFoundation({ status: e.target.value }, id))
        Swal.fire({
            title: '¡Proceso de solicitud enviado!',
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Custom image',
            position: 'center',
            width: '40rem',
            height: '55rem',
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: 'OK',
            confirmButtonColor: 'purple',
            showClass: {
                popup: 'animate__animated animate__fadeInDown',
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
          })
    }
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, foundations.length - page * rowsPerPage);
    return (
        <div className={styles.tableDonations}>
            <h3 className={styles.donationTitle}>Fundaciones:</h3>

            <TableContainer className={styles.cont} style={{ boxShadow: '0px, 13px, 20px, 0px #80808029', height: '90%' }} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{boxShadow: '0 0 10px rgba(0, 0, 0, 0.067)'}}>
                            <TableCell sx={{color:'purple', fontWeight:'700'}}>N°</TableCell>
                            <TableCell sx={{color:'purple', fontWeight:'700'}} align="left">Fundación</TableCell>
                            <TableCell sx={{color:'purple', fontWeight:'700'}} align="left">Teléfono</TableCell>
                            <TableCell sx={{color:'purple', fontWeight:'700'}} align="left">Ciudad</TableCell>
                            <TableCell sx={{color:'purple', fontWeight:'700'}} align="left">Localidad</TableCell>
                            <TableCell sx={{color:'purple', fontWeight:'700'}} align="left">Email</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {foundations.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((f) => (
                            <TableRow className={styles.row} key={f.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">{f.id}</TableCell>
                                <TableCell align="left">{f.name}</TableCell>
                                <TableCell align="left">{f.telephone_number}</TableCell>
                                <TableCell align="left">{f.state}</TableCell>
                                <TableCell align="left" className="ciudad">{f.city}</TableCell>
                                <TableCell align="left">{f.email}</TableCell>
                                <TableCell align="left">
                                    {f.status === "Activa" ? <button value={f.status === "Activa" ? "Inactiva" : "Activa"} onClick={e => handleUpdate(e, f.id)} className={styles.boton} key={f.id}>Dar de baja</button> :
                                        <button value={f.status === "Activa" ? "Inactiva" : "Activa"} onClick={e => handleUpdate(e, f.id)} className={styles.boton1} key={f.id}>Dar de alta</button>}
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
                    count={foundations.length}
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

export default Foundations