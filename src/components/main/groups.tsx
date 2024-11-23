import React, { useEffect, useState } from 'react';
import rightArrow from '../../assets/rightArrow.svg';
import styled from 'styled-components';
import Link from 'next/link';

function formatDate(dateString: string) {
  // 문자열을 Date 객체로 변환
  const date = new Date(dateString);
  const now = new Date();

  // 월(month)과 날짜(day)
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // 년도 비교
  const year = date.getFullYear();
  const currentYear = now.getFullYear();

  // 년도가 다르면 년도 포함
  return year !== currentYear ? `${year}년 ${month}월${day}일` : `${month}월${day}일`;
}

async function fetchGroups(username: string) {
  const baseUrl = `https://dev.inyro.site/api/v1/houses?nickname=${username}`;
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
}

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const username = typeof window !== 'undefined' ? (localStorage.getItem('uuid') as string) : '';

  useEffect(() => {
    console.log(username);
    if (!username) return;
    fetchGroups(username).then((data) => {
      setGroups(data?.result?.houses);
    });
  }, [username]);

  console.log(groups);

  return (
    <GroupsContainer>
      <UserTitle>{username} 님의 모임</UserTitle>
      {groups?.map((group: any) => (
        <GroupItem key={group?.houseId} href={`/room/${group?.houseId}`}>
          <DateWrap>{formatDate(group?.date)}</DateWrap>
          <RoomName>{group.name}</RoomName>
          <img src={rightArrow.src} alt="rightArrow" />
        </GroupItem>
      ))}
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

const GroupItem = styled(Link)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  margin: 0px 16px;
  padding: 8px 0;
  text-decoration: none;

  img {
    cursor: pointer;
  }
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
