'use client';

import React, { useState } from 'react';
import characterImage from '../../assets/character.png';
import styled from 'styled-components';
import Groups from '@/components/main/groups';
import Button from '@/components/common/Button';
import { useRouter } from 'next/navigation';

const CreateRoom = () => {
  const [userName, setUserName] = useState('제나');
  const router = useRouter();

  const handleClickCreateRoom = () => {
    router.push('/create');
  };

  return (
    <div>
      <TopContainer>
        <UserNameStyle>
          {userName}님, <br />
          따뜻한 연말모임 시작할까요?
        </UserNameStyle>
        <CommentStyle>따뜻한 한마디</CommentStyle>
        <CharacterImg src={characterImage.src} alt="character" />
      </TopContainer>
      <GroupContainer>
        <Groups userName={userName} />
      </GroupContainer>
      <Button buttonContent={'방 만들기'} onClick={handleClickCreateRoom} />
    </div>
  );
};

export default CreateRoom;

const TopContainer = styled.div`
  width: 100%;
  height: 205px;
  background-color: #445e13;
  position: relative;
  z-index: 0;
`;

const UserNameStyle = styled.div`
  font-family: Pretendard;
  font-size: 19px;
  font-weight: 700;
  padding-top: 24px;
  padding-left: 16px;
  line-height: 140%; /* 26.6px */
  color: #ffffff;
`;

const CommentStyle = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  font-weight: 600;
  padding: 8px 16px;
`;

const CharacterImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  padding-right: 20px;
  padding-bottom: 28px;
`;

const GroupContainer = styled.div`
  position: relative;
  z-index: 1;
  margin-top: -38px;
`;
