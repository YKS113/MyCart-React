import React from "react";
import styled from "styled-components";
// import {IoLogoDeviantart} from "react-icons/io5";
// import {IoLogoPaypal} from "react-icons/io5";
// import {IoLogoVk} from "react-icons/io5";
// import {IoLogoXing} from "react-icons/io5";

export default function Trusted(){
    return <Wrapper>
        <h3>We are trusted by 500+ partners</h3>
        <div className="brand-section">
            <div className="brand-section-slider">
            {/* <IoLogoDeviantart className="brand-logo"></IoLogoDeviantart>
            <IoLogoPaypal className="brand-logo"></IoLogoPaypal>
            <IoLogoVk className="brand-logo"></IoLogoVk>
            <IoLogoXing className="brand-logo"></IoLogoXing> */}
            </div>
        </div>
    </Wrapper>
}

const Wrapper= styled.div`
padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 3rem;
    font-weight: bold;
  }
.brand-logo {
    min-width: 10rem;
    height: 10rem;
    opacity: 70%;
  }
  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      margin-left:30vw;
      margin-right: 30vw;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
    h3{
        font-size: 2.5rem;
    }
  }
`;

