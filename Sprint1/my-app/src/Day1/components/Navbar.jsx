import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div id='nav' >
        <div id='left'>
            <h2>LOCOBAKERY</h2>
        </div>
        <div id='middle'>
            <p>Services</p>
            <p>Projects</p>
            <p>About</p>
        </div>
        <div id='right'>
            <button>Contact</button>
        </div>
    </div>
  )
}

export default Navbar