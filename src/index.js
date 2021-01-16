import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import backimg from "./resources/background.jpg";
import fetch from "node-fetch";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Atcoder from "./views/atcoder";
import Codechef from "./views/codechef";
import Codeforces from "./views/codeforces";
import Hackerearth from "./views/hackerearth";
import Leetcode from "./views/leetcode";
import Kaggle from "./views/kaggle";
import { Navbar } from "./components/navbar";
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
let upcoming;
let ongoing;
const url = "https://cplistapi.herokuapp.com/";
fetch(url, {
  method: "get"
}).then(res => res.json())
  .then((response) => {
    upcoming = response.results.upcoming;
    ongoing = response.results.ongoing;
    localStorage.setItem('upcoming', JSON.stringify(upcoming))
    localStorage.setItem('ongoing', JSON.stringify(ongoing))
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
  })
  .catch(() => {
    upcoming = JSON.parse(localStorage.getItem('upcoming'))
    ongoing = JSON.parse(localStorage.getItem('ongoing'))
    console.log(ongoing)
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
  })
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