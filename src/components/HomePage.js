import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HomePage extends Component {
    state = {
        events: [],
        
    } 

    componentDidMount() {
        this.getEvents();
    }

    getEvents() {
        axios('http://universities.hipolabs.com/search?country=North%20Macedonia')
        .then(res => {
            this.setState({
                events: res.data
            }, () => {
                
            })
        })

    }  

     handledeleteEvents = () => {
         this.setState({
             events: this.state.events.slice(0, -1)
         })
     }

    render() {
        const {events} = this.state;
          const eventsItems = this.state.events.map((events, i) => {
            return(
                <p className="collection-items">{events.name}</p>
            )
        })
        return (
            <div className="HomePage">
                <h1>Events</h1>
                <ul className="collection">
                    {eventsItems}
                </ul>
                <button onClick={()=>this.handledeleteEvents(events)}>Delete</button>
                
                <Link className="l1" to="/edit-event-page">Edit</Link>
            </div>
        );
    }
};

export default HomePage;