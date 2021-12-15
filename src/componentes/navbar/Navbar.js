import React from "react";
import CardWidget from "../navbar/cardWidget/cardWidget"
import "../../scss/navbar/navbar.scss"
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
                <Link className="navbar-logo" to ={'/'}><h1>Espinitas <i className="fas fa-seedling"></i></h1></Link>            
            <div className="nav-menu">
            {categories.map(cat => <Link key={cat.id} className='nav-links' to={`/category/${cat.id}`}>{cat.nombre}</Link>)}
            </div>       
            <CardWidget />
        </nav>
)
    
}

export default Navbar
