import React from 'react';


function Navbar ({toggleMode, darkMode}) {
    return(
        <nav className = "nav-bar">
            <h2>Where in the world?</h2>
            <button onClick = {toggleMode}>
            <i className= {darkMode ? "fas fa-moon":
            "far fa-moon"}></i>Dark Mode</button>
        </nav>
    )
}

export default Navbar;