import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home'
import Contact from './Components/Contact'
import Custom from './Components/Custom'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import Shop from './Components/Shop'
import Cart from './Components/Cart'
import { Switch, Route } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <div className="App" >
        <div className="Navbar">
            <NavBar/>
        </div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/custom' component={Custom}/>
            <Route path='/shop' component={Shop}/>
            <Route path='/cart' component={Cart}/>
          </Switch>
            <Footer/>
      </div>
     
    );
  }
}

export default App;