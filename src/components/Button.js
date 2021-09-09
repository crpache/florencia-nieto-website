import styled from "styled-components";
import { Link } from "gatsby";

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
  font-size: 1.5rem;
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