import React from 'react'
import { Link } from "react-router-dom";
import './navbar.css';
import { Toggle } from '../values/values'
export const Navbar = () => {
    return (<>
        <nav className="navbar navbar-expand-lg" style={{ justifyItems: "right" }}>
            <div onClick={() => { Toggle(); }} className="navbar-brand">
                <h4 >Cp<span>Time</span></h4>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>
            <div style={{
                transitionProperty: "all",
                transitionDuration: '1s'
            }} className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto justify-content-center" >
                    <li className="nav-item"><Link data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item "><Link type="button" data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link" to="/Topcoder">Topcoder</Link></li>
                    <li className="nav-item"><Link type="button" data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link" to="/Atcoder">Atcoder</Link></li>
                    <li className="nav-item"><Link type="button" data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link" to="/Codechef">Codechef</Link></li>
                    <li className="nav-item"><Link type="button" data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link" to="/Codeforces">Codeforces</Link></li>
                    <li className="nav-item" ><Link type="button" data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link" to="/Hackerearth">Hackerearth</Link></li>
                    <li className="nav-item "><Link type="button" data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link" to="/Leetcode">Leetcode</Link></li>
                    <li className="nav-item "><Link type="button" data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link" to="/Kaggle">Kaggle</Link></li>
                    <li className="nav-item "><Link type="button" data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link" to="/Allresources">Resources</Link></li>
                    <li className="nav-item "><Link type="button" data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link" to="/feedback">Feedback</Link></li>
                </ul>
            </div>
        </nav>
    </>)
}