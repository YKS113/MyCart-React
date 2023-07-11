import React from "react";
import ReactDOM  from "react-dom";
import App from "./App"
import { FilterContextProvider } from "./context/filtercontext";
import { CartContextProvider } from "./context/cartcontext";
import { AppProvider } from "./context/productcontext";

ReactDOM.render( <AppProvider>
                 <FilterContextProvider>
                 <CartContextProvider>
                 <App/>
                 </CartContextProvider>
                 </FilterContextProvider>
                 </AppProvider> , document.getElementById("root"))