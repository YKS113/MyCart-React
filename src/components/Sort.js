import React from 'react'
import styled from 'styled-components'
import {BsFillGrid3X3GapFill, BsList} from "react-icons/bs";
import { useFilterContext } from '../context/filtercontext';

const Sort = () => {
  const {gridView , setGridView, setListView, filterProducts, sorting}= useFilterContext(); 
  return (
    <Wrapper className='section'>
      <div className="sorting-list--grid">
        <button className={gridView?'sort-btn active' : 'sort-btn'} onClick={setGridView}><BsFillGrid3X3GapFill className="icon"/></button>
        <button className={gridView?'sort-btn' : 'sort-btn active'} onClick={setListView}><BsList className="icon"/></button>
      </div>
      <div className="products-data">{`${filterProducts.length} Products Avaialble`} </div>
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort">
            <select name="sort" id="sort" defaultValue={"DEFAULT"} className='sort-selection--style' onClick={sorting}>
              <option value="DEFAULT"  disabled hidden >Sort By</option>
              <option  value="lowest">Price (Low-High)</option>
              
              <option value="highest">Price (High-Low)</option>
              
              <option value="a-z">Product Name (A-Z) </option>
              
              <option value="z-a">Product Name (Z-A) </option>
            </select>
          </label>
        </form>
      </div>
    </Wrapper>
  )
}

export default Sort

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  .sorting-list--grid {
    display: flex;
    gap: 2rem;
    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }
  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;
    background-color: white;
    border-style: none;
    border: 1.5px solid black;
    border-radius: 4px;
    
    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
  .products-data{
    font-size: 1.5rem;
  }
`;