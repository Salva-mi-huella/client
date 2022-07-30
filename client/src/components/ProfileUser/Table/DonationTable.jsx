import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './RequestTable.css'

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
            <h1 className='titles'> Mis donaciones </h1>
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
                        {userDetail.donations.length>0 && userDetail.donations.map((d) => (
                        <TableRow>
                            <TableCell align="left" sx={{color: 'azure', fontSize:'22px'}}>{d.foundationId} </TableCell>
                            <TableCell align="left" sx={{color: 'azure', fontSize:'22px'}}>{`${d.amount} usd`}</TableCell>
                            <TableCell align="left" sx={{color: 'azure', fontSize:'22px'}}>{d.points}</TableCell>
                            <TableCell align="left" sx={{color: 'azure', fontSize:'22px'}}>{d.date} </TableCell>
                            {/* <TableCell align="left" sx={{color: 'azure', fontSize:'22px'}}><span className="status" style={makeStyles(row.status)} >{row.status}</span></TableCell> */}
                        </TableRow>
                                ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
