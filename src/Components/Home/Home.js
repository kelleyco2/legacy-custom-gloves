import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import logo2 from '../../Assets/Logos/LCG-finals-09.png'
import logo3 from '../../Assets/Logos/LCG-finals-10.png'
import logo4 from '../../Assets/Logos/LCG-finals-11.png'
import logo5 from '../../Assets/Logos/LCG-finals-12.png'

import './home.css';


export default class Home extends Component{
    
   

    render(){
        
    return (
    <div>
        <div className='mainbannerhome'>
            <div className='banner1'>
                 {/* <img className="logo_home1"src={logo2} alt="logo"></img> */}
                 {/* <img className="logo_home1"src={logo3} alt="logo"></img> */}
                 {/* <img className="logo_home1"src={logo4} alt="logo"></img> */}
                 <img className="logo_home1"src={logo5} alt="logo"></img>
                <h1 className='title-banner1'>start yours...</h1>
            </div>
        </div>   
        <div className='subbannershome'>
            <div className='banner2'>
                <h1 className='titlehome'>See What Gloves We Have in Stock.</h1>
                <Button variant="contained" color="primary" className="homebutton">Shop Inviontory</Button>
            </div>        
            <div className='banner3'>
                <h1 className='titlehome'>Need Inspiration?</h1>
                <p className='ptaghome'>Browse our gallary to see designs from other customers like you.</p>
                <Button variant="contained" color="primary" className="homebutton">View Gallary</Button>
            </div>
        </div>
    </div>    
    );
  }
}

    //    <h1>Home</h1>
    