const products = require ('./assets/plantas.json')
const categories= require ('./assets/categorias.json')



export const getProducts = (category) => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            category ? resolve(products.filter(product => product.category === category)) : resolve(products)
        }, 1000)        
    })
}

export const getItem = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products[0])
        }, 1000)        
    })
}
export const getCategories = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categories)
        }, 1000)        
    })
}

export const getProduct = () => {
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products[0]);
      }, 500);
    });
  }

  export const getProductById = (id) => {  
    return new Promise((resolve, reject) => {
        const product = products.find(prod => parseInt(prod.id) === parseInt(id))
        setTimeout(() => resolve(product), 3000)
    })
}
