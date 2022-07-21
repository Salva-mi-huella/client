import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Carousel from './components/Carousel/Carousel'
import PetDetail from './components/PetDetail/PetDetail';
import Adopt from './components/Adopt/Adopt'
import { Foundation } from './components/Foundation/Foundation';
import Profile from './components/Profile/Profile';
import Donate from './components/Donate/Donate';
import Payment from './components/Donate/Payment';



function App() {
  return (
    <React.Fragment>
      <Route path='/'> <NavBar/></Route>
      <Route exact path='/home'> <Home/></Route>
      <Route exact path='/huella/:nombreHuella'> <PetDetail/></Route>
      <Route exact path='/perfil'> <Profile/></Route>
      <Route path='/fundacion/:foundationId' component={Foundation} />
      <Route path='/adoptar' component={Adopt} />
      <Route exact path='/donar'> <Donate/></Route>
      <Route exact path='/pago'> <Payment/></Route>
      {/* <Route exact path='/nosotros' component={About} /> */}
      {/* <Route component={NotFound}  /> */}
    </React.Fragment>
  );
}


export default App;
