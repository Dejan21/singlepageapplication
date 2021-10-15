import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class LogInPage extends Component {
    state = {
        username: "",
        password: "",
        LogIn: "", 
        }

    handleUsername = (e) => {
        this.setState({
            ...this.state,username: e.target.value
        });
    }

        handlePassword = (e) => {
            this.setState({
                ...this.state,password: e.target.value
            });
        }   

        handleSubmit = (e) => {
            e.preventDefault();
            console.log("form submitted");
          };


    render() {
        const {Username, Password, } = this.state;
        return (
            <form className="LogInPage" onSubmit={this.handleSubmit}>
               
                <label htmlFor="username">Username: </label>
            <input
                type="text"
                className="form-control"
                id="username"
                placeholder="username"
                required
                value={Username} onChange={this.handleUsername}
            />
            <br />
            <br/> 
            <label htmlFor="password">Password: </label>
            <input
                type="password"
                className="form-control"
                id="Password"
                placeholder="password"
                required
                value={Password} onChange={this.handlePassword}
            />
            <br />
           <br/>
            <button onClick={this.handleSubmit}>Log In</button>
            
            </form>
        );
    
    }
};

export default LogInPage;