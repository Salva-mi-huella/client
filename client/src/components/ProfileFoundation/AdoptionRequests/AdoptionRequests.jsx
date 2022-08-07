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
import { updateRequestAdopt, updateUser } from '../../../redux/actions';
import Swal from 'sweetalert2';



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

  const handleChangeSelect = (e, r) => {
    if(e.target.value === 'Aprobada'){
    Swal.fire({
      title:`¿Estás seguro de que ${r.pet.name} ha sido adoptad@ por ${r.name} ${r.lastname} ?`,
      text: "Esto impactaría en los puntos del usuario.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title:`Solicitud aprobada con éxito`,
          text: "¡Felicitaciones por salvar otra huella!",
          icon: 'success',
        }
          )
            dispatch(updateRequestAdopt(r.id, { status: 'Aprobada' }));
            if (r.user) {
              dispatch(updateUser({points: r.user.points+2000}, r.user.email));
            }
      }
    })
  }
  else {
    Swal.fire({
      title:`¿Estás seguro de rechazar la solicitud ?`,
      text: "Podrás cambiar su estado en el futuro de todas maneras.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(updateRequestAdopt(r.id, { status: 'Rechazada' }));
        Swal.fire({
          title:'Solicitud rechazada con éxito!',
          icon: 'success',
        }
        )
      }
    })
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
              <TableCell>Huella </TableCell>
              <TableCell align="left">Nombre</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Teléfono</TableCell>
              <TableCell align="left">Ciudad</TableCell>
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
                  <TableCell component="th" scope="row">
                    <img className={styles.petImg} alt='pet icon' src={r.pet.images[0]} />
                    {r.pet.name}
                  </TableCell>

                  <TableCell className={styles.tableCell} align="left">{r.name} {r.lastname}</TableCell>
                  <TableCell className={styles.tableCell} align="left">{r.email}</TableCell>
                  <TableCell className={styles.ciudad} align="left" >{r.phone || 'Sin especificar'}</TableCell>
                  <TableCell className={styles.ciudad} align="left" >{r.user?.city || 'Sin especificar'}</TableCell>
                  <TableCell className={styles.tableCell} align="left">{r.post_date}</TableCell>
                  <TableCell className={styles.tableCell} align="left">

                    {/* <span className={styles.status} style={makeStyles('Pendiente')} > Pendiente </span> */}
                    {/* REQUEST STATUS */}
                    <select
                      onChange={(e) => { handleChangeSelect(e, r) }}
                      style={makeStyles(r.status)}
                      defaultValue={r.status}
                    >
                      <option disabled value="Pendiente">Pendiente</option>

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