import React from 'react';
import './Login.css';
import people from './people.json';

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    
	render() {
		return (
			<div className="List">
                <ul>
                    {
                        people.map(person => 
                            <li> 
                                <div>
                                    Name: {person.name}
                                </div>
                                <div>
                                    Description: {person.desc}
                                </div>
                                <img src={person.image} alt={person.name}></img>
                            </li> 
                        )
                    }
                </ul>
            </div>
        );
    }
}
export default List;