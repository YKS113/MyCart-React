import React from "react";
import styled from "styled-components";
import {TbTruckDelivery} from "react-icons/tb";
import {MdSecurity} from "react-icons/md";
import {BiMoney} from "react-icons/bi";
import {RiSecurePaymentLine} from "react-icons/ri";
export default function Services(){
    return <Wrapper>
        <div className="container">
            <div className="grid grid-three-column">
                <div className="services-1">
                    <TbTruckDelivery className="icon"/>
                    <h3>Fast & Free Delivery</h3>
                </div>
                <div className="services-2 grid-two-column">
                 <div className="services-column-2">
                 <MdSecurity className="icon"/>
                    <h3>Non-Contact Shipping</h3>
                 </div>
                 <div className="services-column-2">
                 <BiMoney className="icon"/>
                    <h3>Money-back Guaranteed</h3>
                 </div>
                </div>
                <div className="services-3">
                    <RiSecurePaymentLine className="icon"/>
                    <h3>Secure Payment System</h3>
                </div>
            </div>
        </div>
    </Wrapper>
}

const Wrapper= styled.div`
 padding: 9rem 10rem;
  .grid {
    gap: 4.8rem;
  }
  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }
  .services-1,.services-3{
    align-items: center
    ;
  }
  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;
    .services-column-2 {
      background: ${({ theme }) => theme.colors.bg};
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }
  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }
  .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: ${({ theme }) => theme.colors.btn};}
`;