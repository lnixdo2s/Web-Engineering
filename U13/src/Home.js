import React from 'react';
import List from './List';
import Login from './Login';
import './Login.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
    }
    onLogin (data) {
        this.setState({isLoggedIn:true});
    }
	render() {
        if(this.state.isLoggedIn) {
            return (
                <div className="home">
                    <List />
                </div>
            );            
        } 
		return (
			<div className="home">
                <Login onLogin={this.onLogin.bind(this)}/>
            </div>
        );
    }
}
export default Home;