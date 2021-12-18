import React from 'react'
import { Link } from 'react-router-dom'
import "../../../scss/main/main.scss"



const cardWidget = () => {
    return (
        <div>
          <Link to='/cart' className = "carrito" ><i className="fas fa-shopping-cart" >0</i></Link>  
        </div>
    )
}

export default cardWidget
