import styled from "styled-components";


export const BaseButton = styled.button`
  display: inline-block;
  width: 100px;
  max-width: 100%;
  padding: 10px 10px;
  border: 2px solid transparent;
  border-bottom-color: #d40152;
  border-radius: 10px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  transition: 0.25s;
  box-sizing: border-box;
  &:hover {
    background-color: #fff;
    border-color: currentColor;
    color: #e25c00;
  }
`