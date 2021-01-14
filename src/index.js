import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './card';
import fetch from 'node-fetch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Atcoder from './views/atcoder';
import Codechef from './views/codechef';
import Codeforces from './views/codeforces';
import Hackerearth from './views/hackerearth';
import Leetcode from './views/leetcode';
import Kaggle from './views/kaggle';
var data;
var uatcoder = [], ucodechef = [], ucodeforces = [], uhackerearth = [], ukaggle = [], uleetcode = [];
var oatcoder = [], ocodechef = [], ocodeforces = [], ohackerearth = [], okaggle = [], oleetcode = [];
async function getData() {
  const url = 'https://cplistapi.herokuapp.com/';
  const response = await fetch(url);
  data = await response.json();
}
getData().then(() => {
  const upcoming = data.results.upcoming;
  const ongoing = data.results.ongoing;
  for (let i in upcoming) {
    if (upcoming[i].platform === 'codeforces') {
      ucodeforces.push(upcoming[i]);
    }
    else if (upcoming[i].platform === 'hackerearth') {
      uhackerearth.push(upcoming[i]);
    }
    else if (upcoming[i].platform === 'atcoder') {
      uatcoder.push(upcoming[i]);
    }
    else if (upcoming[i].platform === 'leetcode') {
      uleetcode.push(upcoming[i]);
    }
    else if (upcoming[i].platform === 'kaggle') {
      ukaggle.push(upcoming[i]);
    }
    else if (upcoming[i].platform === 'codechef') {
      ucodechef.push(upcoming[i]);
    }
  }
  for (let i in ongoing) {
    if (ongoing[i].platform === 'codeforces') {
      ocodeforces.push(ongoing[i]);
    }
    else if (ongoing[i].platform === 'hackerearth') {
      ohackerearth.push(ongoing[i]);
    }
    else if (ongoing[i].platform === 'atcoder') {
      oatcoder.push(ongoing[i]);
    }
    else if (ongoing[i].platform === 'leetcode') {
      oleetcode.push(ongoing[i]);
    }
    else if (ongoing[i].platform === 'kaggle') {
      okaggle.push(ongoing[i]);
    }
    else if (ongoing[i].platform === 'codechef') {
      ocodechef.push(ongoing[i]);
    }
  }
  ReactDOM.render(
    <>
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href>Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Atcoder">Atcoder</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Codechef">Codechef</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Codeforces">Codeforces</Link>
                </li><li className="nav-item">
                  <Link to="/Hackerearth">Hackerearth</Link>
                </li><li className="nav-item">
                  <Link to="/Leetcode">Leetcode</Link>
                </li><li className="nav-item">
                  <Link to="/Kaggle">Kaggle</Link>
                </li>
              </ul>
            </div>
          </nav >
        </div>
        <Switch>
          <Route path="/Atcoder">
            <Atcoder />
          </Route>
          <Route path="/Codechef">
            <Codechef />
          </Route>
          <Route path="/Codeforces">
            <Codeforces />
          </Route><Route path="/Hackerearth">
            <Hackerearth />
          </Route><Route path="/Leetcode">
            <Leetcode />
          </Route><Route path="/Kaggle">
            <Kaggle />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router >
    </>,
    document.getElementById('root')
  );

  function Home() {
    return (<>
      <div className="container">
        <div className="row">
          {upcoming.map((uData) => {
            return (<Card status={0} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
              endTime={uData.endTime} url={uData.url} />)
          })}
          {ongoing.map((uData) => {
            return (<Card status={1} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
              endTime={uData.endTime} url={uData.url} />)
          })}
        </div>
      </div></>)
  }
});
export { uatcoder, ucodechef, ucodeforces, uhackerearth, ukaggle, uleetcode, oatcoder, ocodechef, ocodeforces, ohackerearth, okaggle, oleetcode }