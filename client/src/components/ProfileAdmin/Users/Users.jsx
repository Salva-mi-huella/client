import React from 'react';
import './Users.css';
import {  useDispatch, useSelector } from 'react-redux';
import {getUsers} from "../../../redux/actions"
import { useEffect, useState  } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'

const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

    useEffect(() => { 
        dispatch(getUsers())
     },[dispatch])

    const [Block, setBlock] = useState(false)


     function makeStyles (transit) {
        if (transit === "Si") {
            return {
                /* icon: MdCheckCircleOutline, */
                // background: 'rgb(145 254 159 / 47%)',
                color: 'green'
            }
        }
        else if (transit === "No") {
            return {
                /* icon: MdDangerous, */
               /*  background: '#ffadad8f', */
                color: 'red'
            }
        }

    }

    function handleBlock(e){
        e.preventDefault()
        setBlock(true)
    }

    return (
        <div className='containerUser' >
            <h1>Usuarios:</h1>
            <TableContainer component={Paper}
                style={{ boxShadow: '0px, 13px, 20px, 0px #80808029', }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Usuario</TableCell>
                            <TableCell align="left">Nombre</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">City</TableCell>
                            <TableCell align="left">DNI</TableCell>
                            <TableCell align="left">Teléfono</TableCell>
                            <TableCell align="left">Tránsito</TableCell>
                            <TableCell align="left">Bloquear Usuario</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow
                                key={user.id}>
                                <TableCell component="th" scope="row">
                                    {user.nickname}
                                </TableCell>
                                <TableCell align="left">{user.name}</TableCell>
                                <TableCell align="left">{user.email}</TableCell>
                                <TableCell align="left" className="ciudad">{user.city}</TableCell>
                                <TableCell align="left">{user.dni}</TableCell>
                                <TableCell align="left">{user.telephone_number}</TableCell>
                                <TableCell align="left">
                                <span className="status" style={makeStyles(user.transit)} ><i width="5px" heigth="5px" class="fa-solid fa-circle"></i> </span>
                                </TableCell>
                                <TableCell align="left">
                                    {/* {Block === false ?  <button className='btn' key={user.id}  onClick={handleBlock}>Bloquear</button>  : <button>Desbloquear</button>} */}
                                    <button className='btn' key={user.id} >Bloquear</button>
                                    </TableCell>
                                </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Users