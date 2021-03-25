import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import './values/values.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Atcoder from "./views/atcoder";
import Codechef from "./views/codechef";
import Codeforces from "./views/codeforces";
import Hackerearth from "./views/hackerearth";
import Leetcode from "./views/leetcode";
import Kaggle from "./views/kaggle";
import { Navbar } from "./components/navbar";
import { getData } from "./server/server";
import { CuratedList } from "./views/curatedList";
import { PcardList, Plistview } from "./components/Pcard";
import { Syllabus } from "./views/syllabus";
import { Footer } from './components/footer';
import { Videoresources } from "./views/videoResources";
import { Interviews } from "./views/interviews";
import { ScalableSoftwareArc } from "./views/SoftwareArc";
import { Feedback } from "./components/feedback";
import Topcoder from './views/topcoder';
import { Allresources } from "./views/allresources";
getData()
const Home = () => {
  return (
    <>
      <div className="container" style={{ paddingTop: "5%" }}>
        <div className="row" data-aos="slide-left">
          <div className="col-md-4 col-sm"></div>
          <div className="col-md-4">
            <lottie-player src=" https://assets3.lottiefiles.com/packages/lf20_23wxziun.json" background="transparent" speed="1" style={{ paddingLeft: "14%", width: "300px", height: "300px" }} loop autoplay></lottie-player>
          </div>
          <div className="col-md-4 col-sm"></div>
        </div>
        <div className="row" data-aos="slide-right" data-aos-easing=''>
          <div className="col-md-2  col-sm-0"></div>
          <div className="col" style={{ textAlign: "center", color: "whitesmoke" }}>
            <h1 style={{
              fontWeight: "bolder"
            }}>CpTime</h1>
            <h4>A place where you find everything about Competitive Coding</h4>
            <Footer /><br />
            {/* <a href="https://www.buymeacoffee.com/eswar"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=eswar&button_colour=66f&font_colour=FFEBCD&font_family=Cookie&outline_colour=000&coffee_colour=964B00" /></a> */}
          </div>
          <div className="col-md-2  col-sm-0"></div>
        </div>
      </div>
    </>
  )
}
ReactDOM.render(
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/curatesList">
          <CuratedList />
        </Route>
        <Route path="/Atcoder">
          <Atcoder />
        </Route>
        <Route path="/Topcoder">
          <Topcoder />
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
        <Route path="/Plistview">
          <Plistview />
        </Route>
        <Route path='/crackDSA'>
          <PcardList />
        </Route>
        <Route path='/syllabus'>
          <Syllabus />
        </Route>
        <Route path='/video'>
          <Videoresources />
        </Route>
        <Route path='/interview'>
          <Interviews />
        </Route>
        <Route path='/ssa'>
          <ScalableSoftwareArc />
        </Route>
        <Route path='/feedback'>
          <Feedback />
        </Route>
        <Route path='/Allresources'>
          <Allresources />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </>,
  document.getElementById("root")
);