import React from 'react'
import styled from 'styled-components';
import { useState } from 'react'
import { FaCheck } from 'react-icons/fa';
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import {Button} from '../styles/Button.js';
import { useCartContext } from '../context/cartcontext';


const AddToCart = ({product}) => {
    const {id, colors, stock} = product;
    const {addToCart}=useCartContext()
    const [color, SetColor]= useState(colors[0])

    const[amount, SetAmount]= useState(1)
    const Increment=()=>{stock > amount? SetAmount(amount + 1) : SetAmount(amount)}
    const Decrement=()=>{ amount>1 ? SetAmount(amount - 1) : SetAmount(1) }
  
    return (<Wrapper>
        <div className="colors">
        <p>Color : {colors.map((curElem,index)=>{
            return(
                
                  <button className = { color === curElem ? "btnStyle active checkStyle": "btnStyle"} key={index} style={{backgroundColor:curElem}} onClick={()=>SetColor(colors[index])}>
                    {color===curElem? <FaCheck/>: null}
                  </button>)
        })}</p></div>
      <div className="addCart">
      <CartAmountToggle
        amount={amount}
        Increment={Increment}
        Decrement={Decrement}/>

        <NavLink onClick={()=>addToCart(id, color,amount,product)} to="/cart"><Button>Add to Cart</Button></NavLink></div>  
        

    </Wrapper>
    
  )
}

export default AddToCart

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1.5rem;
    color: white;
    
  }
  .addCart{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 1rem;
    gap :2rem;
  }
  `