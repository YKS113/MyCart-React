import React from "react";
import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import Sort from "./components/Sort";
import ProductList from "./components/ProductList";
import { useFilterContext } from "./context/filtercontext";

const Products = () => {
  const {filterProducts}= useFilterContext();
  
  return <Wrapper>
    <div className="container grid grid-filter-column">
      <div><FilterSection/></div>
     <div>
     <div className="product-view--sort">
        <div className="sort-filter">
          <Sort/>
        </div>
      </div>
      <div className="main-product">
        <ProductList/>
      </div>
     </div>
      
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
  .container{
    position: relative;
  }
  .grid-filter-column {
    grid-template-columns: 0.3fr 1fr;
    
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
