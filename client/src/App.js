import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Carousel from './components/Carousel/Carousel'
import AdoptionForm from './components/AdoptionForm/AdoptionForm'
import PetDetail from './components/PetDetail/PetDetail';
import Adopt from './components/Adopt/Adopt'
import { Foundation } from './components/Foundation/Foundation';



function App() {
  return (
    <React.Fragment>
      <Route path='/'> <NavBar/></Route>
      <Route exact path='/home'> <Home/></Route>
      <Route exact path='/huella/:nombreHuella'> <PetDetail/></Route>
      {/* <Route exact path='/perfil'> <Profile/></Route> */}
        <Route path='/fundacion/:foundationId'  component={Foundation}/> {/*Cambiar ruta a fundacion/:foundationId una vez que funcione la action*/}
        <Route path='/adoptar'  component={Adopt}/>
        <Route path='/formularioadopcion'  component={AdoptionForm}/>
      {/* <Route exact path='/donaciones' component={Donate} /> */}
      {/* <Route exact path='/nosotros' component={About} /> */}
      {/* <Route component={NotFound}  /> */}
    </React.Fragment>
  );
}


export default App;

