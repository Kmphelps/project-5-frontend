import './App.css';
import React, { useEffect, useState } from 'react';
import LoginSignup from './components/LoginSignup'
import Dashboard from './components/Dashboard';
import FeatureForm from './components/FeatureForm';
import Resources from './components/Resources';
import Button from 'react-bootstrap/Button';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function App() {
  const production = "https://project-5-backend.herokuapp.com/";
  const development = "http://localhost:3000/";
  const url = (process.env.NODE_ENV === 'production' ? production : development);
  const [user, setUser] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    fetch(`${url}/profile`, {
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
    fetch(`${url}/users`, {
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
    fetch(`${url}/login`, {
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
                <h2 className="navbar-text">QAllaborative</h2>
                <br></br>
                <p className="hi-text">Welcome, {user.username}</p>
                <img src={user.avatar} className="avatar" alt="avatar"/>
              </div>
              : ''}
            <Link to="/">
              <Button variant="primary" id="nav-button" className="nav-button" type="button">Dashboard</Button>
            </Link>
            
            <Link to="/featureform">
              <Button variant="primary" id="nav-button" className="nav-button" type="button">Add a New Feature</Button>
            </Link>

            <Button variant="primary" id="nav-button" className="nav-button" onClick={logout}>Logout</Button>
            
            <div className="footer-sources">
              Kayla Phelps 
              <br></br>
              2021 Flatiron School
              <br></br>
              Sources:
              Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
              <br></br>
              Image by <a href="https://pixabay.com/users/stokpic-692575/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=602975">stokpic</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=602975">Pixabay</a>
              </div>
            
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
