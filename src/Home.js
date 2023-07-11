import React from "react";
import styled from "styled-components";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeaturedProducts from "./components/FeaturedProducts";

export default function Home(){
    return <><Wrapper>
            <Hero title="MyCart Shopping"/>
            <FeaturedProducts/>
            <Services/>
            <Trusted/>
            </Wrapper></>
}

const Wrapper= styled.div`

`;
