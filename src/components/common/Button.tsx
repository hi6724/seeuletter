import React from 'react';
import styled from 'styled-components';

interface ButtonContentProps {
  buttonContent: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button = ({ buttonContent, onClick, disabled }: ButtonContentProps) => {
  return (
    <NextButtonContainer>
      <NextButton onClick={disabled ? undefined : onClick} disabled={disabled}>
        {buttonContent}
      </NextButton>
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
  z-index: 1000;
`;

const NextButton = styled.div<{ disabled?: boolean }>`
  width: 100%;
  max-width: 450px;
  padding: 16px 0;
  margin-top: 16px;
  box-sizing: border-box;
  text-align: center;
  color: ${({ disabled }) => (disabled ? '#1D1B20' : 'white')};
  background: ${({ disabled }) => (disabled ? '#E0E0E0' : '#43566E')};
  border-radius: 9000px;
  cursor: pointer;
`;
