import React from 'react';
import './App.css';
import NewsState from './context/news/NewsState';
import Home from './components/Home';
import Topic from './components/Topic';
import Search from './components/Search';
import Header from './components/Header';
import Sources from './components/Sources';
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

        <Header />

        <div className="container mt-3">
          <ul class="nav">
            <li class="nav-item">
              <Link className="nav-link" to="/">General</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/topic/business">Business</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/topic/entertainment">Entertainment</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/topic/health">Health</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/topic/science">Science</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/topic/sports">Sports</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/topic/technology">Technology</Link>
            </li>

          </ul>
        </div>

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
                <Route path="/search">
                  <Search />
                </Route>
              </Switch>
            </div>




            <Sources />


          </div>
        </div>
      </Router>
    </NewsState>







  );
}

export default App;
