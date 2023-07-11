const filterReducer = (state,action) =>{
    switch(action.type){
    default :return state
    
    case "ADD_TO_CART":
        const{id,color,amount,product}=action.payload
        let existingProduct= state.cart.find((curElem)=>curElem.id===id+color)
        if(existingProduct){
            let updateditem= state.cart.map((curElem)=>{
               if(curElem.id===id+color){
                let newAmount= curElem.amount+amount
                if(newAmount>=curElem.max){
                    newAmount=curElem.max
                }
                return {...curElem,  amount:newAmount}
               }
               else{
                return curElem
               }
               
            })
            return{...state, cart:updateditem}
        }else{
        let cartProduct={
            id:id+color,
            image:product.image[0].url,
            name:product.name,
            price:product.price,
            color,
            amount,
            max:product.stock
            
        }
        //if key and value are same in an object  then we can write name:name as simply name
        console.log(product)
        return{...state,cart:[...state.cart,cartProduct]}}
    case "REMOVE_CART_ITEM":
      let updatedCart=  state.cart.filter((curElem)=>{
            return curElem.id !== action.payload
        })
        return{...state,cart:updatedCart}
    case "CLEAR_CART":
        return{...state,cart:[],
                        total_item:"",
                        total_amount:"",
                        shipping_charge:4000}
    case "SET_INCREAMENT":
        let updateditem= state.cart.map((curElem)=>{
            if(curElem.state.id===action.payload){
                let decreAmount= curElem.amount-1
                if(decreAmount<=0){
                    decreAmount=1
                }
                return{...curElem,amount:decreAmount}
            }
            else{
                return {...curElem}
            }
            
        })
        return{...state,cart:updateditem}
        
        
    
    case "SET_DECREAMENT":
        let updateditems= state.cart.map((curElem)=>{
            if(curElem.state.id===action.payload){
                let increAmount= curElem.amount+1
                if(increAmount>=curElem.max){
                    increAmount=curElem.max
                }
                return{...curElem,amount:increAmount}
            }
            else{
                return curElem
            }
        })
        return{...state,cart:updateditems}
    case "UPDATE_TOTAL_ITEMS":
        let totalItems= state.cart.reduce((accumulator,curElem)=>{return accumulator + curElem.amount},0)
        return{...state,total_item:totalItems}    
    case "UPDATE_TOTAL":
            let total= state.cart.reduce((accumulator,curElem)=>{return accumulator + (curElem.price * curElem.amount)},0)
            return{...state,total_amount:total}  
}}
export default filterReducer;