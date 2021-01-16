import React from 'react'
import { Link } from "react-router-dom";
export const Navbar = () => {
    return (<>
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
    </>)
}