'use client';
import React from 'react';
import styled from 'styled-components';

function TextArea() {
  return (
    <div>
      <div>내용</div>
      <StyledTextArea />
    </div>
  );
}

export default TextArea;

const StyledTextArea = styled.textarea`
  margin-top: 8px;
  display: flex;
  height: 120px;
  min-width: 200px;
  padding: 16px 12px;
  width: calc(100% - 24px);

  border-radius: 8px;
  border: 1px solid #d9d9d9;
  background: #fff;
`;
