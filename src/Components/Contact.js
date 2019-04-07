import React, { Component } from 'react'
// import axios from 'axios'



export default class Location extends Component{
    // constructor(){
    //     super()
    //     this.state = {
    //         name: '',
    //         email: '',
    //         message: ''
    //     }
    // }
    
    // resetForm=()=>{
    //     document.getElementById('contact-form').reset();
    // }

    // handleName = (e) => {
    //     this.setState({name: e.target.value})
    // }

    // handleEmail = (e) => {
    //     this.setState({email: e.target.value})
    // }

    // handleMessage = (e) => {
    //     this.setState({message: e.target.value})
    // }
    
    
    
    // send_Email = () => {
    //     const {name, email, message} = this.state
    //     const newEmail = {name, email, message }
    //     axios.post('/api/email', newEmail).then(results =>{
    //         this.setState({
    //             name: '',
    //             email: '',
    //             message: ''
    //         })
    //         alert ('Message sent')
    //     })
    // }
    

    render(){
    return( 
    <div>   
        <h1>Questions?</h1>
        
        <h1>Let Us Know!</h1>        

        <div>
                <h1>
                    <p>EMAIL:</p>
                     <p>legacycustomgloves@gmail.com</p>
                </h1>
        </div>
                {/* <form id="contact-form">
            <h1>Contact Us</h1>
                    <div>
                        <input type="text" placeholder="name" value={this.state.name} onChange={this.handleName}/>
                    </div>
                    <div>
                        <input type="email" id="email" placeholder="email" value={this.state.email} onChange={this.handleEmail}/>
                    </div>
                    <div>
                        <textarea type="text" rows="5" placeholder="type message here" value={this.state.message} onChange={this.handleMessage}/>
                    </div>
                    <button onClick={this.send_Email}>Send</button>
                </form>     */}
    </div>    
    )
}
}
