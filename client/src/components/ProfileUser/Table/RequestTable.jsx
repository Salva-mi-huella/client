import React from 'react';

import TablePagination from '@mui/material/TablePagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import styles from './RequestTable.module.css'
import adopt from "../../../assets/dog-adopt5.png";
import { Link } from 'react-router-dom';


export default function RequestTable({ userId, foundations, userDetail, allRequests }) {

  let request = allRequests;
  // console.log(request, 'Request');
  // const request = userDetail.request_adopts

  if (userId) {
    request = request.filter(r => r.userId === userId)
    // console.log(request, 'Request filtered');
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

  const emptyRows = (rowsPerPage - Math.min(rowsPerPage, request?.length - page * rowsPerPage));

  return (
    <div className={styles.tableRequests}>

    {request?.length > 0 && <h1 className={styles.requestTableTitle}> Mis solicitudes </h1>}

      {request?.length === 0 ?
        <div className={styles.empty}>
          <div>
            <h3>No tienes ninguna solicitud aún.</h3>
            <Link to="/adoptar">
              <button>Quiero adoptar</button>
            </Link>
          </div>
          <img className={styles.adoptMe} src={adopt} alt='adoptMe'></img>
        </div>
        :
        <TableContainer component={Paper} sx={{border: "1px solid #e5e5e5" }}
        style={{  background:"transparent",maxHeight: '60vh', maxWidth: '70vw' }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead >
              <TableRow sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.067)' }} >
                <TableCell sx={{ color: 'rgb(99, 59, 218)', fontWeight: '700', fontSize: '1.1vw' }}align="left">Huellita </TableCell>
                <TableCell sx={{ color: 'rgb(99, 59, 218)', fontWeight: '700', fontSize: '1.1vw' }}align="left">Fundacion</TableCell>
                <TableCell sx={{ color: 'rgb(99, 59, 218)', fontWeight: '700', fontSize: '1.1vw' }}align="left">Fecha</TableCell>
                <TableCell sx={{ color: 'rgb(99, 59, 218)', fontWeight: '700', fontSize: '1.1vw' }}align="left">Estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {request && request
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((r) => (
                  <TableRow
                    key={r.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >

                    <TableCell sx={{color:'black', fontWeight:'500'}}  align="left">{r.pet.name}</TableCell>
                    <TableCell sx={{color:'black', fontWeight:'500'}}  align="left">{r.foundation.name}</TableCell>
                    <TableCell sx={{color:'black', fontWeight:'500'}}  align="left">{r.post_date}</TableCell>
                    <TableCell sx={{color:'black', fontWeight:'500'}}  align="left">{r.status} </TableCell>
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
            count={request?.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[10]}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      }

    </div>
  );
}


