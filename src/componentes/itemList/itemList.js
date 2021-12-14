import React from 'react'
import Item from './Item'
import '../../scss/main/main.scss'

const ItemList = ({products = []}) => {
    console.log('Aca estan los productos en ItemList', products)
    return (
        <div className='contenedor'>
             {products.map(product =><Item key={product.id} product={product}/>
            

            )}
        </div>
    )
}

export default ItemList
