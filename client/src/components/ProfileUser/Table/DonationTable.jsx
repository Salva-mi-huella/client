import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './DonationTable.css'

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

export default function DonationTable({userDetail}) {
    /* const dispatch=useDispatch()

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);


    useEffect(() => { 
        dispatch(getRequestsAdopt())
     }, [])

     let requests = useSelector(state => state.requests_adopt);

     requests = requests.filter(r => r.userId === userId)

     console.log(requests, 'hola')

     const emptyRows = (rowsPerPage - Math.min(rowsPerPage, requests?.length - page * rowsPerPage)); */


    return (
        <div className={styles.tableRequests}>

     
      <h3 className={styles.requestTableTitle}> Tabla de donaciones </h3>

      <TableContainer component={Paper}
        style={{ boxShadow: '0px, 13px, 20px, 0px #80808029', height: '85%' }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead >
            <TableRow sx={styles.TableRow} >
              <TableCell align='left'>Fundacion </TableCell>
              <TableCell align='left'>Importe </TableCell>
              <TableCell align="left">Huellitas</TableCell>
              <TableCell align="left">Metodo</TableCell>
              <TableCell align="left">Fecha</TableCell>
              
             {/*  <TableCell align="left">Status</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {userDetail.donations?.length > 0 && userDetail.donations.map((d) => (
                <TableRow
                  key={d.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  {/* <TableCell component="th" scope="row">
                    <img className={styles.petImg} src={r.pet.images[0]} />
                    {r.pet.name}
                  </TableCell> */}
                  <TableCell className={styles.tableCell} align="left">{d.foundationId}</TableCell>
                  <TableCell className={styles.tableCell} align="left">{`${d.amount} usd`}</TableCell>
                  <TableCell className={styles.tableCell} align="left">{d.points}</TableCell>
                  <TableCell className={styles.tableCell} align="left">{d.method.toUpperCase()}</TableCell>
                  <TableCell className={styles.tableCell} align="left">{d.date}</TableCell>
                 {/*  <TableCell className={styles.tableCell} align="left">
                    
                   
                    <select
                      onChange={(e) => { console.log('Request status: ', e.target.value) }}
                      style={makeStyles()}
                    
                    >

                      <option
                        value={"Rechazado"}
                        className="status"
                       
                        style={makeStyles("Rechazado")}
                        disabled
                      > Rechazado
                      </option>

                      <option
                        value={"Aprobado"}
                        className="status"
                        style={makeStyles("Aprobado")}
                        disabled
                      > Aprobado
                      </option>

                      <option
                        hidden selected
                        className="status"
                        style={makeStyles("Pendiente")}
                        disabled
                      >
                        Pendiente
                        
                      </option>

                    </select>

                  </TableCell> */}
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

    </div>
    );
}
