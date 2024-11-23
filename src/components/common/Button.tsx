import React from 'react';
import styled from 'styled-components';

interface ButtonContentProps {
  buttonContent: string;
  onClick: () => void;
  buttonColor?: string;
  // activeColor?: string;
  // isActive?: boolean;
  // color?: string;
}

// interface StyledButtonProps {
//   buttonColor?: string;
//   activeColor?: string;
//   isActive?: boolean;
//   color?: string;
// }

const Button = ({
  buttonContent,
  onClick,
}: // buttonColor = '#e0e0e0',
// activeColor = '#222f40',
// color = 'fff',
// isActive,
ButtonContentProps) => {
  return (
    <NextButtonContainer>
      <NextButton
        // buttonColor={buttonColor}
        // activeColor={activeColor}
        // isActive={isActive}
        // color={color}
        onClick={onClick}
      >
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
`;

const NextButton = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 16px 0;
  margin-top: 16px;
  box-sizing: border-box;
  text-align: center;
  color: white;
  background: #d9621f;
  border-radius: 9000px;
  cursor: pointer;
`;
