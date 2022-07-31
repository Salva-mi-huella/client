import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import sad_pets from '../../../assets/sad-pets.png';
import {Link} from 'react-router-dom'

import './DonationTable.css'

const makeStyles = (status) => {
    if (status === 'Aprobado') {
        return {
            background: 'green',
            color: 'azure'
        }
    }
    else if (status === 'Rechazado') {
        return {
            background: 'red',
            color: 'azure'
        }
    }
    else if (status === 'Pendiente') {
        return {
            background: '#59bfff',
            color: 'white'
        }
    }
}

export default function DonationTable({userDetail}) {

    return (
        <div className="Table">
            {userDetail.donations?.length>0 &&<h1 className='titles'> Mis donaciones </h1>}
            {userDetail.donations?.length > 0 ? (
            <TableContainer component={Paper}
                style={{ backgroundColor: 'transparent', width: '90%' }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{color: 'yellow', fontSize:'30px'}}>Fundación</TableCell>
                            <TableCell align="left" sx={{color: 'yellow', fontSize:'30px'}}>Importe</TableCell>
                            <TableCell align="left" sx={{color: 'yellow', fontSize:'30px'}}>Huellitas</TableCell>
                            <TableCell align="left" sx={{color: 'yellow', fontSize:'30px'}}>Fecha</TableCell>
                            <TableCell align="left" sx={{color: 'yellow', fontSize:'30px'}}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody> 
                        {userDetail.donations?.length>0 && userDetail.donations.map((d) => (
                        <TableRow>
                            <TableCell align="left" sx={{color: 'azure', fontSize:'22px'}}>{d.foundationId} </TableCell>
                            <TableCell align="left" sx={{color: 'azure', fontSize:'22px'}}>{`${d.amount} usd`}</TableCell>
                            <TableCell align="left" sx={{color: 'azure', fontSize:'22px'}}>{d.points}</TableCell>
                            <TableCell align="left" sx={{color: 'azure', fontSize:'22px'}}>{d.date} </TableCell>
                            {/* <TableCell align="left" sx={{color: 'azure', fontSize:'22px'}}><span className="status" style={makeStyles(row.status)} >{row.status}</span></TableCell> */}
                        </TableRow>
                                ))  }
                    </TableBody>
                </Table>
            </TableContainer>)
                        :
                        <div className='noDonations'>
                            <h1>No tienes donaciones efectuadas aún</h1>
                            <img src={sad_pets} alt='sad-pets'></img>
                            <Link to='/donar'><button>Quiero donar</button></Link>
                        </div>
                         }
        </div>
    );
}
