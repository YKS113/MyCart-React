import axios from "axios";
import { useParams} from "react-router-dom";
import { createContext , useEffect, useReducer,useContext} from "react";
import productReducer from "../reducer/productReducer"
const AppContext = createContext();
const API= "https://api.pujakaitem.com/api/products"
// const API= 'https://dummyjson.com/products';


const initialState ={
        isLoading: false,
        isError: false,
        products:[],
        featuredProducts: [],
        isSingleLoading: false,
        singleProduct: {}
        
}
/* children is a special type of prop in react which consolidates all the children of that component into an object which can be used as a prop
What is a children prop in React?
children is a special prop, automatically passed to every component, that can be used to render the content included between the opening and closing tags when invoking a component. it can be accessed by using props.children, in the below eg we have directly destructured it i.e. {children}= props i.e. chidren={all child compnents}
M-2 we can pass props as a parametre and use {props.children} in below Appcontext.Provider
*/
 const AppProvider= ({children}) => {
    const [state, dispatch]= useReducer(productReducer, initialState)

    const getProducts= async (url)=>{
        dispatch({type:"API_LOADING"});
        try{ const res= await axios.get(url);
        const productsData= await res.data;
        // const productsData= await res.products;
        console.log(productsData);
        dispatch({type: "MY_API_DATA" , payload: productsData});}
        catch(error){
            dispatch({type:"API_ERROR"})
        }

    }

    
     
    const getSingleProducts= async (url)=>{
        dispatch({type:"SINGLE_PRODUCT_LOADING"});
        try{ const res= await axios.get(url);
        const SingleProductData= await res.data;
        // const SingleProductData= await res.products;
        console.log(SingleProductData);
        dispatch({type: "SINGLE_PRODUCT_DATA" , payload: SingleProductData});}
        catch(error){
            dispatch({type:"SINGLE_PRODUCT_ERROR"})
        }

    }

    useEffect(() => {
      getProducts(API)
    }, [])
    
    return (<AppContext.Provider value={{...state, getSingleProducts} }>{children}</AppContext.Provider> );
};/* getSingleProducts function is exported for using in singleProduct.js */
/* here, {} are used to access JS iside JSX
In M-2 {children} will be replaced by {props.children} */


const useProductContext =()=> {
    return useContext(AppContext);
};
export { AppProvider, AppContext, useProductContext}