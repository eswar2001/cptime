import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
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
import { Container, Button } from 'react-floating-action-button'

getData()

const Home = () => {

  return (
    <>
      <div className="container" style={{ paddingTop: "15%" }}>
        <div className="row">
          <div className="col-md-4 col-sm-auto"></div>
          <div className="col-4">
            <lottie-player src=" https://assets3.lottiefiles.com/packages/lf20_23wxziun.json" background="transparent" speed="1" style={{ paddingLeft: "14%", width: "300px", height: "300px" }} loop autoplay></lottie-player>
          </div>
          <div className="col-md-4 col-sm-0"></div>
        </div>
        <div className="row">
          <div className="col-md-2  col-sm-0"></div>
          <div className="col" style={{ textAlign: "center", color: "whitesmoke" }}>
            <h1 style={{
              fontWeight: "bolder"
            }}>CpTime</h1>
            <h4>A place where you find everything about Competitive Coding</h4>
            <Footer />
          </div>
          <div className="col-md-2  col-sm-0"></div>
        </div>
      </div>

    </>
  )
}
export const FAB = () => {
  return (
    <Container>
      <Button
        tooltip="Star Repo & follow"
        icon="fa fa-heart"
        styles={{ backgroundColor: "blue" }}
        rotate={true}
        onClick={() => {
          window.location.assign('http://github.com/eswar2001');
        }}
      />
    </Container>
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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      {/* <FAB /> */}
    </Router>
  </>,
  document.getElementById("root")
);