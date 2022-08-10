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
import Swal from 'sweetalert2'
import styles from '../Users/Users.module.css';

const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

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
        Swal.fire({
            title: 'Solicitud en proceso.',
            text: 'El estado puede demorar unos minutos en actualizar.',
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
        
            <TableContainer sx={{border: "1px solid #e5e5e5" }} className={styles.cont} component={Paper}
                style={{ background:"transparent", maxHeight: '71vh',maxWidth: '100%',marginTop:"7vh"}}

            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead >
                        <TableRow /* sx={{borderTop: "1px solid #e5e5e5"}} */ >
                            <TableCell sx={{color:'black', fontWeight:'700', fontSize:'1rem'}}>Usuario</TableCell>
                            <TableCell sx={{color:'black', fontWeight:'700', fontSize:'1rem'}} align="left">Nombre</TableCell>
                            <TableCell sx={{color:'black', fontWeight:'700', fontSize:'1rem'}} align="left">Email</TableCell>
                            <TableCell sx={{color:'black', fontWeight:'700', fontSize:'1rem'}} align="left">Ciudad</TableCell>
                            <TableCell sx={{color:'black', fontWeight:'700', fontSize:'1rem'}} align="left">DNI</TableCell>
                            <TableCell sx={{color:'black', fontWeight:'700', fontSize:'1rem'}} align="left">Teléfono</TableCell>
                            <TableCell sx={{color:'black', fontWeight:'700', fontSize:'1rem'}} align="left">Tránsito</TableCell>
                            <TableCell sx={{color:'black', fontWeight:'700', fontSize:'1rem'}} align="left">Asignar Admin</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.length > 0 ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((user) => (
                                <TableRow
                                    className={styles.row}
                                    key={user.id}>
                                    <TableCell component="th" scope="row">
                                        {user.admin === true ? <div>{user.nickname} <img width='15px' height='15px' src={verify} alt="" /></div> : user.nickname}
                                    </TableCell>
                                    <TableCell sx={{color:'black', fontWeight:'500'}} className={styles.row1} align="left">{user.name}</TableCell>
                                    <TableCell sx={{color:'black', fontWeight:'500'}} className={styles.row1} align="left">{user.email}</TableCell>
                                    <TableCell sx={{color:'black', fontWeight:'500'}} className={styles.row1} align="left">{user.city}</TableCell>
                                    <TableCell sx={{color:'black', fontWeight:'500'}} className={styles.row1} align="left">{user.dni}</TableCell>
                                    <TableCell sx={{color:'black', fontWeight:'500'}} className={styles.row1} align="left">{user.telephone_number}</TableCell>
                                    <TableCell sx={{color:'black', fontWeight:'500'}} className={styles.row1} align="left">
                                        {user.admin === false ? <span className={styles.status} style={makeStyles(user.transit)} ><i className={styles.transit} width="5px" heigth="5px" class="fa-solid fa-circle"></i> </span> : <div className={styles.noAplica1}>---</div>}
                                    </TableCell>
                                    <TableCell align="left">

                                        {user.admin === false ? <button value={user.admin === false ? true : false} onClick={e => handleAdmin(e, user.email)} className={styles.btn1} key={user.id} >Admin </button> : <button value={user.admin === false ? true : false} onClick={e => handleAdmin(e, user.email)} className={styles.btn} key={user.id} >Sacar Admin </button>}

                                    </TableCell>
                                </TableRow>
                            )) :
                            <TableCell component="th" scope="row"> Aún no hay Usuarios </TableCell>}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <TablePagination sx={{marginTop: '1vw'}}
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

export default Users