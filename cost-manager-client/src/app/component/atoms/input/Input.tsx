import styled from "styled-components";

export const Input = (props: any) => {
  const { children } = props;
  return <SInput>{children}</SInput>
};

const SInput = styled.div`
  height: 1.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 50%;
  &:focus {
    border: 1px solid #ffc299;
    outline: 0;
  }
`