import React from "react";
import styled from "styled-components";
import { useProductContext } from "../context/productcontext";
import Product from "./Product";





export default function FeaturedProducts() {
    const { isLoading, featuredProducts}= useProductContext();
    if(isLoading){return <Wrapper>
      <div className="container">
        <div className="intro-data">Check now!</div>
        <div className="common-heading">Featured items</div>
        <div className="grid grid-three-column">
        </div>
        </div>
    </Wrapper>}
  return <Wrapper>
    <div className="container">
        <div className="intro-data">Check now!</div>
        <div className="common-heading">Featured items</div>
        <div className="grid grid-three-column">
         {      featuredProducts.map((curElem)=>{
                return <Product key={curElem.id} {...curElem}/>})         } 
                 {/* we can pass {...prop} as collection of props instead of writing all the various props */}
        </div>
        
    </div>
  </Wrapper>;
};

const Wrapper= styled.div`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .container {
    max-width: 120rem;
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      /* background-color: rgba(0, 0, 0, 0.5); */
      transition: all 0.4s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    /* &:hover img {
      transform: scale(1.02);
    } */
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      /* transition: all 0.4s linear; */
      border-radius: 1.5rem;
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
    background-color: #fff;
    border-radius: 2rem;
    transition: box-shadow .2s ease-in-out;
    &:hover{
      /* box-shadow: 2px 2px 2px 2px rgba(0,0,0,.16) */
      -webkit-box-shadow: 0 0 5px 2px rgba(0,0,0,.16);
    -moz-box-shadow: 0 0 5px 2px rgba(0,0,0,.16);
    box-shadow: 0 0 5px 2px rgba(0,0,0,.16);
    }
    /* transition: all 0.5s linear; */
    &:hover {
      transform: scale(1.01);
    } 
    .card-data {
      padding: 0 2rem;
      padding-bottom: 1rem;
    }
    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items:flex-start;
    }
    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
      font-size: medium;
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
      background-color: #e5f7ee;
      padding: 0.2rem 0.5rem;
    }
  .product-data-price {
      font-weight: bold;
    }

    
`;