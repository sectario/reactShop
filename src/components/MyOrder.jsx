import React, {useContext} from 'react'
import AppContext from '../context/AppContext';
import OrderItem from './OrderItem';
import '../styles/MyOrder.scss'

const MyOrder = () => {
  const {state} = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  }
    return(
        <div className="my-order">
        <div className="my-order-container">
          <h1 className="title">My order</h1>
    
          <div className="my-order-content">
               
            {state.cart.map(product => (<OrderItem product={product} key={`orderItem-${product.id}`}/>))}
            
            <div className='totalOrder'>
              <p>Total</p>
              <p>${sumTotal()}</p>
            </div>
            <button className='checkoutButton'>Checkout</button>
          </div>
        </div>
      </div>
    );
}

export default MyOrder