import React from 'react'
import Item from "./item";
import '../../scss/main/main.scss'

const ItemList = ({products = []}) => {
    
    return (
        <div className='contenedor'>
             {products.map(product =><Item key={product.id} product={product}/>
            

            )}
        </div>
    )
}

export default ItemList
