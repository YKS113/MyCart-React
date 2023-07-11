import React from 'react'
import styled from 'styled-components'
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"

const CartAmountToggle = ({amount, Increment, Decrement}) => {
  return (
    <Wrapper>
        <div className="amount-toggle">
            <button onClick={()=>Decrement()}><AiOutlineMinus/></button>
            <div className="amount-style">{amount}</div>
            <button onClick={()=>Increment()}><AiOutlinePlus/></button>
        </div>
    </Wrapper>
  )
}

export default CartAmountToggle
const Wrapper=styled.div`
.amount-toggle {
    /* margin-top: 3rem;
    margin-bottom: 1rem; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    gap: 1rem;
    button {
      border: none;  
      cursor: pointer;
      font-size: 2rem;
      border-radius: 0.5rem;
      padding: 0.5rem 1rem;
      /* padding: 0px 1rem; */
    }
    /* .decre{
        padding: 0px 1.38rem;  
    } */
    .amount-style {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.colors.btn};
      
      
    }
  }
`;