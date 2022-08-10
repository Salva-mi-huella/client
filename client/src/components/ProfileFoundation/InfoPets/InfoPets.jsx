import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePetStatus } from "../../../redux/actions"
import Swal from 'sweetalert2';



import TablePagination from '@mui/material/TablePagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import styles from './InfoPets.module.css';

const InfoPets = () => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const dispatch = useDispatch();

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

    const handleUpdate = (e, id) => {
        Swal.fire({
            title: 'Solicitud en proceso.',
            text: 'El estado puede demorar unos minutos en actualizar.'
        })
        if (e.target.value === 'Adoptado') {
            dispatch(updatePetStatus(id, { adopted: false }))
        } else dispatch(updatePetStatus(id, { adopted: true }));
    }

    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, foundation?.pets.length - page * rowsPerPage);

    return (
        <div className={styles.tablePets}>

            <TableContainer className={styles.cont} component={Paper}
                style={{
                    boxShadow: '0px, 13px, 20px, 0px #80808029',
                    height: '90%',
                    marginTop: '2%',
                    border: '1px solid gray'
                }}>
                <Table sx={{ minWidth: 650, }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.067)' }}>
                            <TableCell sx={{ color: 'rgb(99, 59, 218)', fontWeight: '700', fontSize: '1.1vw' }} align="left" >Huella </TableCell>
                            <TableCell sx={{ color: 'rgb(99, 59, 218)', fontWeight: '700', fontSize: '1.1vw' }} align="left">Tipo</TableCell>
                            <TableCell sx={{ color: 'rgb(99, 59, 218)', fontWeight: '700', fontSize: '1.1vw' }} align="left">Género</TableCell>
                            <TableCell sx={{ color: 'rgb(99, 59, 218)', fontWeight: '700', fontSize: '1.1vw' }} align="left">Edad</TableCell>
                            <TableCell sx={{ color: 'rgb(99, 59, 218)', fontWeight: '700', fontSize: '1.1vw' }} align="left">Fecha de alta</TableCell>
                            <TableCell sx={{ color: 'rgb(99, 59, 218)', fontWeight: '700', fontSize: '1.1vw' }} align="left">Estado</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {foundation.pets && foundation.pets
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <TableRow className={styles.row} key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 1 } }}>
                                    <TableCell component="th" scope="row">
                                        <img className={styles.petImg} alt='pet icon' src={row.images[0]} />
                                        {row.name}
                                    </TableCell>

                                    <TableCell align="left">{row.type}</TableCell>
                                    <TableCell align="left">{row.gender}</TableCell>
                                    <TableCell align="left">{row.age}</TableCell>
                                    <TableCell align="left">{row.post_date}</TableCell>

                                    {/* ADOPTION STATUS */}
                                    <TableCell align="left">
                                        {
                                            row.adopted === false
                                                ? <button value={row.adopted === false
                                                    ? "En adopcion"
                                                    : "Adoptado"}
                                                    onClick={e => handleUpdate(e, row.id)}
                                                    className={styles.boton}>
                                                    En adopcion
                                                </button>
                                                :
                                                <button
                                                    onClick={e => handleUpdate(e, row.id)}
                                                    value={row.adopted === true ? "Adoptado" : "En adopcion"}
                                                    className={styles.boton1}>
                                                    Adoptado
                                                </button>
                                        }
                                    </TableCell>

                                </TableRow>
                            ))}
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
                    count={foundation.pets.length}
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

export default InfoPets