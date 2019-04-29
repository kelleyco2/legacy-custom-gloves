import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import Custom from './Components/Custom/Custom'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'
import Shop from './Components/Shop/Shop'
import Cart from './Components/Cart/Cart'
import { Switch, Route } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <div className="App" >
        <div className="Navbar">
            <NavBar/>
        </div>
        <div  className="appPage">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/custom' component={Custom}/>
            <Route path='/shop' component={Shop}/>
            <Route path='/cart' component={Cart}/>
          </Switch>
        </div>
            <Footer/>
      </div>
     
    );
  }
}

export default App;