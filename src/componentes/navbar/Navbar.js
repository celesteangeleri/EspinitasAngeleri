import React from "react";
import CardWidget from "../navbar/cardWidget/cardWidget"
import "../../scss/main.scss"
import { Link } from "react-router-dom";
import {getCategories} from '../../products'
import { useEffect, useState } from "react";

const Navbar = () => {

    const [categories, setCategories] =  useState ([])

    useEffect (() =>{
        getCategories().then(categories =>{
            setCategories(categories)
        })
    },[])

console.log(categories);
    return (
        <nav className="NavbarItems">
            <div>
                <Link to ={'/'}><h1 className="navbar-logo"> Espinitas <i className="fas fa-seedling"></i></h1></Link>
            </div>
            <div className="nav-menu">
            {categories.map(cat => <Link key={cat.id} className='' to={`/category/${cat.id}`}>{cat.nombre}</Link>)}
            </div>       
            <CardWidget />
        </nav>
)
    
}

export default Navbar
