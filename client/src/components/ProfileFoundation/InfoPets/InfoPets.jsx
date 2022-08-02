import * as React from 'react';
import { useSelector } from 'react-redux';


import TablePagination from '@mui/material/TablePagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import styles from './InfoPets.module.css';

const makeStyles = (status) => {
    if (status) {
        return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
            width: '60px',
            justifyContent: 'center',
            textAlign: 'center',
        }
    }
    else if (!status) {
        return {
            background: '#59bfff',
            color: 'white',
            width: '60px',
            justifyContent: 'center',
            textAlign: 'center',
        }
    }
}

const InfoPets = () => {

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

    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, foundation?.pets.length - page * rowsPerPage);

    return (
        <div className={styles.tablePets}>

            <h3 className={styles.petTitle}> Tabla de Animales </h3>

            <TableContainer component={Paper}
                style={{ boxShadow: '0px, 13px, 20px, 0px #80808029', height: '85%' }}
            >
                <Table sx={{ minWidth: 650, }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Huellita </TableCell>
                            <TableCell align="left">Tipo</TableCell>
                            <TableCell align="left">Genero</TableCell>
                            <TableCell align="left">Edad</TableCell>
                            <TableCell align="left">Fecha de alta</TableCell>
                            <TableCell align="left">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {foundation.pets && foundation.pets
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <img className={styles.petImg} src={row.images[0]} />
                                        {row.name}
                                    </TableCell>

                                    <TableCell className={styles.tableCell} align="left">{row.type}</TableCell>
                                    <TableCell className={styles.tableCell} align="left">{row.gender}</TableCell>
                                    <TableCell className={styles.tableCell} align="left">{row.age}</TableCell>
                                    <TableCell className={styles.tableCell} align="left">{row.post_date}</TableCell>

                                    {/* ADOPTION STATUS */}
                                    <TableCell align="left">

                                        <span className={styles.status} style={makeStyles(row.adopted)}> {row.adopted ? 'Adoptado' : 'En adopcion'}</span>

                                        {/* 
                                        <select
                                            onChange={(e) => { console.log('Me adoptaron?', e.target.value) }}
                                            // defaultValue={row.adopted ? 'Adoptado' : 'En adopcion'}
                                            style={makeStyles(row.adopted)}>

                                            <option
                                                value={row.adopted}
                                                className="status"
                                                style={makeStyles(row.adopted)}
                                            > Adoptado
                                            </option>

                                            <option
                                                value={!row.adopted}
                                                className="status"
                                                style={makeStyles(row.adopted)}
                                            > En adopcion
                                            </option>

                                            <option hidden selected>
                                                {row.adopted ? 'Adoptado' : 'En adopcion'}
                                            </option>

                                        </select> */}

                                        {/* <span className="status" style={makeStyles(row.adopted)} >
                                        {row.status ? 'Adoptado' : 'En adopcion'}
                                    </span> */}
                                        {/* <button className='updateBtn' >
                                        <MdEdit className='icon' />
                                    </button> */}

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