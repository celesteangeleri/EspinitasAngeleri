import React from "react";
import CardWidget from "../navbar/cardWidget/cardWidget"
import "../../scss/navbar/navbar.scss"
import { Link } from "react-router-dom";
import {getCategories} from '../../products'
import { useEffect, useState } from "react";
import { useCartContext } from '../../context/CartContext'

const Navbar = () => {
    const {cartCantidad} = useCartContext()

    const [categories, setCategories] =  useState ([])

    useEffect (() =>{
        getCategories().then(categories =>{
            setCategories(categories)
        })
    },[])

    return (
        <nav className="NavbarItems">            
                <Link className="navbar-logo" to ={'/'}><h1>Espinitas <i className="fas fa-seedling"></i></h1></Link>            
            <div className="nav-menu">              
                        {categories.map(cat => <Link key={cat.id} className='nav-links' to={`/category/${cat.id}`}>{cat.nombre}</Link>)}
                        
            </div>       
            <CardWidget cantidad={cartCantidad}/>
        </nav>
)
    
}

export default Navbar
