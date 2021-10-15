import React, { Component } from 'react';

class RegisterPage extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        username: "",
    }
  

handleFormData = (e, value) => {
    const name = e.target.name;
    value = e.target.value
    this.setState({
        [name] : value,
    })
  }

handleEmail = (e) => {
    this.setState({
      
        ...this.state,email: e.target.value
    });
}

handlePhone = (e) => {
    this.setState({
      
        ...this.state,phone: e.target.value
    });
}

handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };




    render() {
        const { firstName, lastName, Email, Phone, username, handleSubmit} = this.state;
        return (
    <form className="RegisterPage" onSubmit={this.handleSubmit}>
                
        <h2>Enter data</h2>
        <div className="form-group mt-3">
            <label htmlFor="First_name" >First Name: </label>
            <input
                type="text"
                className="form-control"
                id="firstname"
                placeholder="First Name"
                name="firstName"
                required 
                value={firstName} onChange={this.handleFormData}
                />
        </div>
        <div className="form-group">
            <label htmlFor="Last_Name">Last Name: </label>
            <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Last Name"
                value={lastName} onChange={this.handleFormData}
                name="lastName"
            />
        </div>
        <div className="form-group">
            <label htmlFor="Email">Email: </label>
            <input
                type="email"
                className="form-control"
                id="Email"
                placeholder="email"
                required 
                value={Email} onChange={this.handleEmail}
            />
        </div>
        <div className="form-group">
            <label htmlFor="phone">Phone: </label>
            <input
                type="text"
                className="form-control"
                id="Phone"
                placeholder="phone"
                required
                value={Phone} onChange={this.handlePhone}
            />
        </div>
        <div className="form-group">
            <label htmlFor="Username">Username: </label>
            <input
                type="text"
                className="form-control"
                id="userName"
                placeholder="username"
                required
                value={username} onChange={this.handleFormData}
                name="username"
            />
        </div>
        <div className="form-group d-flex mt-4">
            <button style={{ display: 'inline-block' }} className="ml-auto align-self-center no-button" onClick={handleSubmit}>Register</button>
          
        </div>
    
     </form>
        );
    }
};

export default RegisterPage;