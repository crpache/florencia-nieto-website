import styled from "styled-components";
import { Link } from "gatsby";

const sizes = {
  s: '0.5rem',
  m: '1rem',
  l: '1.5rem'
}

const Button = styled(Link)`
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  background: white;
  color: black;
  transition: 0.5s;
  font-size: ${({size = sizes.m}) => sizes[size]};
  border-radius: 5px;
  margin-top: 2rem;
  border: 1px solid black;
  padding: 1rem 2rem;
  text-decoration: none;
  &:hover {
    background: black;
    color: white;
  }
`;

export default Button