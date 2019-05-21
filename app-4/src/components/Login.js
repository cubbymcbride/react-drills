import React, { Component } from 'react'

class Login extends Component {
    constructor() {
        super();
        
        this.state = {
        username: "",
        password: ""

        }
        this.handleLogin = this.handleLogin.bind(this);
    }
    
    handleUsernameChange(name) {
        this.setState({
            username: name
        })
    }
    
    handlePasswordChange(pass) {
        this.setState({
            password: pass
        })
    }

    handleLogin() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }
    
    
    render () {
      return (
        <div>
            <input placeholder= "username" onChange = {event => this.handleUsernameChange(event.target.value)} type="text"></input>
            <input placeholder= "password" onChange = {event => this.handlePasswordChange(event.target.value)} type="text"></input>
            <button onClick={this.handleLogin}>Login</button>
        </div>
      )  
    }
}

export default Login