import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { TiSocialTwitter,TiSocialFacebook,TiSocialInstagram,TiSocialYoutube } from "react-icons/ti";
export default function Footer(){
return <Wrapper>
    <div className="container">
        <div className="contact-short grid grid-two-column">
        <p>Ready to get started ? <br />
            Contact us today</p>
        <NavLink to="/contact" className="btn"><Button>Get Started</Button></NavLink>
        </div>
        </div>

        <footer>
           <div className="container grid grid-four-column">
           <div>
                <h3>MyCart Shopping</h3>
                <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.</p>
            </div>
            <div>
                <h3>Subscribe our newsletter <br /> to get important updates</h3>
                <input type="text" placeholder="Your E-mail"/>
                <Button>Subscribe</Button>
            </div>
            <div >
                <h3>Follow Us</h3>
                <div className="footer-social--icons">
                <div>
                    <TiSocialTwitter className="icons"></TiSocialTwitter>
                </div>
                <div>
                    <TiSocialFacebook className="icons"></TiSocialFacebook>
                </div>
                <div>
                    <TiSocialInstagram className="icons"></TiSocialInstagram>
                </div>
                <div>
                    <TiSocialYoutube className="icons"></TiSocialYoutube>
                </div>
                </div>
            </div>
            <div>
                <h3>Call Us On</h3>
                <p>+91 987654321</p>
            </div>
            </div>
            <hr />
            <div className="container">
            <div className="footer-bottom--section grid grid-two-column">
            <p> &copy; {new Date().getFullYear()} MyCart All Rights Reserved</p>
            <p>*PRIVACY POLICY <br />
                ALL RIGHTS RESERVED</p>
            </div>
            </div>
        </footer>
   
</Wrapper>
};

const Wrapper= styled.div`

.contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    /* .grid:last-child {
      justify-self: end;
      align-self:center;
    } */
    p{
      justify-self:center;
      align-self:center;
      font-size: 1.75rem;
    }
    .btn{
      
      justify-self:end;
      align-self:center;
    Button{
      margin-bottom: 0;
    }
    }

  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
      
    }
    p {
      color: ${({ theme }) => theme.colors.white};
     
    }
    input{
        display: block;
        margin-bottom: 2rem;
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 1rem;
    hr {
      margin: 25px auto;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
 Button{
  margin-bottom: 3rem;
 }
`;