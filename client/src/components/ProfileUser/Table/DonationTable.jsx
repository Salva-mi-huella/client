import * as React from 'react';

import TablePagination from '@mui/material/TablePagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import styles from './DonationTable.module.css';
import adopt from "../../../assets/dog-adopt5.png";

import { Link } from 'react-router-dom';


export default function DonationTable({ userDetail, allDonations }) {

  let user = userDetail.donations;

  console.log(allDonations, 'AllDonations');
  console.log(userDetail, 'userDetail');

  if (user) {
    allDonations = allDonations.filter(donation => donation.userId === userDetail.id);
    console.log(allDonations, 'allDonations filtrado');
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

  const emptyRows = (rowsPerPage - Math.min(rowsPerPage, allDonations?.length - page * rowsPerPage));

  return (
    <div className={styles.tableRequests}>

      {allDonations.length > 0 && <h1 className={styles.requestTableTitle}> Mis donaciones </h1>}


      {allDonations.length === 0 ?
        <div className={styles.empty}>
          <div>
            <h3>No has hecho donaciones aún.</h3>
            <Link to="/donar">
              <button>Quiero donar</button>
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
                <TableCell align='left'>Fundacion </TableCell>
                <TableCell align='left'>Importe </TableCell>
                <TableCell align="left">Huellitas</TableCell>
                <TableCell align="left">Metodo</TableCell>
                <TableCell align="left">Fecha</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {allDonations?.length > 0 && allDonations
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((d) => (
                  <TableRow
                    key={d.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell className={styles.tableCell} align="left">{d.foundation.name}</TableCell>
                    <TableCell className={styles.tableCell} align="left">{`${d.amount} usd`}</TableCell>
                    <TableCell className={styles.tableCell} align="left">{d.points}</TableCell>
                    <TableCell className={styles.tableCell} align="left">{d.method.toUpperCase()}</TableCell>
                    <TableCell className={styles.tableCell} align="left">{d.date}</TableCell>

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
            count={allDonations?.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[10]}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />

        </TableContainer>}

    </div>
  );
}
