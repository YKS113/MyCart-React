import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'




const ProductImage = ({imgs= [{url:""}]}) => {
    const [imageState, setImageState]= useState(0);
    const imagefunc=(parameter)=>{
        setImageState(parameter)
    }
   
  return (
    <Wrapper>
        <div className="grid grid-four-column">
           {
            imgs.map((curElem, index)=>{
               return(
              <figure key={index} onClick={()=>imagefunc(index)}><img src={curElem.url} alt={curElem.filename}  className={"box-image--style"} /></figure> 
  )})
           }
        </div>
        <div className="main-screen">
            <img src={imgs[imageState].url} alt={imgs[imageState].filename} />
        </div>
    </Wrapper>
  )
}

export default ProductImage

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.5fr 3fr;
  
  gap: 1rem;
  
  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */
    
    border-radius: 12px;
    border :1px solid #e0e0e0;
    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
      border-radius: 12px;
      padding: 0.3rem;
      opacity: 60%;
      
      &:hover,
      &:active {
        transform: scale(1.03);
        border:2px solid ${({ theme }) => theme.colors.btn};
        opacity:100%;
      }
      
    }
  }
  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: 0px 4px 16px ${({ theme }) => theme.colors.shadow} ; 
      border-radius: 25px;
      border :1px solid #e0e0e0;
      padding: 0.5rem;
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;
    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
  
`;