import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, updateUser, storeFilters } from "../../redux/actions";
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
    const products = useSelector((state) => state.allProductsFiltered);
    const allProducts = useSelector((state) => state.allProducts);
    

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllProducts());
  }, [dispatch]);


  function updatePoints(){  
        let actualPoints = user.points;
        let totalCompra = ShoppingCart.total;
        let totalItems = ShoppingCart.data;

        let newBalance = actualPoints - totalCompra
        
        if(totalItems < 1){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Parece que aun no has añadido nada a tu carrito!',
          })
        }
        else if(newBalance > 0){
        
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

   //FILTROS
   const [filterByAZ, setFilterByAZ] = useState("");
   const [filterByPrice, setFilterByPrice] = useState("");
   const [filterByType, setFilterByType] = useState("");
   const [filterByCategory, setFilterByCategory] = useState("");

   function handleFilterAZ(e){   
     setFilterByAZ(e.target.value)
     dispatch(storeFilters(e.target.value,filterByPrice,filterByType,filterByCategory))
     setPageNumber(0) 
   }

   function handleFilterByPrice(e){  
     setFilterByPrice(e.target.value)
     dispatch(storeFilters(filterByAZ,e.target.value,filterByType,filterByCategory))
     setPageNumber(0) 
   }

   function handleFilterByType(e){       
    setFilterByType(e.target.value)
    dispatch(storeFilters(filterByAZ,filterByPrice,e.target.value,filterByCategory))
    setPageNumber(0)  
  }

  function handleFilterByCategory(e){       
    setFilterByCategory(e.target.value)
    dispatch(storeFilters(filterByAZ,filterByPrice,filterByType,e.target.value))
    setPageNumber(0)  
  }

  function handleAll(e){
    setFilterByAZ("")
    setFilterByPrice("")
    setFilterByType("")
    setFilterByCategory("")
    dispatch(getAllProducts())
    setPageNumber(0)  
  }



  //PAGINADO
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
          type={product.type}
          category={product.category}
        />
      );
    });

  const pageCount = Math.ceil(products.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  //Contadores
  const countTodos = allProducts
  const countPerros=allProducts.filter(p => p.type === "Perro")
  const countGatos =allProducts.filter(p => p.type === "Gato")

  const countAlimentos = allProducts.filter(p => p.category === "Alimento")
  const countIndumentaria = allProducts.filter(p => p.category === "Indumentaria")
  const countJuguetes = allProducts.filter(p => p.category === "Juguetes")
  const countAccesorios = allProducts.filter(p => p.category === "Accesorios")
  
  return (
    <div className={styles.main}>
      <div className={styles.sidebar}>
        <div className={styles.searchbar}>
          <SearchBar />
        </div>
        <div className={styles.typefilters}>
          <div>
            <h2>Filtros</h2>
            <select onClick={handleAll} name="type" size={2}>
                <option value='Unordered'>Todos ({countTodos.length})</option>
            </select>
          </div>
            <div>
              <h2>Animales</h2>
              <select onClick={handleFilterByType} name="type" size={3}>
                <option value='Perro'>Perros ({countPerros.length})</option>
                <option value='Gato'>Gatos ({countGatos.length})</option>
              </select>            
            </div> 
        </div>
            <div className={styles.categoryfilters}>
              <h2>Categorias</h2>
              <select onClick={handleFilterByCategory} name="category" size={5}>
                <option value='Alimento'>Alimentos ({countAlimentos.length})</option>
                <option value='Indumentaria'>Indumentaria ({countIndumentaria.length})</option>
                <option value='Juguetes'>Juguetes ({countJuguetes.length})</option>
                <option value='Accesorios'>Accesorios ({countAccesorios.length})</option>
              </select>

        </div>
      </div>

      <div className={styles.containeritems}>
        <h5>¡Encontrá los mejores productos para tu huella!</h5>
            <div className={styles.filters}>
                <select onClick={e => handleFilterAZ(e)}>
                    <option value='Unordered'>Orden Alfabetico</option>
                    <option value='Asc'>Ordenar A-Z</option>
                    <option value='Desc'>Ordenar Z-A</option>                    
                </select>

                <select onClick={e => handleFilterByPrice(e)}>
                    <option value='Unordered'>Orden por Precio</option>
                    <option value='High'>Ordenar por Mayor Precio</option>
                    <option value='Low'>Ordenar por Menor Precio</option>                    
                </select>
            </div>
        <div className={styles.items}>{displayProducts}</div>
        <div className={styles.pagination}>
          <ReactPaginate
            previousLabel={"← Anterior"}
            nextLabel={"Siguiente →"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={styles.paginate}
            pageClassName={styles.pagbuttons}
            previousLinkClassName={styles.prevnext}
            nextLinkClassName={styles.prevnext}
            disabledClassName={"paginationDisabled"}
            activeLinkClassName={styles.activebuttons}
            forcePage={pageNumber}
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
