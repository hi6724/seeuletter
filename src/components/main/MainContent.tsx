'use client';

import snowmanImg from '../../assets/snowman.svg';
import styled from 'styled-components';
import Groups from '@/components/main/groups';
import Button from '@/components/common/Button';
import { useRouter } from 'next/navigation';

const MainContent = () => {
  const userName = typeof window !== 'undefined' ? (localStorage.getItem('uuid') as string) : '';

  const router = useRouter();

  const handleClickCreateRoom = () => {
    router.push('/create');
  };

  return (
    <MainContainer>
      <TopContainer>
        <UserNameStyle>
          {userName}님, <br />
          따뜻한 연말모임 시작할까요?
        </UserNameStyle>
        <CommentStyle>따뜻한 한마디</CommentStyle>
        <CharacterImg src={snowmanImg.src} alt="character" />
      </TopContainer>
      <GroupContainer>
        <Groups />
      </GroupContainer>
      <Button buttonContent={'방 만들기'} onClick={handleClickCreateRoom} disabled={false} />
    </MainContainer>
  );
};

export default MainContent;

const MainContainer = styled.div``;

const TopContainer = styled.div`
  width: 100%;
  height: 205px;
  background-color: #222f40;
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
  top: 78px;
  right: 0;
  padding-right: 20px;
`;

const GroupContainer = styled.div`
  position: relative;
  z-index: 1;
  margin-top: -38px;
`;
