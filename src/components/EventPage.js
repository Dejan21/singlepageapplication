import React, { Component } from 'react';
// import {Rows, cols} from "react-bootstrap";
import {Link} from 'react-router-dom';

class EventPage extends Component {
  state = {
    eventName: '',
    eventDate: '',
    eventDescription: "",
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  handleEventName = (eventName) => {
    this.setState({
       ...this.state,eventName: eventName.target.value,
         eventName: this.state.eventName + 1
    });
}
handleEventDate = (e) => {
  this.setState({
      ...this.state,eventDate: e.target.value,
      eventDate: this.state.eventDate + 1
  });
}

handleEventDescription = (e) => {
  this.setState({
      ...this.state,eventDescription: e.target.value,
      eventDescription: this.state.eventDescription + 1
  });
}
handleSubmit = (e) => {
  e.preventDefault();
  console.log("form submitted");
};


 
    render() {
      const {EventName, EventDate, eventDescription} = this.state;
        return (
            <form className="EventPage" onSubmit={this.handleSubmit}>
                 <label htmlFor="EventName">Event Name: </label>
                 <br />
            <input
                type="text"
                className="form-control"
                id="EventName"
                placeholder="event name"
                required
                value={EventName} onChange={this.handleEventName.bind(this)} />
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
                value={eventDescription} onChange={this.handleEventDescription} />
                <br />
                <br />
                <Link to="/home-page" >Back to homepage</Link>
                <button className="B1" onClick={this.handleSubmit}>Add event</button>
            </form>
        );
    }
};

export default EventPage;