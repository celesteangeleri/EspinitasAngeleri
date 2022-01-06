import React from 'react'
import { Link } from 'react-router-dom'
import "../../../scss/main/main.scss"

const cardWidget = ({quantity}) => {
    return (
        <div>
          <Link to='/cart' className = "carrito" ><i className="fas fa-shopping-cart" ></i>{quantity}</Link>  
        </div>
    )
}

export default cardWidget
