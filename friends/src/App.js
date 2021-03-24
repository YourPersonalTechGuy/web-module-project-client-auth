import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import FriendsList from "./components/FriendsList"



function App() {

  const logout = () => {
    localStorage.removeItem("token")
  }

  return (
    <div className="app-container">
      <Router>
          <div>
            <Link to="/login">Login</Link>
          </div>

          <div>
            <Link to="/login" onClick={logout}>logout</Link>
          </div>

          <div>
            <Link to="/friends">Friends List</Link>
          </div>
        
        <Switch>
          <PrivateRoute exact path="/friends" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
