import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props: any) => {
  const { children } = props;
  return <SButton>{children}</SButton>
};

const SButton = styled(BaseButton)`
  background-color: #e25c00;
`