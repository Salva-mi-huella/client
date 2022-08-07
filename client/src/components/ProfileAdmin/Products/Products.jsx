import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, updateProduct } from '../../../redux/actions'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import styles from '../Products/Products.module.css';

const Products = () => {
    const dispatch = useDispatch()
    let products = useSelector(state => state.allProducts)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    function handleChange(e, id) {
        dispatch(updateProduct({ status: e.target.value }, id))
    }
    products = products.filter(prod => prod.status === "Activo")

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const emptyRows = (rowsPerPage - Math.min(rowsPerPage, products.length - page * rowsPerPage));
    return (
        <div className={styles.tableDonations}>
            <h3 className={styles.donationTitle}>Productos:</h3>
            <TableContainer className={styles.cont} component={Paper}
                style={{ boxShadow: '0px, 13px, 20px, 0px #80808029', height: '90%' }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Fecha</TableCell>
                            <TableCell align="left">Nombre</TableCell>
                            <TableCell align="left">Puntos</TableCell>
                            <TableCell align="left">Tipo</TableCell>
                            <TableCell align="left">Categoría</TableCell>
                            <TableCell align="left">Stock</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.length > 0 ? products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((product) => (
                                <TableRow
                                    className={styles.row}
                                    key={product.id}>
                                    <TableCell component="th" scope="row">
                                        {product.post_date}
                                    </TableCell>
                                    <TableCell align="left">{product.name}</TableCell>
                                    <TableCell className={styles.points} align="left">{product.points}</TableCell>
                                    <TableCell align="left">{product.type}</TableCell>
                                    <TableCell align="left">{product.category}</TableCell>
                                    <TableCell align="left">
                                        <select className={styles.select}
                                            onChange={(e) => { handleChange(e, product.id) }}>
                                            <option
                                                value={"Activo"}
                                            > En Stock
                                            </option>

                                            <option
                                                value={"Inactivo"}
                                            > Sin Stock
                                            </option>

                                            <option hidden selected>
                                                {product.status === 'Activo' ? 'En Stock' : 'Sin Stock'}
                                            </option>

                                        </select>

                                    </TableCell>
                                </TableRow>
                            )) :
                            <TableCell component="th" scope="row"> Aún no hay productos </TableCell>}
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
                    count={products.length}
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
export default Products