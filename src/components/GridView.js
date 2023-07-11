import React from 'react'
import styled from 'styled-components'
import Product from './Product'

const GridView = ({products}) => {
  return (
    <Wrapper className='section'>

    <div className=" container grid grid-three-column">
         {      products.map((curElem)=>{
                return <Product key={curElem.id} {...curElem}/>})         } 
                 {/* we can pass {...prop} as collection of props instead of writing all the various props */}
        </div>
    
            
    </Wrapper>
  )
}

export default GridView

const Wrapper = styled.section`
  padding: 9rem 0;
  .container {
    max-width: 120rem;
  }
  .grid {
    gap: 3.2rem;
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    
    /* &:hover img {
      transform: scale(1.05);
    } */
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      /* transition: all 0.2s linear; */
      border: 1px solid #e0e0e0;
      padding: 0.5rem;
    }
    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      opacity: 80%;
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
      
    }
  }
  .card {
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    transition: box-shadow .2s ease-in-out;
    &:hover{
      /* box-shadow: 2px 2px 2px 2px rgba(0,0,0,.16) */
      -webkit-box-shadow: 0 0 5px 2px rgba(0,0,0,.16);
    -moz-box-shadow: 0 0 5px 2px rgba(0,0,0,.16);
    box-shadow: 0 0 5px 2px rgba(0,0,0,.16);
    }
    .card-data {
      padding: 0 1rem 0.5rem 1rem;
      
    }
    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: flex-start;
      
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
      font-size: medium;
    }
    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }

  .product-data-real-price {
      /* color: ${({ theme }) => theme.colors.btn}; */
      color: #03753c;
      
    }
`;




