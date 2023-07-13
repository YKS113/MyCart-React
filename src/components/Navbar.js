import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import {CgMenu, CgClose} from "react-icons/cg";
import { useCartContext } from "../context/cartcontext";
export default function Navbar(){
  const [menuIcon=false, setMenuIcon]= useState();
  const {total_item}= useCartContext()
  
    return <Wrapper>
        <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
            <li><NavLink to="/" className="navbar-link" onClick={ ()=> setMenuIcon(false)}>Home</NavLink></li>
            <li><NavLink to="/about" className="navbar-link" onClick={ ()=> setMenuIcon(false)}>About</NavLink></li>
            <li><NavLink to="/products" className="navbar-link" onClick={ ()=> setMenuIcon(false)}>Products</NavLink></li>
            <li><NavLink to="/contact" className="navbar-link" onClick={ ()=> setMenuIcon(false)}>Contact</NavLink></li>
            <li><NavLink to="/cart" className="navbar-link cart-trolley--link" onClick={ ()=> setMenuIcon(false)}><FaShoppingCart className="cart-trolley"/>
            <span className="cart-total--item">{total_item}</span></NavLink></li>
        </ul>
        <div className="mobile-navbar-btn">
          <CgMenu className="mobile-nav-icon " name="menu-outline" onClick={() => setMenuIcon(true)}/>
          <CgClose className="mobile-nav-icon close" name="close-outline" onClick={ ()=> setMenuIcon(false)}/>
        </div>
        </div>
    </Wrapper>
}



const Wrapper = styled.div`
 .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;
      margin-right: 8rem;
      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          
          transition: color 0.3s linear;
        }
        &:hover,
        &:active { 
          color: ${({ theme }) => theme.colors.btn};
        }
      }
    }

    
    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }
    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }
    .close-outline {
      display: none;
    }
    .cart-trolley--link {


      position: relative;
      .cart-trolley {
        position: relative;
        /* font-size: 3.2rem; */
        font-size: 2.5rem;
      }
      .cart-total--item {
        width: 2rem;
        height: 2rem;
        font-size: 1.2rem;
        font-weight: 600;
        position: absolute;
        background-color: #000;
        color: #fff;
        border-radius: 50%;
        border: 0.2rem solid white;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.red};
      }
    }
    .user-login--name {
      text-transform: capitalize;
    }
    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};
        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
          position: absolute;
          top: 30%;
          right: 10%;
        }
      }
      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }
      .active .close-outline {
        display: inline-block;
      }
      .active .mobile-nav-icon[name="close-outline"] {
      display:inline-block;
    }
      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        transform-origin: top;
        transition: all 0.2s linear;
        
      }
      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 0.2s linear;

        .navbar-link {
          font-size: 4.2rem;
          border-bottom:1px solid ${({ theme }) => theme.colors.helper};
          opacity : 0.9;
        }
      }
     
      .cart-trolley--link {
        position: relative;
        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }
        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }
      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
    
`;