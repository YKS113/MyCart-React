import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filtercontext'
import FormatPrice from "../Helpers/FormatPrice";
import {Button} from "../styles/Button.js"


const FilterSection = () => {
  const {filter, updateFilterValue,clearFilters}= useFilterContext();
  const {text, category, price,minprice,maxprice,}=filter
  return (
    <Wrapper>
      
      <div className="filter-search">
        <form onSubmit={(e)=> e.preventDefault()} >
        <input type="text" name='text' value={text} placeholder="Search" onChange={updateFilterValue}/>
        </form>
      </div>
      <div className="filter-category">
        <div>
          <h3>Categories</h3>
          <button className={category === "all" ? "active btn":"btn"} type="category" name='category' value="all" onClick={updateFilterValue}>All</button>

          <button className={category === "mobile" ? "active btn":"btn"} type="category" name='category' value="mobile" onClick={updateFilterValue}>Mobiles</button>

          <button className={category === "laptop" ? "active btn":"btn"} type="category" name='category' value="laptop" onClick={updateFilterValue}>Laptops</button>

          <button className={category === "computer" ? "active btn":"btn"} type="category" name='category' value="computer" onClick={updateFilterValue}>Computers</button>

          <button className={category === "accessories" ? "active btn":"btn"} type="category" name='category' value="accessories"onClick={updateFilterValue}>Accessories</button>

          <button className={category === "watch" ? "active btn":"btn"} type="category" name='category' value="watch" onClick={updateFilterValue}>Watches</button>
        </div>
      </div>

      <h3>Brand</h3>
      <form action="#">
          <label htmlFor="company">
            <select name="company" id="company" defaultValue={"DEFAULT"} className='filter-company--select' onClick={updateFilterValue}>
              <option name="company" value="DEFAULT" >All</option>
              <option name="company" value="apple">Apple</option>
              <option name="company" value="samsung">Samsung</option>
              <option name="company" value="dell">Dell</option>
              <option name="company" value="asus">Asus</option>
              <option name="company" value="nokia">Nokia</option>
              <option name="company" value="rolex">Rolex</option>
              <option name="company" value="lenova">Lenova</option>
              </select>
          </label>
        </form>
       <div className="filter_price">
        <h3>Price Range</h3>
        <p><FormatPrice price={price}/></p>
        <input min={minprice} max={maxprice} value={price} name="price" onChange={updateFilterValue} type="range" />
       </div>
       <div className="filter-clear"><Button className='btn' name='clear' value="clear" onClick={clearFilters}>Clear Filters</Button></div>
       
          
    </Wrapper>
  )
}

export default FilterSection

const Wrapper = styled.section`
  
  display: flex;
  flex-direction: column;
  gap: 2rem;

  box-shadow: 0px 4px 16px ${({ theme }) => theme.colors.shadow} ; 
  border-radius: 1rem;
  border :1px solid #e0e0e0;
  padding: 2rem 5rem;
  margin:3rem 0rem;
  position: static;
  
  
  
  h3 {
    padding: 1.5rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      /* width: 80%; */
      border: 1px solid ${({ theme }) => theme.colors.text};
      border-radius: 0.25rem;
      &:focus{
        border: 1px solid ${({ theme }) => theme.colors.btn};
      }
    }

  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      .btn {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 2px solid ${({ theme }) => theme.colors.btn};
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    /* padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize; */

    padding: 0.5rem;
    cursor: pointer;
    background-color: white;
    border-style: none;
    border: 1.5px solid black;
    border-radius: 4px;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
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
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.btn};
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ff5349;
    color: white;
    width: 18rem;
    font-size: medium;
    padding: 1rem 0.5rem;
  }
`;