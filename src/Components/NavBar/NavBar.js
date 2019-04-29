import React from 'react'
import './navbar.css';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import logo from '../../Assets/Logos/blackLogo.png'
import cart from '../../Assets/Logos/cart.svg'

export default function Navbar(){
    return (
 <div className="Navbar">
   <div>
       <Link to='/'><img className="logo_nav"src={logo} alt="logo"></img></Link> 
   </div>

        <Link to='/'><Button className='navbutton'>home</Button></Link>
        <Link to='/custom'><Button className='navbutton'>Customize</Button></Link>
        <Link to='/shop'><Button className='navbutton'>Shop stock</Button></Link>
        <Link to='/contact'><Button className='navbutton'>CONTACT us</Button></Link>

    <div>
        <Link to='/cart'><img className="cart_nav" src={cart} alt="cart"></img></Link> 
    </div>
 </div>  
    )
}