import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class EditEventPage extends Component {
    state = {
        EventName: '',
        EventDate: '',
        EventDescription: '',
    };
    handleEventName = (e) => {
        this.setState({
           ...this.state,EventName: e.target.value
        });
    }

    handleEventDate = (e) => {
        this.setState({
           ...this.state,EventDate: e.target.value
        });
    }

    handleEventDescription = (e) => {
        this.setState({
           ...this.state,EventDescription: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted");
      };
      

    render() {
        const  { EventName, EventDate, EventDescription, handleSubmit} = this.state
        return (
            <form className="EditEventPage" onClick={handleSubmit}>
                <label htmlFor="EventName">Event Name: </label>
                 <br />
            <input
                type="text"
                className="form-control"
                id="EventName"
                placeholder="event name"
                required
                value={EventName} onChange={this.handleEventName} />
                <br />
                <br />
                <label htmlFor="EventDate">Event Date: </label>
                 <br />
            <input
                type="date"
                className="form-control"
                id="EventDate"
                placeholder="event date"
                required
                value={EventDate} onChange={this.handleEventDate} />
                <br />
                <br />
                <label htmlFor="EventDescription">Event Description: </label>
                 <br />
            <input
                type="textarea"
                className="form-control"
                id="Eventdescription"
                cols = "40"
                rows = "50"
                placeholder="event description"
                required
                value={EventDescription} onChange={this.handleEventDescription} />
                <br />
                <br />
                <Link to="/event-page"  onClick={this.handleSubmit}>Add New Event Page</Link>
                <br/>
                <Link to="home-page">Back to HomePage</Link>
            </form>
        );
    }
};

export default EditEventPage;