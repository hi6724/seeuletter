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
  // 항상 배열 반환
  return data?.result?.houses || [];
}

const Groups = () => {
  const [groups, setGroups] = useState<any[]>([]); // 초기값을 빈 배열로 설정
  const userName = typeof window !== 'undefined' ? (localStorage.getItem('uuid') as string) : '';

  useEffect(() => {
    if (userName) {
      fetchGroups(userName).then((data) => {
        setGroups(data); // fetchGroups가 항상 배열을 반환하므로 안전
      });
    }
  }, [userName]);

  console.log(groups);

  return (
    <GroupMainContainer>
      {groups.length === 0 ? (
        <NoGroupsContainer>
          <NoGroupWrap>
            <NoGroupTitles>아직 생성된 방이 없어요</NoGroupTitles>
            <NoGroupContent>지금 바로 방을 만들어보세요</NoGroupContent>
          </NoGroupWrap>
        </NoGroupsContainer>
      ) : (
        <GroupsContainer>
          <UserTitle>{userName} 님의 모임</UserTitle>
          {groups.map((group: any) => (
            <GroupItem key={group?.houseId} href={`/room/${group?.houseId}`}>
              <DateWrap>{formatDate(group?.date)}</DateWrap>
              <RoomName>{group.name}</RoomName>
              <img src={rightArrow.src} alt="rightArrow" />
            </GroupItem>
          ))}
        </GroupsContainer>
      )}
    </GroupMainContainer>
  );
};

export default Groups;

const GroupMainContainer = styled.div``;

const GroupsContainer = styled.div`
  min-height: 308px;
  box-sizing: border-box;
  border-radius: 12px;
  background-color: white;
  margin: 0 16px;
  padding-bottom: 90px;
`;

const NoGroupsContainer = styled.div`
  min-height: 8px;
  box-sizing: border-box;
  border-radius: 12px;
  background-color: white;
  margin: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoGroupWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

const NoGroupTitles = styled.div`
  color: var(--GreyScale-Grey-500, #9e9e9e);
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
`;

const NoGroupContent = styled.div`
  color: var(--GreyScale-Grey-500, #9e9e9e);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
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
