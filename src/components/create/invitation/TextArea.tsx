'use client';
import React from 'react';
import styled from 'styled-components';

function TextArea() {
  return (
    <div>
      <TextAreaTitle>내용</TextAreaTitle>
      <StyledTextArea />
    </div>
  );
}

export default TextArea;

const TextAreaTitle = styled.div`
  color: var(--sds-color-text-default-default);
  font-size: 14px;
  font-weight: 400;
`;

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
