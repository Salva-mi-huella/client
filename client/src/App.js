import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
import {Home} from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <Switch>
   <Route path='/'> <NavBar/></Route>
   {/* <Route exact path='/home'> <Home/></Route> */}
   {/* <Route exact path='/huella/:nombreHuella'> <PetDetail/></Route> */}
   {/* <Route exact path='/perfil'> <Profile/></Route> */}
   {/* <Route path='/fundacion/:fundacionId'  component={Foundation}/> */}
   {/* <Route path='/salva-una-huella'  component={Adopt}/> */}
   {/* <Route exact path='/donaciones' component={Donate} /> */}
   {/* <Route exact path='/nosotros' component={About} /> */}
   {/* <Route component={NotFound}  /> */}
    </Switch>
  );
}

export default App;
