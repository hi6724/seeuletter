import React from 'react';
import rightArrow from '../../assets/rightArrow.svg';
import styled from 'styled-components';

interface GroupsProps {
  userName: string;
}

const Groups = ({ userName }: GroupsProps) => {
  return (
    <GroupsContainer>
      <UserTitle>{userName} 님의 모임</UserTitle>
      <GroupItem>
        <DateWrap>11월 20일</DateWrap>
        <RoomName>방 제목방 제목방</RoomName>
        <img src={rightArrow.src} alt="rightArrow" />
      </GroupItem>
      <GroupItem>
        <DateWrap>11월 20일</DateWrap>
        <RoomName>방 제목</RoomName>
        <img src={rightArrow.src} alt="rightArrow" />
      </GroupItem>
      <GroupItem>
        <DateWrap>11월 20일</DateWrap>
        <RoomName>방 제목</RoomName>
        <img src={rightArrow.src} alt="rightArrow" />
      </GroupItem>
    </GroupsContainer>
  );
};

export default Groups;

const GroupsContainer = styled.div`
  box-sizing: border-box;
  border-radius: 12px;
  background-color: white;
  margin: 0 16px;
`;

const UserTitle = styled.div`
  color: #232323;
  font-size: 14px;
  font-weight: 600;
  padding: 16px 0 8px 16px;
`;

const GroupItem = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  margin: 0px 16px;
  padding: 8px 0;
`;

const DateWrap = styled.div`
  white-space: nowrap;
  width: 54px;
  height: 22px;
  padding: 4px 8px;
  margin-right: 10px;
  background: var(--GreyScale-Grey-100, #f5f5f5);
  border-radius: 4px;
  color: var(--GreyScale-Grey-500, #9e9e9e);
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RoomName = styled.div`
  color: #232323;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  flex-grow: 1;
`;

const RightArrowIcon = styled.img``;
