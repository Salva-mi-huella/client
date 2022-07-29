import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useAuth0 } from '@auth0/auth0-react';

import TablePagination from '@mui/material/TablePagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './InfoPets.css';
import { getFoundations } from '../../../redux/actions';


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
    // else if (status === 'Pendiente') {
    //     return {
    //         background: '#59bfff',
    //         color: 'white'
    //     }
    // }
}

const InfoPets = () => {

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
        rowsPerPage - Math.min(rowsPerPage, foundation.length - page * rowsPerPage);

    return (
        // <div className='infoPets' >Aca vamos a desplegar una tabla que contiene la info de todos los pets de la fundacion,
        //     su estado de adopcion y los botones del estado ( available / unavailable )
        // </div>

        <div className="Table">
            <h3 className="h3"> Tabla de Animales </h3>
            <TableContainer component={Paper}
                style={{ boxShadow: '0px, 13px, 20px, 0px #80808029', height: '80%' }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Huellita </TableCell>
                            <TableCell align="left">Fecha de alta</TableCell>
                            <TableCell align="left">Tipo</TableCell>
                            <TableCell align="left">Genero</TableCell>
                            <TableCell align="left">Edad</TableCell>
                            <TableCell align="left">Status</TableCell>
                            {/* <TableCell align="left">Actions</TableCell> */}
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
                                        <img className='petImg' src={row.images[0]} />
                                        {row.name}

                                    </TableCell>
                                    <TableCell align="left">{row.post_date}</TableCell>
                                    <TableCell align="left">{row.type}</TableCell>
                                    <TableCell align="left">{row.gender}</TableCell>
                                    <TableCell align="left">{row.age}</TableCell>

                                    {/* ADOPTION STATUS */}
                                    <TableCell align="left">
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

                                        </select>

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

export default InfoPets