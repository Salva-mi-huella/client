import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getRequestsAdopt} from '../../../redux/actions';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from'./RequestTable.module.css'
import adopt from "../../../assets/dog-adopt5.png";
import {Link } from 'react-router-dom';
/* function createData(name, petId, userId, city, date, status) {
    return { name, petId, userId, city, date, status };
} */

/* const makeStyles = (status) => {
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
} */

export default function RequestTable({userId, foundations, userDetail}) {

    const dispatch=useDispatch()

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    
  const request = userDetail.request_adopts

    useEffect(() => { 
        dispatch(getRequestsAdopt())
     }, [dispatch])

     let requests = useSelector(state => state.requests_adopt);

     requests = requests.filter(r => r.userId === userId)

    return (
        <div className={styles.tableRequests}>

     
      {/* <h1 className={styles.requestTableTitle}> Mis solicitudes </h1> */}
      {request.length === 0 ?
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
      <TableContainer component={Paper}
      style={{ boxShadow: '0px, 13px, 20px, 0px #80808029', height: '85%' }}
      >
      <h1 className={styles.requestTableTitle}> Mis solicitudes </h1>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead >
            <TableRow sx={styles.TableRow} >
              <TableCell>Huellita </TableCell>
              <TableCell align="left">Fundacion</TableCell>
              <TableCell align="left">Fecha</TableCell>
              <TableCell align="left">Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests && requests
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((r) => (
                <TableRow
                  key={r.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  {/* <TableCell component="th" scope="row">
                    <img className={styles.petImg} src={r.pet.images[0]} />
                    {r.pet.name}
                  </TableCell> */}

                  <TableCell className={styles.tableCell} align="left">{r.pet.name}</TableCell>
                  <TableCell className={styles.tableCell} align="left">{foundations.find(f => f.id === r.foundationId).name}</TableCell>
                  <TableCell className={styles.tableCell} align="left">{r.post_date}</TableCell>
                  <TableCell className={styles.tableCell} align="left">{r.status} </TableCell>
                </TableRow>
              ))}
            {/* {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )} */}
          </TableBody>
        </Table>

        {/* <TablePagination
          className={styles.pagination}
          component="div"
          count={foundation.request_adopts.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[10]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      </TableContainer>
}

    </div>
    );
} 


