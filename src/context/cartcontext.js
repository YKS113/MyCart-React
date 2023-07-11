import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import cartReducer  from "../reducer/cartreducer"

const CartContext = createContext();
const getLocalStorageData=()=>{
    return JSON.parse(localStorage.getItem("cartItems")) 
}
//this func runs every time page is refreshed and provides value to cart:
const initialState={
    cart:getLocalStorageData(),
    total_item:"",
    total_amount:"",
    shipping_charge:4000
}

export const CartContextProvider= ({children})=>{

    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addToCart=(id, color, amount, product)=>{
        dispatch({type:"ADD_TO_CART",payload:{id, color, amount, product}})
    }
    const removeItem=(id)=>{
        dispatch({type:"REMOVE_CART_ITEM", payload:id})
    }
    const clearCart=()=>{
        dispatch({type:"CLEAR_CART"})
    }
    const setIncraese=(id)=>{
        dispatch({type:"SET_INCREAMENT", payload:id})
    }
    const setDecraese=(id)=>{
        dispatch({type:"SET_DECREAMENT", payload:id})
    }

    useEffect(()=>{
        dispatch({type:"UPDATE_TOTAL_ITEMS"})
        dispatch({type:"UPDATE_TOTAL"})
        localStorage.setItem("cartItems", JSON.stringify(state.cart))
    },[state.cart])
    

    return(
        <CartContext.Provider value={{...state,addToCart,removeItem,clearCart,setDecraese,setIncraese,}}>
            {children}
        </CartContext.Provider>
        
    )
}

export const useCartContext=()=>{
    return useContext(CartContext);
}