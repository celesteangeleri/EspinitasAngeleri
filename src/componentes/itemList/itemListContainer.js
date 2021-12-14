import React from 'react'
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import {getProducts} from '../../products'



const ItemListContainer = () => {

    const {categoryId} = useParams()
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        getProducts(categoryId).then(item =>{
            console.info(item);
            setProducts(item)
        }).catch(err =>{
            console.log(err);
        })
        return (() =>{
            setProducts([])
        })
        
    }, [categoryId])

    return (
        <div>
            <ItemList products={products} />    
        </div>
    )
}

export default ItemListContainer