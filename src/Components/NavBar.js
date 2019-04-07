import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(){
    return (
    <div className="Navbar">
        <Link to='/'><button className='navbutton'>HOME</button></Link>
        <Link to='/shop'><button className='navbutton'>SHOP</button></Link>
        <Link to='/custom'><button className='navbutton'>CUSTOM</button></Link>
        <Link to='/contact'><button className='navbutton'>CONTACT</button></Link>
    
        <Link to='/cart'><button className='navbutton'>CART</button></Link> 
    </div>
    )
}