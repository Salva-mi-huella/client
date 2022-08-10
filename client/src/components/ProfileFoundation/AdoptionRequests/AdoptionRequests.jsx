import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import emailjs from 'emailjs-com';

import TablePagination from '@mui/material/TablePagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import styles from './AdoptionRequests.module.css'
import { updatePetStatus, updateRequestAdopt, updateUser } from '../../../redux/actions';
import Swal from 'sweetalert2';



const makeStyles = (status) => {
  if (status === 'Aprobada') {
    return {
      background: 'rgb(145 254 159 / 57%)',
      color: 'black',
    }
  }
  else if (status === 'Rechazada') {
    return {
      background: '#ffadad8f',
      color: 'black'
    }
  }
  else if (status === 'Pendiente') {
    return {
      background: '#F1F15B',
      color: 'black'
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
    if (e.target.value === 'Aprobada') {
      Swal.fire({
        title: `¿Estás seguro de que ${r.pet.name} ha sido adoptad@ por ${r.name} ${r.lastname} ?`,
        text: "Esto impactaría en los puntos del usuario.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          emailjs.send('service_h2hpe6c', 'template_aaiedce', r, 'VYEG6lTjXQeDRaF3J')
            .then((result) => {
              console.log(result);
            }, (error) => {
              console.log(error.text);
            });
          Swal.fire({
            title: `Solicitud aprobada con éxito`,
            text: "¡Felicitaciones por salvar otra huella!",
            icon: 'success',
          }
          )
          dispatch(updateRequestAdopt(r.id, { status: 'Aprobada' }));
          dispatch(updatePetStatus(r.petId, { adopted: true }))
          if (r.user) {
            dispatch(updateUser({ points: r.user.points + 2000 }, r.user.email));
          }
        }
      })
    }
    else {
      Swal.fire({
        title: `¿Estás seguro de rechazar la solicitud ?`,
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
            title: 'Solicitud rechazada con éxito!',
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

      <TableContainer className={styles.cont} component={Paper}            style={{
                    boxShadow: '0px, 13px, 20px, 0px #80808029',
                    height: '90%',
                    marginTop: '2%',
                    border: '1px solid gray'
                }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead >
            <TableRow sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.067)' }}>
              <TableCell sx={{ color: 'rgb(99, 59, 218)', fontWeight: '700', fontSize: '1.1vw' }} >Huella </TableCell>
              <TableCell sx={{ color: 'rgb(99, 59, 218)', fontWeight: '700', fontSize: '1.1vw' }} align="left">Nombre</TableCell>
              <TableCell sx={{ color: 'rgb(99, 59, 218)', fontWeight: '700', fontSize: '1.1vw' }} align="left">Email</TableCell>
              <TableCell sx={{ color: 'rgb(99, 59, 218)', fontWeight: '700', fontSize: '1.1vw' }} align="left">Teléfono</TableCell>
              <TableCell sx={{ color: 'rgb(99, 59, 218)', fontWeight: '700', fontSize: '1.1vw' }} align="left">Ciudad</TableCell>
              <TableCell sx={{ color: 'rgb(99, 59, 218)', fontWeight: '700', fontSize: '1.1vw' }} align="left">Fecha</TableCell>
              <TableCell sx={{ color: 'rgb(99, 59, 218)', fontWeight: '700', fontSize: '1.1vw' }} align="left">Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests?.length ? requests
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((r) => (
                <TableRow className={styles.row} key={r.name} sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
                >
                  <TableCell component="th" scope="row" sx={{width: '10vw', display: 'flex'}}>
                    <img className={styles.petImg} alt='pet icon' src={r.pet?.images[0]} />
                    {r.pet?.name}
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
                      className={styles.statusSelect}
                    >
                      {/* <option disabled value="Pendiente">Pendiente</option> */}

                      <option
                        value={"Rechazada"}
                        className="status"
                        // style={makeStyles(r.adopted)}
                        style={makeStyles("Rechazada")}
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
              )) :<TableCell component="th" scope="row"> Aún no has recibido solicitudes de adopción. </TableCell>}
            {emptyRows > 0 && (
              <TableRow style={{ height: 62.5 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>

        <TablePagination
          sx={{ justifyContent: 'center', alignSelf: 'center', flex: 'center', marginTop: '19px', textAlign: 'center', }}
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