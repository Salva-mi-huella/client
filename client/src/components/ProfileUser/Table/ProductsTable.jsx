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

      <h3 className={styles.requestTableTitle}> Tabla de productos </h3>

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
        <TableContainer component={Paper}
          style={{ boxShadow: '0px, 13px, 20px, 0px #80808029', height: '85%', width: '80%', border: '1px solid black' }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead >
              <TableRow sx={styles.TableRow} >

                <TableCell align='left'>Nombre </TableCell>
                <TableCell align="left">Huellitas</TableCell>
                <TableCell align="left">Categoria</TableCell>
                <TableCell align="left">Fecha</TableCell>

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

                  <TableCell className={styles.tableCell} align="left">{p.name}</TableCell>
                  <TableCell className={styles.tableCell} align="left">{p.points}</TableCell>
                  <TableCell className={styles.tableCell} align="left">{p.category}</TableCell>
                  <TableCell className={styles.tableCell} align="left">{p.post_date}</TableCell>

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