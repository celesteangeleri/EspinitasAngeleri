import React from 'react'
import { Link } from 'react-router-dom'
import "../../../scss/main/main.scss"

const cardWidget = ({cantidad}) => {
    return (
        <div>
          <Link to='/cart' className = "carrito" ><i className="fas fa-shopping-cart" ></i>{cantidad}</Link>  
        </div>
    )
}

export default cardWidget
