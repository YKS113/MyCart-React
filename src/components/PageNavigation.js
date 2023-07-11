import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import { NavLink } from 'react-router-dom'
const PageNavigation = ({title}) => {
  return (
    <Wrapper>
        <NavLink to="/">Home &gt; &nbsp;</NavLink><span> {title}</span>
    </Wrapper>
        
  )
}

export default PageNavigation

const Wrapper = styled.section`
  height: 7.5rem;
  /* background-color: ${({ theme }) => theme.colors.bg}; */
  background-color: white;
  color:${({ theme }) => theme.colors.text} ;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3rem;
  padding-left: 1.2rem;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,.16);
  z-index: 10;
  position: relative;
  
  a {
    font-size: 3rem;
    color:${({ theme }) => theme.colors.btn} ;
  }
`;