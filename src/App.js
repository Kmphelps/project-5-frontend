import './App.css';
import React, { useEffect, useState } from 'react';
import LoginSignup from './components/LoginSignup'
import Dashboard from './components/Dashboard';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function App() {
  const production = "https://project-5-backend.herokuapp.com/";
  const development = "http://localhost:3000/";
  const url = (process.env.NODE_ENV ? production : development);
  const [user, setUser] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    console.log("token: " + token)
    
    fetch(`${url}profile`, {
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


  function signup(username, password) {
    fetch(`${url}users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: {
          username: `${username}`,
          password: `${password}`,
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
    fetch(`${url}login`, {
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
            {user ? <h1>Hi {user.username}</h1> : ''}
            <Link className="links" to="/">Dashboard</Link>
            <button className="logout" onClick={logout}>Logout</button>
          </nav>

          <Route exact path="/">
            <Dashboard currentUser={user} />
          </Route>
        </Router> :
        <LoginSignup login={login} signup={signup} />
      }
    </div>
  )
}

export default App;
