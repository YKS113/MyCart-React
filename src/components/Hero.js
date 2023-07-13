import React from "react";
import { NavLink } from "react-router-dom";
import {Button} from "../styles/Button.js"
import styled from "styled-components";
export default function Hero(props) {
    
    return <Wrapper> 
            <div className="container">
                <div className="grid grid-two-column">
                <div className="hero-section-data">
                
                    <p className="intro-data">Welcome to</p>
                    <h1 >{props.title}</h1>
                    <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti sit, magnam repellat asperiores distinctio ipsum autem maiores odit esse ad quos quidem!</p>
                    <NavLink to="/products"><Button>Shop now!</Button></NavLink>
                              
                </div>
                <div className="hero-section-image">
                    <figure><img src="/images/hero3.jpg" alt="hero img" className="image-style" /></figure>
                </div>
                </div>
            </div>
        </Wrapper>
}

const Wrapper = styled.section`
  padding: 9rem 0;
  margin: 0px 10rem;
  
 
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .hero-section-data {
    p {
      margin: 2rem 0;
    }
    h1 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
      font-weight: bold;
    }
    
    .intro-data {
      margin-bottom: 0;
      color: ${({ theme }) => theme.colors.main}
    }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .image-style {
    width: 100%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      bottom: 10%;
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;