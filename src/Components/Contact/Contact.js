import React, { Component } from 'react'
import './contact.css';
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import TextField from '@material-ui/core/TextField'

import axios from 'axios'



export default class Contact extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }
    
    resetForm=()=>{
        document.getElementById('contact-form').reset();
    }

    handleName = (e) => {
        this.setState({name: e.target.value})
    }

    handleEmail = (e) => {
        this.setState({email: e.target.value})
    }

    handleSubject = (e) => {
        this.setState({subject: e.target.value})
    }

    handleMessage = (e) => {
        this.setState({message: e.target.value})
    }
    
    
    
    send_Email = () => {
        const {name, email, message} = this.state
        const newEmail = {name, email, message }
        axios.post('/api/email', newEmail).then(results =>{
            this.setState({
                name: '',
                email: '',
                message: ''
            })
            alert ('Message sent')
        })
    }
    

    render(){
        
    return( 
    <div>   
        <h1>Questions?<br/>Let Us Konw!</h1>
              

            {/* // <h1>Contact Us</h1>
            //         <div>
            //             <input type="text" placeholder="name" value={this.state.name} onChange={this.handleName}/>
            //         </div>
            //         <div>
            //             <input type="email" id="email" placeholder="email" value={this.state.email} onChange={this.handleEmail}/>
            //         </div>
            //         <div>
            //             <textarea type="text" rows="5" placeholder="type message here" value={this.state.message} onChange={this.handleMessage}/>
            //         </div>
        //         <button onClick={this.send_Email}>Send</button> */}
            <form id="contact-form">
                    <div>
                        <TextField 
                            required
                            id="outlined-name" 
                            label="Name" 
                            className="messagemui"                              
                            value={this.state.name} 
                            onChange={this.handleName}
                            margin="normal"
                            variant="outlined"
                            />
                    </div>
                    <div>
                        <TextField
                            required
                            id="outlined-email" 
                            label="Email"
                            className="messagemui" 
                            value={this.state.email} 
                            onChange={this.handleEmail}
                            margin="normal"
                            variant="outlined"
                            />
                    </div>
                    <div>
                        <TextField 
                            id="outlined-subject" 
                            label="Subject" 
                            className="messagemui"
                            value={this.state.subject} 
                            onChange={this.handleSubject}
                            margin="normal"
                            variant="outlined"
                            />
                    </div>
                    <div>
                        <TextField 
                            id="outlined-multiline-static" 
                            label="Message"
                            multiline rows="8"
                            className="messagemui"
                            value={this.state.message} 
                            onChange={this.handleMessage}
                            margin="normal"
                            variant="outlined"
                            />
                    </div>
                    <div>
                        <Button variant="contained" color="primary" onClick={this.send_Email}>
                            Send
                        </Button>
                    </div>
            </form>    
    </div>    
    )
}
}
