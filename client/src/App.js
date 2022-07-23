import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import AdoptionForm from './components/AdoptionForm/AdoptionForm'
import PetDetail from './components/PetDetail/PetDetail';
import Adopt from './components/Adopt/Adopt'
import { Foundation } from './components/Foundation/Foundation';
import Profile from './components/Profile/Profile';
import AboutUs from './components/About us/AboutUs';
import Donate from './components/Donate/Donate';
import Payment from './components/Donate/Payment';
import Store from './components/Donate/Payment';
import News from './components/Donate/Payment';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import axios from 'axios';


axios.defaults.baseURL = "http://localhost:4000";



function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/'> <Home/> </Route>
        <Route exact path='/home'> <Home/></Route>
        <Route exact path='/huella/:id'> <PetDetail/></Route>
        <Route exact path='/nosotros' component={AboutUs} />
        <Route exact path='/perfil'> <Profile/></Route>
        <Route exact path='/fundacion/:foundationId' component={Foundation} />
        <Route exact path='/adoptar' component={Adopt} />
        <Route exact path='/donar'> <Donate/></Route>
        <Route exact path='/pago'> <Payment/></Route>
        <Route exact path='/formularioadopcion'  component={AdoptionForm}/>
        <Route exact path='/tienda'> <Store/></Route>
        <Route exact path='/noticias'> <News/></Route>
        <Route exact path='/contacto' component={Contact} />
        <Route exact path='*' component={NotFound}/>
      </Switch>
    </React.Fragment>
  );
}


export default App;


