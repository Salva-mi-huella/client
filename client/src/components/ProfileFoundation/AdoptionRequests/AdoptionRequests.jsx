import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TablePagination from '@mui/material/TablePagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import styles from './AdoptionRequests.module.css'
import { updatePetStatus, updateRequestFoundation } from '../../../redux/actions';



const makeStyles = (status) => {
  if (status === 'Aprobada') {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green'
    }
  }
  else if (status === 'Rechazada') {
    return {
      background: '#ffadad8f',
      color: 'red'
    }
  }
  else if (status === 'Pendiente') {
    return {
      background: '#F1F15B',
      color: 'white'
    }
  }
}


const AdoptionRequests = () => {

  const dispatch = useDispatch();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  const user = JSON.parse(localStorage.getItem('user'));

  let foundation = useSelector(state => state.foundations);
  let requests = useSelector(state => state.requests_adopt);

  if (user) {
    foundation = foundation.find(f => f.email === user.email);
  }

  requests = requests.filter(r => r.foundationId === foundation.id)
  // console.log(requests, 'requests_adopt');


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeSelect = (e, request) => {
    dispatch(updateRequestFoundation(request.id, { status: e.target.value })); 
    if (e.target.value === "Aprobada") {
      dispatch(updatePetStatus(request.petId, { adopted: true }));
    }
  }

  const emptyRows = (rowsPerPage - Math.min(rowsPerPage, requests?.length - page * rowsPerPage));


  return (
    <div className={styles.tableRequests}>

     
      <h3 className={styles.requestTableTitle}> Tabla de solicitudes </h3>

      <TableContainer component={Paper}
        style={{ boxShadow: '0px, 13px, 20px, 0px #80808029', height: '85%' }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead >
            <TableRow sx={styles.TableRow} >
              <TableCell>Huellita </TableCell>
              <TableCell align="left">Usuario</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Teléfono</TableCell>
              <TableCell align="left">Ciudad</TableCell>
              <TableCell align="left">Fecha</TableCell>
              <TableCell align="left">Status</TableCell>
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
                  <TableCell component="th" scope="row">
                    <img className={styles.petImg} alt='pet icon' src={r.pet.images[0]} />
                    {r.pet.name}
                  </TableCell>

                  <TableCell className={styles.tableCell} align="left">{r.user.name}</TableCell>
                  <TableCell className={styles.tableCell} align="left">{r.user.email}</TableCell>
                  <TableCell className={styles.ciudad} align="left" >{r.phone || 'Sin especificar'}</TableCell>
                  <TableCell className={styles.ciudad} align="left" >{r.user.city || 'Sin especificar'}</TableCell>
                  <TableCell className={styles.tableCell} align="left">01/08/2022</TableCell>
                  <TableCell className={styles.tableCell} align="left">

                    {/* <span className={styles.status} style={makeStyles('Pendiente')} > Pendiente </span> */}
                    {/* REQUEST STATUS */}
                    <select
                      onChange={(e) => { handleChangeSelect(e, r) }}
                      style={makeStyles(r.status)}
                      defaultValue={r.status}
                    >

                      <option
                        value={"Rechazada"}
                        className="status"
                        // style={makeStyles(r.adopted)}
                        style={makeStyles("Rechazado")}
                      > Rechazada
                      </option>

                      <option
                        value={"Aprobada"}
                        className="status"
                        style={makeStyles("Aprobada")}
                      > Aprobada
                      </option>

                      <option
                        hidden selected
                        value={"Pendiente"}
                        className="status"
                        style={makeStyles("Pendiente")}
                      >
                        Pendiente
                        {/* {r.adopted ? 'Aprobado' : 'Pendiente'} */}
                      </option>

                    </select>




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
          className={styles.pagination}
          component="div"
          count={foundation.request_adopts.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[10]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />


      </TableContainer>



    </div>
  )
}

export default AdoptionRequests;