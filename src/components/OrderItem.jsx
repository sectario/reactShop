import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import '../styles/OrderItem.scss';
import close from '../assets/icons/icon_close.png'

const OrderItem = ( { product }) => {
    const {removeCart} = useContext(AppContext);

    const handleRemove = product =>  {
        removeCart(product);
    }
	return (
		<div className="shopping-cart">
			<figure>
				<img src={product.images[0]}alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img src={close} alt="close" onClick={() => handleRemove(product)}/>
		</div>
	);
}

export default OrderItem;
