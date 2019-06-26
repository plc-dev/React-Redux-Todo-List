import React from "react"
import { Link } from "react-router-dom"

import "./Menu.css"

const Menu = () => {

    return (
        <div className="menu">
            <Link to="/">Start</Link>
            <Link to="/redux">With Redux</Link>
            <Link to="/about">About</Link>
            <Link to="/impressum">Impressum</Link>
        </div>
    )
}

export default Menu