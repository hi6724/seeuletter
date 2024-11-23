import React from 'react';
import styled from 'styled-components';

interface ButtonContentProps {
  buttonContent: string;
}

const Button = ({ buttonContent }: ButtonContentProps) => {
  return (
    <NextButtonContainer>
      <NextButton>{buttonContent}</NextButton>
    </NextButtonContainer>
  );
};

export default Button;

const NextButtonContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  margin-top: 32px;
  padding: 0 16px;
  border-top: 1px solid #e5e5ea;
`;

const NextButton = styled.div`
  width: 100%;
  padding: 16px 0;
  margin-top: 16px;
  box-sizing: border-box;
  text-align: center;
  color: var(--M3-sys-light-on-surface, var(--Schemes-On-Surface, #1d1b20));
  background: var(--GreyScale-Grey-300, #e0e0e0);
  border-radius: 9000px;
`;
