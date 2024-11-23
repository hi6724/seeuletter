import React from 'react';
import styled from 'styled-components';

interface ButtonContentProps {
  buttonContent: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

const Button = ({ buttonContent, onClick, style }: ButtonContentProps) => {
  return (
    <NextButtonContainer style={style}>
      <NextButton onClick={onClick}>{buttonContent}</NextButton>
    </NextButtonContainer>
  );
};

export default Button;

const NextButtonContainer = styled.div`
  position: fixed;
  width: 100%;
  max-width: 500px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding: 0 16px;
  border-top: 1px solid #e5e5ea;
`;

const NextButton = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 16px 0;
  margin-top: 16px;
  box-sizing: border-box;
  text-align: center;
  color: var(--M3-sys-light-on-surface, var(--Schemes-On-Surface, #1d1b20));
  background: var(--GreyScale-Grey-300, #e0e0e0);
  border-radius: 9000px;
  cursor: pointer;
`;
