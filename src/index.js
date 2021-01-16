import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import backimg from "./resources/background.jpg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Atcoder from "./views/atcoder";
import Codechef from "./views/codechef";
import Codeforces from "./views/codeforces";
import Hackerearth from "./views/hackerearth";
import Leetcode from "./views/leetcode";
import Kaggle from "./views/kaggle";
import { Navbar } from "./components/navbar";
import { getData } from "./server/server";
getData()
ReactDOM.render(
  <>
    <Router>
      <Navbar />
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
