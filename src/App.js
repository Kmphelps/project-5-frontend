import './App.css';
import React, { useEffect, useState } from 'react';
import LoginSignup from './components/LoginSignup'
import Dashboard from './components/Dashboard';
import FeatureForm from './components/FeatureForm';
import Resources from './components/Resources';
import Button from 'react-bootstrap/Button';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function App() {
  // const production = "https://project-5-backend.herokuapp.com/";
  // const development = "http://localhost:3000/";
  // const url = (process.env.NODE_ENV ? production : development);
  const [user, setUser] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    console.log("token: " + token)

    fetch("http://localhost:3000/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setLoggedIn(true)
          setUser(data.user)
        });
      } else {
        console.log("please log in")
      }
    });
  }, []);


  function signup(username, password, avatar) {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: {
          username: `${username}`,
          password: `${password}`,
          avatar: `${avatar}`,

        },
      }),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setUser(data.user)
            setLoggedIn(true)
            localStorage.setItem("jwt", data.jwt);
          });
        } else {
          console.log("form incorrectly filled out")
        }
      })
  }

  function login(username, password) {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: {
          username: `${username}`,
          password: `${password}`
        }
      })
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log("hi" + data.jwt)
          setUser(data.user)
          setLoggedIn(true)
          localStorage.setItem("jwt", data.jwt);
        });
      } else {
        console.log("wrong username/password")
      }
    })
  }


  function logout() {
    localStorage.clear()
    setUser(null)
    setLoggedIn(false)
  }


  return (
    <div className="App">
      {loggedIn ?
        <Router>
          <nav className="navbar-container">
            {user ?
              <div>
                <p>Q-llaborate</p>
                
                <h1>Hi {user.username}</h1>
                <img src={user.avatar} className="avatar" alt="avatar"/>
              </div>
              : ''}
            <Link to="/">
              <Button variant="primary" className="nav-button" type="button">Dashboard</Button>
            </Link>
            
            <Link to="/featureform">
              <Button variant="primary" className="nav-button" type="button">Add a New Feature</Button>
            </Link>

            <Button variant="primary" className="nav-button" onClick={logout}>Logout</Button>
            <p className="footer-sources">Photo by Alex Andrews from Pexels</p>
          </nav>

          <Route exact path="/">
            <Dashboard currentUser={user} />
          </Route>

          <Route exact path="/featureform">
            <FeatureForm currentUser={user} />
          </Route>

          <Route exact path="/features/:id">
            <Resources currentUser={user} />
          </Route>


        </Router> :
        <LoginSignup login={login} signup={signup} />
      }
    </div>
  )
}

export default App;
