import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import backimg from "./resources/background.jpg";
import fetch from "node-fetch";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Atcoder from "./views/atcoder";
import Codechef from "./views/codechef";
import Codeforces from "./views/codeforces";
import Hackerearth from "./views/hackerearth";
import Leetcode from "./views/leetcode";
import Kaggle from "./views/kaggle";
var data;
var uatcoder = [],
  ucodechef = [],
  ucodeforces = [],
  uhackerearth = [],
  ukaggle = [],
  uleetcode = [];
var oatcoder = [],
  ocodechef = [],
  ocodeforces = [],
  ohackerearth = [],
  okaggle = [],
  oleetcode = [];
async function getData() {
  const url = "https://cplistapi.herokuapp.com/";
  const response = await fetch(url);
  data = await response.json();
}
getData().then(() => {
  const upcoming = data.results.upcoming;
  const ongoing = data.results.ongoing;
  for (let i in upcoming) {
    if (upcoming[i].platform === "codeforces") {
      ucodeforces.push(upcoming[i]);
    } else if (upcoming[i].platform === "hackerearth") {
      uhackerearth.push(upcoming[i]);
    } else if (upcoming[i].platform === "atcoder") {
      uatcoder.push(upcoming[i]);
    } else if (upcoming[i].platform === "leetcode") {
      uleetcode.push(upcoming[i]);
    } else if (upcoming[i].platform === "kaggle") {
      ukaggle.push(upcoming[i]);
    } else if (upcoming[i].platform === "codechef") {
      ucodechef.push(upcoming[i]);
    }
  }
  for (let i in ongoing) {
    if (ongoing[i].platform === "codeforces") {
      ocodeforces.push(ongoing[i]);
    } else if (ongoing[i].platform === "hackerearth") {
      ohackerearth.push(ongoing[i]);
    } else if (ongoing[i].platform === "atcoder") {
      oatcoder.push(ongoing[i]);
    } else if (ongoing[i].platform === "leetcode") {
      oleetcode.push(ongoing[i]);
    } else if (ongoing[i].platform === "kaggle") {
      okaggle.push(ongoing[i]);
    } else if (ongoing[i].platform === "codechef") {
      ocodechef.push(ongoing[i]);
    }
  }
  ReactDOM.render(
    <>
      <Router>
        <nav className="navbar">
          <div className="container">

            <div className="navbar-header">
              {/* <button className="navbar-toggler" data-toggle="open-navbar1">
                <span><Link to="/">Home</Link></span>
                <span><Link to="/Atcoder">Atcoder</Link></span>
                <span><Link to="/Codechef">Codechef</Link></span>
                <span><Link to="/Codeforces">Codeforces</Link></span>
                <span>
                  <Link to="/Hackerearth">Hackerearth</Link>
                </span>
                <span>
                  <Link to="/Leetcode">Leetcode</Link>
                </span>
                <span>
                  <Link to="/Kaggle">Kaggle</Link>
                </span>
              </button> */}
              <Link to="/" >
                <h4>Contest<span>List</span></h4>
              </Link>
            </div>
            <div className="navbar-menu" id="open-navbar1">
              <ul className="navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Atcoder">Atcoder</Link></li>
                <li><Link to="/Codechef">Codechef</Link></li>
                <li><Link to="/Codeforces">Codeforces</Link></li>
                <li >
                  <Link to="/Hackerearth">Hackerearth</Link>
                </li>
                <li >
                  <Link to="/Leetcode">Leetcode</Link>
                </li>
                <li >
                  <Link to="/Kaggle">Kaggle</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/Atcoder">
            <Atcoder />
          </Route>
          <Route path="/Codechef">
            <Codechef />
          </Route>
          <Route path="/Codeforces">
            <Codeforces />
          </Route>
          <Route path="/Hackerearth">
            <Hackerearth />
          </Route>
          <Route path="/Leetcode">
            <Leetcode />
          </Route>
          <Route path="/Kaggle">
            <Kaggle />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>,
    document.getElementById("root")
  );

  function Home() {

    return (
      <>
        <div className="container" style={{ zIndex: 1 }}>
          <img className="img-fluid" style={{ zIndex: -1 }} src={backimg} alt="..." />
        </div>
      </>
    );
  }
});
export {
  uatcoder,
  ucodechef,
  ucodeforces,
  uhackerearth,
  ukaggle,
  uleetcode,
  oatcoder,
  ocodechef,
  ocodeforces,
  ohackerearth,
  okaggle,
  oleetcode,
};


