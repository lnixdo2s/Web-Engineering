import React from 'react';
import './Login.css';
import people from './people.json';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChangeName(event) {    
        this.setState({name: event.target.value});  
    }
    handleChangePassword(event) {    
        this.setState({password: event.target.value});  
    }
    handleSubmit(event) {
        let check = false;
        people.forEach(person => {
            if(this.state.name === person.name && this.state.password === person.password) {
                /* Send them away! */
                this.props.onLogin();
                check = true;
            }
        });
        if(!check) {
            alert('Password was wrong! Try: "' + people[0].name + '" and "' + people[0].password + '" !');
        }
    }
    
	render() {
		return (
			<div className="login">
                <h1> {this.props.name}</h1>
                <div className="form">                
                    <label>Nutzername </label>
                    <input type="text" name="Nutzername" value={this.state.name} onChange={this.handleChangeName}></input>
                    <label>Passwort </label>
                    <input type="password" name="Passwort" value={this.state.password} onChange={this.handleChangePassword}></input>
                    <button name="Login" onClick={this.handleSubmit}>Login</button>
                </div>
            </div>
        );
    }
}
export default Login;