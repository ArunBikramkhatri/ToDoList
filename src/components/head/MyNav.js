import React from "react";


function MyNav()
{
    let x= 10;
    let y = 20;
    return(
        <nav className="navbar">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <p>The sum of {x} and {y} is {x+y}</p>
        </nav>
    )
}
export default MyNav;