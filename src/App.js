import React from 'react';
import './App.css';
import NewsState from './context/news/NewsState';
import Home from './components/Home'
import Topic from './components/Topic'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <NewsState>

      <Router>


        <nav className="navbar navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand">News</a>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
          </div>
        </nav>


        <div className="container mt-5">

          <div className="row">
            <div className="col-md-8">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/topic/:topic">
                  <Topic />
                </Route>
              </Switch>
            </div>




            <div className="col-md-4" style={{ position: 'relative' }}>
              <ul className="nav flex-column stick">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Top stories</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/topic/general">General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/topic/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/topic/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/topic/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/topic/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/topic/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/topic/technology">Technology</Link>
                </li>
              </ul>
            </div>


          </div>
        </div>
      </Router>
    </NewsState>







  );
}

export default App;
