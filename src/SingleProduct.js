import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "./context/productcontext";
import PageNavigation from "./components/PageNavigation";
import ProductImage from "./components/ProductImage";
import FormatPrice from "./Helpers/FormatPrice";
import {TbTruckDelivery} from "react-icons/tb";
import {TbReplace} from "react-icons/tb";
import {MdSecurity} from "react-icons/md";
import {RiSecurePaymentLine} from "react-icons/ri";
import StarRating from "./components/StarRating";
import AddToCart from "./components/AddToCart";
const API= "https://api.pujakaitem.com/api/products";
// const API= 'https://dummyjson.com/products';
export default function SingleProduct(){
  const {getSingleProducts, isSingleLoading, singleProduct}= useProductContext()
  const {id}= useParams()
  useEffect(()=>{
    getSingleProducts(`${API}?id=${id}`)
  },[])
  const {id:alias, name, company, price, description, category, stock, stars, reviews,image} = singleProduct;
  
  if(isSingleLoading){
    return <div>Loading...</div>
  }
return( <Wrapper>
        <PageNavigation title={name}/>
        <div className="cont">
          <div className="grid grid-two-column cont2">
            <div className="product-images">
            <ProductImage imgs={image}/>
            </div>
            <div className="product-data">
              <h2>{name}</h2>
              <p><StarRating rating={stars} reviews={reviews}/></p>
              <p className="product-data-price">
                MRP: <del><FormatPrice price={price*1.2}/></del>
              </p>
              <p className="product-data-real-price">Deal of the day : <FormatPrice price={price}/></p>
              <p>{description}</p>
              <div className="product-data-warranty">
               <div className="product-warranty-data">
               <TbTruckDelivery className="warranty-icon"/>
               <p>Free Delivery</p>
               </div>
               <div className="product-warranty-data">
               <TbReplace className="warranty-icon"/>
               <p>7 Days Replacement</p>
               </div> 
               <div className="product-warranty-data">
               <MdSecurity className="warranty-icon"/>
               <p>Secure Shipping</p>
               </div> 
               <div className="product-warranty-data">
               <RiSecurePaymentLine className="warranty-icon"/>
               <p>Secure Payment</p>
               </div> 
              </div>
              <div className="product-data-info">
              <p>Available: <span style={{color:"#03753c"}}>{stock > 0 ? "In Stock" :"Out of Stock" }</span></p>
                <p>ID: <span>{id}</span></p>
                <p>Brand: <span>{company}</span></p>
              </div>
              <hr />
              {stock>0 && <AddToCart product={singleProduct}/>}
            </div>
          </div>
        </div>
        </Wrapper>)
};
const Wrapper = styled.section`

  .cont {
    /* padding: 9rem 0; */
    width:100%;
    height: 100%;
    padding:0px 35rem;
    background-color: ${({ theme }) => theme.colors.bg};
    
  }
  .cont2{
    background-color: white;
    padding: 2rem;
  }
  
  h2{
    font-size: 3.5rem;
    text-transform: capitalize;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          color: ${({ theme }) => theme.colors.btn};
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
          
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      /* color: ${({ theme }) => theme.colors.btn}; */
      color: #03753c;
      background-color: #e5f7ee;
      padding: 0.2rem 0.5rem;
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .cont { 
    padding:5rem 5rem;
  }
  }
`;


