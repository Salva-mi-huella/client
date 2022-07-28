import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import AdoptionForm from './components/AdoptionForm/AdoptionForm'
import PetDetail from './components/PetDetail/PetDetail';
import Adopt from './components/Adopt/Adopt'
import Foundation  from './components/Foundation/Foundation';
import Profile from './components/Profile/Profile';
// import ProfileUser from './components/ProfileUser/ProfileUser';
import AboutUs from './components/About us/AboutUs';
import Donate from './components/Donate/Donate';
import PetStore from './components/PetStore/Store';
import News from './components/Donate/Payment';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import PostNews from './components/Profile/PostNews/PostNews';
import Paypal from './components/Donate/Paypal/Paypal';
import Huellitas from './components/Huellitas/Huellitas';
// import Payment from './components/Donate/Payment';
import axios from 'axios';
import PostPet from './components/PostPet/PostPet';


axios.defaults.baseURL = "http://localhost:4000";



function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/'> <NavBar/> <Home/>  </Route>
        <Route exact path='/home'> <NavBar/> <Home/></Route>
        <Route exact path='/huella/:id'> <NavBar/> <PetDetail/></Route>
        <Route exact path='/nosotros'> <NavBar/> <AboutUs/> </Route>
        <Route exact path='/perfil'> <NavBar/><Profile/></Route>
        <Route exact path='/fundacion/:foundationId'> <NavBar/> <Foundation/> </Route> {/* rompe */}
        <Route exact path='/adoptar'> <NavBar/> <Adopt/> </Route>
        <Route exact path='/donar'> <NavBar/> <Donate/></Route>
        <Route exact path='/pago-paypal'>  <NavBar/> <Paypal/></Route>
        <Route exact path='/formulario-adopcion'> <NavBar/> <AdoptionForm/> </Route>
        <Route exact path='/tienda'> <NavBar/> <PetStore/></Route>
        <Route exact path='/huellitas'> <NavBar/> <Huellitas/></Route>
        <Route exact path='/noticias'> <NavBar/> <News/></Route>
        <Route exact path='/contacto'> <NavBar/> <Contact/> </Route>
        <Route exact path='/formulario-publicar-mascota'> <NavBar/> <PostPet/></Route>
        <Route exact path='/postNews'> <NavBar/> <PostNews/> </Route>

        <Route exact path='*'> <NotFound/></Route>
      </Switch>
    </React.Fragment>
  );
}


export default App;


