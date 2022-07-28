import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './InfoPets.css';
import { getAllPets } from '../../../redux/actions';

function createData(name, petId, userId, city, date, status) {
    return { name, petId, userId, city, date, status };
}

const makeStyles = (status) => {
    if (status) {
        return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green'
        }
    }
    else if (!status) {
        return {
            background: '#ffadad8f',
            color: 'red'
        }
    }
    else if (status === 'Pendiente') {
        return {
            background: '#59bfff',
            color: 'white'
        }
    }
}

const InfoPets = () => {

    const dispatch = useDispatch();
    const allPets = useSelector(state => state.allPets)

    console.log('all pets', allPets);

    React.useEffect(() => {
        dispatch(getAllPets());
    }, [dispatch])


    return (
        // <div className='infoPets' >Aca vamos a desplegar una tabla que contiene la info de todos los pets de la fundacion,
        //     su estado de adopcion y los botones del estado ( available / unavailable )
        // </div>

        <div className="Table">
            <h3> Tabla de Animales </h3>
            <TableContainer component={Paper}
                style={{ boxShadow: '0px, 13px, 20px, 0px #80808029' }}
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
                        {allPets.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.post_date}</TableCell>
                                <TableCell align="left">{row.type}</TableCell>
                                <TableCell align="left" className="ciudad">{row.gender}</TableCell>
                                <TableCell align="left">{row.age}</TableCell>

                                <TableCell align="left">
                                    <span className="status" style={makeStyles(row.adopted)} > {row.status ? 'Adoptado' : 'En adopcion'}</span>
                                    <button> UPDATE </button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default InfoPets