import React from 'react'
import { Link } from 'react-router-dom'
export const Allresources = () => {
    return (<div className="container">
        <div>
            <Link className="list-group-item list-group-item-action" to="/curatesList">Coding Resources</Link>
            <Link className="list-group-item list-group-item-action" to="/crackDSA">450DSA</Link>
            <Link className="list-group-item list-group-item-action" to="/syllabus">Syllabus</Link>
            <Link className="list-group-item list-group-item-action" to="/video">Video Resources</Link>
            <Link className="list-group-item list-group-item-action" to="/interview">Interview</Link>
            <Link className="list-group-item list-group-item-action" to="/ssa">Software Architecture</Link>
        </div>
    </div>)
}