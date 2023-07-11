import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";
export default function Error(){
    return <Wrapper>
    <img src="images/error-image2.jpg" alt="" />
    <NavLink to="/"><Button>Go to Home</Button></NavLink>
        
    
    </Wrapper>
}

const Wrapper=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 2rem;

background-color: #18211E;


img{
 width: 100rem;
 
}
Button{
    
    background-color:#4E5DA2;
    
}

@media (max-width: ${({ theme }) => theme.media.mobile}){
    img{
        width: 50rem;
    }  
    Button{
        max-width: 20rem;
        font-size: 1.4
        
    
        rem;
    } 
    }
`
;