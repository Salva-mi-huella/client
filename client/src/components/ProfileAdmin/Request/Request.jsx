import React from 'react';
import { useDispatch } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import { updateRequestFoundation } from '../../../redux/actions'
import styles from '../Request/Request.module.css';
import Swal from 'sweetalert2';


const Request = ({ requests_foundations }) => {

    const dispatch = useDispatch()

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
        dispatch(updateRequestFoundation({ status: e.target.value }, id))
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

    const emptyRows = (rowsPerPage - Math.min(rowsPerPage, requests_foundations.length - page * rowsPerPage));
    return (
        <div className={styles.tableDonations} >
           {/*  <h3 className={styles.donationTitle}>Solicitudes:</h3> */}
            <TableContainer className={styles.cont} component={Paper}
                style={{ boxShadow: '0px, 13px, 20px, 0px #80808029', maxHeight: '71vh', maxWidth: '70vw',marginTop:"7vh" }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow  sx={{boxShadow: '0 0 10px rgba(0, 0, 0, 0.067)'}}>
                            <TableCell sx={{color:'purple', fontWeight:'700'}} align="left">Fecha</TableCell>
                            <TableCell sx={{color:'purple', fontWeight:'700'}} align="left">Nombre de Fundación</TableCell>
                            <TableCell sx={{color:'purple', fontWeight:'700'}} align="left">Email</TableCell>
                            <TableCell sx={{color:'purple', fontWeight:'700'}} align="left">Teléfono</TableCell>
                            <TableCell sx={{color:'purple', fontWeight:'700'}} align="left">Estado</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {requests_foundations.length > 0 ? requests_foundations.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((r) => (
                            <TableRow
                                className={styles.row}
                                key={r.name}>
                                <TableCell component="th" scope="row">
                                    {r.post_date}
                                </TableCell>
                                <TableCell align="left">{r.name}</TableCell>
                                <TableCell align="left">{r.email}</TableCell>
                                <TableCell align="left">{r.telephone}</TableCell>

                                <TableCell align="left">

                                    <select className={styles.select}
                                        onChange={(e) => { handleUpdate(e, r.id) }}>

                                        <option
                                            disabled
                                            value={"Pendiente"}
                                        > Pendiente
                                        </option>

                                        <option

                                            value={"Aprobada"}
                                        > Aprobada
                                        </option>

                                        <option

                                            value={"Rechazada"}
                                        > Rechazada
                                        </option>

                                        <option hidden selected>
                                            {r.status === 'Pendiente' ? 'Pendiente' : r.status}
                                        </option>

                                    </select>
                                </TableCell>
                            </TableRow>
                        )) :
                            <TableCell component="th" scope="row"> Aún no hay Solicitudes </TableCell>}
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
                    count={requests_foundations.length}
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

export default Request