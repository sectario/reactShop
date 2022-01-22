import React from 'react'
import '../styles/ListItems.scss'
import ProductItem from '../components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';
import Header from '../components/header';
;



const API ='https://api.escuelajs.co/api/v1/products';


const ListItems = () => {
  const products = useGetProducts(API)

  return(
    
    <section className="main-container">
    <div className="cards-container">
      {products.map(product => (
        <ProductItem product={product} key={product.id}/>
      ))}
      </div>
    </section>
  );
}

export default ListItems;