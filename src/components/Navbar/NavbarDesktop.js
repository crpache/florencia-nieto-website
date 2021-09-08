import React from 'react'
import { Link } from 'gatsby'
import { useStickyNavbar } from '../../utils/hooks'
import styled from 'styled-components'
import { v4 as id } from 'uuid'
import LogoImg from '../../img/logo-navbar.png'

const NavbarWrapper = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-around;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
  width: 100%;
  height: 150px;
  top: 0;
  transition: top 0.3s;
  z-index: 999;
  .logo {
    width: 250px;
  }
`
const NavItem = styled(Link)`
  color: ${({ theme }) => theme.colors.font};
  //font-size: ${({ theme }) => theme.size.m};
  font-size: 20px;
  font-weight: 100;
  margin: 10px;
  padding: 5px;
  text-decoration: none;
  text-transform: uppercase;
  :visited {
    color: ${({ theme }) => theme.colors.font};
  }
  :hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const NavbarDesktop = ({ items }) => {
  const navbarId = 'navbar-desktop'
  useStickyNavbar(navbarId, 150)

  return (
    <NavbarWrapper id={navbarId}>
      <img 
        src={LogoImg}
        height={100}
        alt="logo"
      />
      {items.map(item => (
        <NavItem to={item.to} key={id()}>
          {item.label}
        </NavItem>
      ))}
    </NavbarWrapper>
  )
}

export default NavbarDesktop;
