import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, updateUser } from "../../redux/actions";
import ItemCard from "./ItemCard";
import SearchBar from "./SearchBar";
import styles from "./Store.module.css";
import ReactPaginate from "react-paginate";
import ShoppingCart from "./ShoppingCart";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Swal from 'sweetalert2';
import { useAuth0 } from '@auth0/auth0-react';



export default function Store() {

    const {isAuthenticated} = useAuth0();

    
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    const products = useSelector((state) => state.allProducts);
    

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);


  function updatePoints(){  
        let actualPoints = user.points;
        let totalCompra = ShoppingCart.total;

        let newBalance = actualPoints - totalCompra
        
        if(newBalance > 0){
        
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Seguro quieres canjear estos productos?',
            text: "Despues de esto no hay marcha atras!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Canjear productos!',
            cancelButtonText: 'Cancelar canje!',
            reverseButtons: true,
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                  'Canje exitoso!',
                  `Tus productos fueron canjeados, te avisaremos para coordinar el envio. Tu nuevo saldo de huellitas es ${newBalance}`,
                  'success',
                  dispatch(updateUser({points:newBalance}, user.email)),
                  setTimeout(()=> window.location.reload(),5000) 
                  
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelado',
                'Canje cancelado :)',
                'error'
              )
            }
          })
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Parece que no tienes huellitas suficientes para este canje! :(',
              })
        }
  
  }

  //Paginado
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 6;
  const pagesVisited = pageNumber * productsPerPage;

  const displayProducts = products
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product) => {
      return (
        <ItemCard
          key={product.id}
          id={product.id}
          images={product.images}
          name={product.name}
          points={new Intl.NumberFormat().format(product.points)}
        />
      );
    });

  const pageCount = Math.ceil(products.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className={styles.main}>
      <div className={styles.sidebar}>
        <div>
          <SearchBar />
        </div>
      </div>

      <div className={styles.containeritems}>
        <h5>¡Encontrá los mejores productos para tu huella!</h5>
        <div className={styles.items}>{displayProducts}</div>
        <div className={styles.pagination}>
          <ReactPaginate
            previousLabel={"Anterior"}
            nextLabel={"Siguiente"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={styles.paginate}
            pageClassName={styles.pagbuttons}
            previousLinkClassName={styles.prevnext}
            nextLinkClassName={styles.prevnext}
            disabledClassName={"paginationDisabled"}
            activeLinkClassName={styles.activebuttons}
          ></ReactPaginate>
        </div>
      </div>

      <div>
      
      {isAuthenticated?<button type="button" class={styles.shoppingcart} data-bs-toggle="modal" data-bs-target="#exampleModal">
<ShoppingCartIcon sx={{color: 'yellow'}}/>
</button>:null}


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog ">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Carrito de compras</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className={styles.mainmodal}>
        <ShoppingCart/>
      </div>
      <div class={styles.modalfooter}>
        <button type="button" class="" data-bs-dismiss="modal">Seguir comprando</button>
        <button type="button" class="" onClick={updatePoints}>Finalizar Compra</button>
      </div>
    </div>
  </div>
</div>
       
        
      </div>
    </div>
  );
}
