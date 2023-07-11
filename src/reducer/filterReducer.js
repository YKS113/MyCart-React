const filterReducer = (state,action) =>{
    switch(action.type){
    default :return state
    case "LOAD_FILTER_PRODUCTS":
        let priceArr= action.payload.map((curElem)=>curElem.price)
        let maxprice= priceArr.reduce((accumulator, curValue)=>{
            return Math.max(accumulator, curValue)
        },0)
        console.log(maxprice)
        return {...state,filterProducts:[...action.payload],
                allProducts:[...action.payload],
                filter:{...state.filter, maxprice:maxprice, price:maxprice}}
    case "SET_GRID_VIEW":
        return {...state, gridView: true }
    case "SET_LIST_VIEW":
        return {...state, gridView: false }
    case "GET_SORTED_PRODUCTS":
        return {...state,sortingBy: action.payload}
          
    case "SORTING_PRODUCTS" :
        const {filterProducts} = state
        let newSortData;
        let tempSortData= [...filterProducts];
        const sortingProducts=(a,b)=>{

        if(state.sortingBy === "a-z"){
        return a.name.localeCompare(b.name);
        }
        if(state.sortingBy === "z-a"){
        return b.name.localeCompare(a.name);
        }
        if(state.sortingBy === "lowest"){
        return a.price-b.price;
        }
        if(state.sortingBy === "highest"){
        return b.price-a.price;
        }
    }
        newSortData= tempSortData.sort(sortingProducts)
        return {...state, filterProducts: newSortData}

        case "UPDATE_FILTERS_VALUE" :
        const {name, value}= action.payload
        return {...state,filter:{
            ...state.filter, [name]:value
        }
        /* computed property names : [] can be used to write variable/ expression for object property name/key template literals `${}` can also be used inside [] */
    }
        case "FILTER_PRODUCTS":
        let {allProducts}= state;
        let tempFilterProduct= [...allProducts] 
        // let tempFilterProduct= [...state.filterProducts]
        const {text,category,company,price,clear}= state.filter;
        if (text){
            tempFilterProduct= tempFilterProduct.filter((curElem)=>{
                return curElem.name.toLowerCase().includes(text)
            })
        } 
        if (category){
            if(category==="all"){
                tempFilterProduct=[...tempFilterProduct]
            }
            else{tempFilterProduct= tempFilterProduct.filter((curElem)=>{
                return curElem.category === category
            })}
            
        }

        if (company){
            if(company==="DEFAULT"){
                tempFilterProduct=[...tempFilterProduct]
            }
            else{tempFilterProduct= tempFilterProduct.filter((curElem)=>{
                return curElem.company === company})}
            
        }

        if (price){
            tempFilterProduct= tempFilterProduct.filter((curElem)=>{
                return curElem.price <= price
            })
        }
        
        
        
        
        
           
        return {
            ...state, filterProducts: tempFilterProduct
        }
        
        case "CLEAR_FILTERS":
            return {...state, filter:{
                ...state.filter, 
                text:"",
                category:"all",
                company:"DEFAULT",
                maxprice:state.filter.maxprice,
                minprice:0,
                price:state.filter.maxprice,
                 }}
        
    }};

export default filterReducer;