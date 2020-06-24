import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import Navbar from './layout/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NotFound from './component/pages/NotFound';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import Users from './users/Users';

function App() {
  return (
    <div className="App">
    
    <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component= {Home}/>
      <Route exact path="/About" component= {About}/>
      <Route exact path="/Contact" component= {Contact}/>
      <Route exact path="/users/add" component= {AddUser}/>
      <Route exact path="/users/edit/:id" component= {EditUser}/>
      <Route exact path="/users/:id" component= {Users}/>

      <Route path="*" component={NotFound} />
    
    </Switch>
    
    </Router>
    
    
    </div>
  );
}

export default App;
