import { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setstate] = useState(initialState);

    const addToCart = (payload) => {
        setstate({
            ...state,
            //mantener el estado
            cart: [...state.cart, payload]
        });        
    };
    
    const removeCart = (payload) => {
        setstate({
            ...state,
            cart: [state.cart.filter(items => items.id !== payload.id)],
        });
    }

    return{
        state,
        addToCart,
        removeCart,
    }
}

export default useInitialState;
