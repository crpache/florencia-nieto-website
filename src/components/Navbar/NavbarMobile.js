import React, { useRef } from 'react'
import styled from 'styled-components'
import Burger from './Burger'
import { Link } from 'gatsby'
import { v4 as id }from 'uuid'
import { useOnClickOutside } from '../../utils/hooks'

const NavbarWrapper = styled.div`
  position: fixed;
  height: 15vh;
  width: 100%;
  z-index: 1000;

  h1 {
    display: flex;
    position: absolute;
    margin-left: 6rem;
    margin-top: 1.8rem;
  }
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.secondary};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 0 40px;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 600px) {
    width: 100vw;
    padding: 0;
  }
`

const NavItem = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.5rem;
  padding: 2rem 0;
  color: ${({ theme }) => theme.colors.primary};
  @media (max-width: 576px) {
    font-size: 1.5rem;
    text-align: center;
  }
`

const NavbarMobile = ({ items, open, setOpen }) => {
  const ref = useRef()
  useOnClickOutside(ref, () => setOpen(false)) // closes mobile navbar when clicking outside

  return (
    <NavbarWrapper ref={ref}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open}>
        {items.map(item => (
          <NavItem to={item.to} onClick={() => setOpen(false)} key={id()}>
            {item.label}
          </NavItem>
        ))}
      </Menu>
    </NavbarWrapper>
  )
}

export default NavbarMobile
