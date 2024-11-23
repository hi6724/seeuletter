'use client';

import React, { useState } from 'react';
import characterImage from '../../assets/character.png';
import styled from 'styled-components';

const CreateRoom = () => {
  const [userName] = useState('제나');

  return (
    <div>
      <TopContainer>
        <UserNameStyle>
          {userName}님, <br />
          따뜻한 연말모임 시작할까요?
        </UserNameStyle>
        <CommentStyle>따뜻한 한마디</CommentStyle>
        <img src={characterImage.src} alt="character" />
      </TopContainer>
    </div>
  );
};

export default CreateRoom;

const TopContainer = styled.div`
  width: 320px;
  height: 205px;
  background-color: #445e13;
`;

const UserNameStyle = styled.div`
  font-family: Pretendard;
  font-size: 19px;
  font-weight: 700;
`;

const CommentStyle = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  font-weight: 600;
`;
