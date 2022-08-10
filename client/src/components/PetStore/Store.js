import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from '@auth0/auth0-react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Swal from 'sweetalert2';

import { getAllProducts, updateUser, storeFilters } from "../../redux/actions";

import ProductCard from './ProductCard/ProductCard.jsx';
import SearchBar from "./SearchBar";
import ShoppingCart from "./ShoppingCart";
import Footer from "../Footer/Footer";
import PaginateStore from "./PaginateStore";

import styles from "./Store.module.css";


export default function Store() {

  const { isAuthenticated } = useAuth0();

  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const products = useSelector((state) => state.allProductsFiltered);
  const allProducts = useSelector((state) => state.allProducts);
  const { pages } = useSelector((state) => state.productsFilterd);
  const cart = useSelector(state => state.cart);
  const productsId = cart.map(product => product.id);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllProducts());
  }, [dispatch]);


  function updatePoints() {
    let actualPoints = user.points;
    let totalCompra = ShoppingCart.total;
    let totalItems = ShoppingCart.data;

    let newBalance = actualPoints - totalCompra

    if (totalItems < 1) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Parece que aun no has añadido nada a tu carrito!',
      })
    }
    else if (newBalance > 0) {
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
            dispatch(updateUser({ points: newBalance, products: productsId }, user.email)),
            setTimeout(() => window.location.reload(), 5000)

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
    } else {
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

  function handleFilterByPrice(e) {
    setFilterByPrice(e.target.value)
    dispatch(storeFilters(e.target.value, filterByType, filterByCategory))
  }

  function handleFilterByType(e) {
    setFilterByType(e.target.value)
    dispatch(storeFilters(filterByPrice, e.target.value, filterByCategory))
  }

  function handleFilterByCategory(e) {
    setFilterByCategory(e.target.value)
    dispatch(storeFilters(filterByPrice, filterByType, e.target.value))
  }

  function handleAll(e) {
    setFilterByPrice("")
    setFilterByType("")
    setFilterByCategory("")
    dispatch(getAllProducts())
  }

  //Contadores
  const countTodos = allProducts
  const countPerros = allProducts.filter(p => p.type === "Perro" || p.type === "Todos")
  const countGatos = allProducts.filter(p => p.type === "Gato" || p.type === "Todos")

  const countAlimentos = allProducts.filter(p => p.category === "Alimento")
  const countIndumentaria = allProducts.filter(p => p.category === "Indumentaria")
  const countJuguetes = allProducts.filter(p => p.category === "Juguetes")
  const countAccesorios = allProducts.filter(p => p.category === "Accesorios")

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.sidebar}>
        <div className={styles.containerCart}>
        {isAuthenticated?<button type="button" className={styles.shoppingcart} data-bs-toggle="modal" data-bs-target="#exampleModal">
        <ShoppingCartIcon sx={{ fontSize:'50px'}}/>
        </button>:null}        


          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog ">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Carrito de compras</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className={styles.mainmodal}>
                  <ShoppingCart />
                </div>
                <div className={styles.modalfooter}>
                  <button type="button" className="" data-bs-dismiss="modal">Seguir comprando</button>
                  <button type="button" className="" onClick={updatePoints}>Finalizar Compra</button>
                </div>
              </div>
            </div>
          </div>
        </div>  
          <div className={styles.searchbar}>
            <SearchBar />
          </div>
          <div className={styles.typefilters}>
            <div>
              <h2>TIPO DE HUELLA</h2>
              <select onClick={handleFilterByType} name="type" size={3}>
                <option value='Perro'>Perros ({countPerros.length})</option>
                <option value='Gato'>Gatos ({countGatos.length})</option>
              </select>
            </div>
          </div>
          <div className={styles.categoryfilters}>
            <h2>CATEGORÍA</h2>
            <select onClick={handleFilterByCategory} name="category" size={5}>
              <option value='Alimento'>Alimentos ({countAlimentos.length})</option>
              <option value='Indumentaria'>Indumentaria ({countIndumentaria.length})</option>
              <option value='Juguetes'>Juguetes ({countJuguetes.length})</option>
              <option value='Accesorios'>Accesorios ({countAccesorios.length})</option>
            </select>
            <select onClick={handleAll} name="type" size={2}>
              <option value='Unordered'>Todos ({countTodos.length})</option>
            </select>
          </div>
        </div>

        <div className={styles.containeritems}>
          <h2>¡Encontrá los mejores productos para tu huella!</h2>
          <div className={styles.orders}>
            <label>Ordenar por:</label>
            <select defaultValue='Huellitas' onChange={e => handleFilterByPrice(e)}>
              <option disabled value='Huellitas'>Huellitas</option>
              <option value='High'>Mayor puntaje</option>
              <option value='Low'> Menor puntaje</option>
            </select>
          </div>
          <div className={styles.items}>
            {
              pages ?
                pages.map((product) => (
                  // <ItemCard
                  //   key={product.id}
                  //   id={product.id}
                  //   images={product.images}
                  //   name={product.name}
                  //   points={new Intl.NumberFormat().format(product.points)}
                  //   type={product.type}
                  //   category={product.category}/>
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    images={product.images}
                    name={product.name}
                    points={new Intl.NumberFormat().format(product.points)}
                    type={product.type}
                    category={product.category}
                    desc = {product.description}
                  />
                ))
                :
                <h2>Pensando..</h2>
            }

          </div>
          <PaginateStore />
        </div>
      </div>
      <Footer />
    </div>
  );
}