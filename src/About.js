import React, {useContext} from "react";
import styled from "styled-components";
import Hero from "./components/Hero";
import { AppContext } from "./context/productcontext";
export default function Home(){
    return <Wrapper><Hero title = "MyCart E-Commerce" /></Wrapper>
}

const Wrapper= styled.div`

`

