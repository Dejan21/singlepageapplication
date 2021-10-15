
import './App.css';
import LogInPage from './LogInPage';
import RegisterPage from './components/RegisterPage';
import EventPage from './components/EventPage';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EditEventPage from './components/EditEventPage';
import HomePage from './components/HomePage';
import  Navbar  from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar />
        <Switch>
      <Route exact path="/home-page" component={HomePage}/>
      <Route path="/edit-event-page"  component={EditEventPage} />
      <Route path="/event-page"  component={EventPage} />
      <Route path="/register-page"  component={RegisterPage} />
      <Route path="/log-in-page"  component={LogInPage} />
      
        
          </Switch>
        </Router>
    </div>
  );
}

export default App;
