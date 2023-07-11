import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { useProductContext } from "./productcontext";
import filterReducer  from "../reducer/filterReducer"
const FilterContext = createContext();
const initialState={
    filterProducts:[],
    allProducts:[],
    gridView: true,
    sortingBy:"",
    filter:{
        text:"",
        category:"",
        company:"",
        maxprice:'',
        minprice:0,
        price:"",
        
        
    }

}
export const FilterContextProvider= ({children})=>{
    const {products}= useProductContext();
    const [state, dispatch] = useReducer(filterReducer, initialState)
    const setGridView=()=>{
        return dispatch({type:"SET_GRID_VIEW"})
    }
    const setListView=()=>{
        return dispatch({type:"SET_LIST_VIEW"})
    }


    const sorting=(event)=>{
        let sortValue= event.target.value
        return dispatch({type:"GET_SORTED_PRODUCTS", payload:sortValue})
    }

    
    useEffect(()=>{
        dispatch({type:"FILTER_PRODUCTS"})
        dispatch({type:"SORTING_PRODUCTS"})
    }, [state.sortingBy, state.filter]);

    const updateFilterValue=(event)=>{
        let name= event.target.name;
        let value= event.target.value;
        name=event.target.getAttribute("name")     /* for company (select) There are some rules for different    types of html elements the properties are different. */
        
        console.log(name, value)
        return dispatch({type:"UPDATE_FILTERS_VALUE", payload:{name, value}})
    }
    const clearFilters=()=>{
        return dispatch({type:"CLEAR_FILTERS"})
    }

    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products})
    },[products])
    return(
        <FilterContext.Provider value={{...state, setGridView, setListView, sorting,updateFilterValue,clearFilters}}>
            {children}
        </FilterContext.Provider>
        /* pass by value  and paas by reference concepts Link-https://www.geeksforgeeks.org/reference-and-copy-variables-in-javascript/?ref=rp*/
    )
}

export const useFilterContext=()=>{
    return useContext(FilterContext);
}