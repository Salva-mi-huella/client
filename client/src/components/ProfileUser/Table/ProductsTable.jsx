import * as React from 'react';

import { Link } from 'react-router-dom';

import TablePagination from '@mui/material/TablePagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import styles from './DonationTable.module.css'

import adopt from "../../../assets/dog-adopt5.png";


export default function ProductsTable({ userDetail, foundations }) {

  const products = userDetail.products;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const emptyRows = (rowsPerPage - Math.min(rowsPerPage, products?.length - page * rowsPerPage));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className={styles.tableRequests}>

    {products?.length > 0 &&<h3 className={styles.requestTableTitle}>Mis productos</h3>}

      {products?.length === 0 ?
        <div className={styles.empty}>
          <div>
            <h3>No has canjeado productos aún.</h3>
            <Link to="/tienda">
              <button>Quiero canjear</button>
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

                <TableCell sx={{ color: 'rgb(99, 59, 218)', fontWeight: '700', fontSize: '1.1vw' }} align='left'>Nombre </TableCell>
                <TableCell sx={{ color: 'rgb(99, 59, 218)', fontWeight: '700', fontSize: '1.1vw' }} align="left">Huellitas</TableCell>
                <TableCell sx={{ color: 'rgb(99, 59, 218)', fontWeight: '700', fontSize: '1.1vw' }} align="left">Categoria</TableCell>
                <TableCell sx={{ color: 'rgb(99, 59, 218)', fontWeight: '700', fontSize: '1.1vw' }} align="left">Fecha</TableCell>

                {/*  <TableCell align="left">Status</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {userDetail.products?.length > 0 && userDetail.products.map((p) => (
                <TableRow
                  key={p.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  {/* <TableCell component="th" scope="row">
                    <img className={styles.petImg} src={r.pet.images[0]} />
                    {r.pet.name}
                  </TableCell> */}

                  <TableCell sx={{color:'black', fontWeight:'500'}} align="left">{p.name}</TableCell>
                  <TableCell sx={{color:'black', fontWeight:'500'}}align="left">{p.points}</TableCell>
                  <TableCell sx={{color:'black', fontWeight:'500'}} align="left">{p.category}</TableCell>
                  <TableCell sx={{color:'black', fontWeight:'500'}} align="left">{p.post_date}</TableCell>

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
            count={products?.length}
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