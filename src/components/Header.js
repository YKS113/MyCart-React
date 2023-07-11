import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
export default function Header() {
  return (
    <>
      <Wrapper>
        <NavLink to="/">
          {" "}
          <img src="./images/MyCart-1(1).png" alt="logo" className="logo" />
        </NavLink>
        <Navbar />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 10rem;
    margin-left: 5rem;
    background-color: ${({ theme }) => theme.colors.helper};
  }
`;
