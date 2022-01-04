const ItemRecibo=({prod})=>{
    
    return(
        <tr>
            <td>{prod.category}</td>
            <td>{prod.precio}</td>
            <td>{prod.cantidad}</td>
        </tr>

        )

}

export default ItemRecibo