import axios from 'axios'
import React, { useState } from 'react'
import { IProduct } from './IProduct'
import { Product } from './Product'
import './DisplayData.css';
export default function DisplayData() {
    const [products,SetProducts] = useState<IProduct[]>([])

    axios.get<IProduct[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products').then((response)=>{
        console.log(response.data)
        let listProductFromAPI = response.data.map((product:IProduct)=>{
            return new Product(product.id,product.name,product.description,product.imageUrl,product.price,product.year) 
            
        })
        console.log(listProductFromAPI)
        SetProducts(listProductFromAPI)
    })
    let list = products.map((product,i)=>{
          return <ul> <li className='movieContainer'><img src={product.imageUrl} className="imgContainer" alt={product.name} />  <li key={i}><br /> ID:{product.id} <br /> Namn: {product.name} <br /> Pris:{product.price} <br /> År: {product.year} <br /><br /> Beskrvning: {product.description}  <br /><br /> </li></li></ul>
      })
  return (
    <>
    <div className='container'>
        {list}
    </div>
    </>
  )
}
