import React from 'react'
import { Link } from "react-router-dom";
import './navbar.css';
export const Navbar = () => {
    
    return (<>
        <nav className="navbar  navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to="/" >
                    <h4 >Contest<span>List</span></h4>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto justify-content-center" >
                        <li className="nav-item"><Link onClick={(e) => { }} className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link onClick={(e) => { }} className="nav-link" to="/Atcoder">Atcoder</Link></li>
                        <li className="nav-item"><Link onClick={(e) => { }} className="nav-link" to="/Codechef">Codechef</Link></li>
                        <li className="nav-item"><Link onClick={(e) => { }} className="nav-link" to="/Codeforces">Codeforces</Link></li>
                        <li className="nav-item" ><Link onClick={(e) => { }} className="nav-link" to="/Hackerearth">Hackerearth</Link></li>
                        <li className="nav-item "><Link onClick={(e) => { }} className="nav-link" to="/Leetcode">Leetcode</Link></li>
                        <li className="nav-item "><Link onClick={(e) => { }} className="nav-link" to="/Kaggle">Kaggle</Link></li>
                    </ul>
                </div></div>
        </nav>
    </>)
}