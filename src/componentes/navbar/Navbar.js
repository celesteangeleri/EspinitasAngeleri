import React from "react";
import { MenuItems } from "./MenuItems";
import CardWidget from "../navbar/cardWidget/cardWidget"
import "../../scss/main.scss"



const Navbar = () => {
    return (
        <nav className="NavbarItems">
        <h1 className="navbar-logo"> Leiliani <i className="fas fa-seedling"></i></h1>
        <div className="menu-icon"></div>
        <ul className="nav-menu">
            {MenuItems.map((item, index) => {
                return (
                <li key={index}>
                    <a className={item.cName} href={item.url}>
                        {item.title}
                    </a>
                </li>)
            })}
            <CardWidget />
        </ul>
    </nav>
)
    
}

export default Navbar
