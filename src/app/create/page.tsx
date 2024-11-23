'use client';

import React, { useEffect, useState } from 'react';
import CalendarWrap from '../../components/create/CalendarWrap';
import styled from 'styled-components';
import Header from '@/components/common/Header';
import Button from '@/components/common/Button';
import { useRouter } from 'next/navigation';

const CreateRoom = () => {
  const [userName, setUserName] = useState('');
  const [groupName, setGroupName] = useState('');
  const [locationName, setLocationName] = useState('');
  const [selectedDate, setSelectedDate] = useState(''); // 선택한 날짜 상태 추가
  const router = useRouter();

  const handleClickPrev = () => {
    router.push('/main');
  };

  const isButtonDisabled = !groupName || !locationName || !selectedDate;

  useEffect(() => {
    const userUuid = localStorage.getItem('uuid');
    if (userUuid) {
      setUserName(userUuid);
      console.log('uuid: ', userUuid);
    } else {
      console.warn('uuid가 로컬 스토리지에 존재하지 않습니다.');
    }
  }, []);

  const handleClickNext = () => {
    const roomData = {
      groupName: groupName,
      location: locationName,
      date: selectedDate,
      ownerName: userName,
    };

    localStorage.setItem('roomData', JSON.stringify(roomData));
    router.push('/create/invitation');
  };

  const handleDataChange = (data: string) => {
    setSelectedDate(data);
    console.log('selectData', selectedDate);
  };

  return (
    <CreateRoomContainer>
      <Header headerTitle="방 만들기" onClick={handleClickPrev} />
      <InputContainer>
        <InputItemWrapper>
          <InputTitle>모임 이름</InputTitle>
          <InputStyle
            onChange={(e) => setGroupName(e.target.value)}
            type="text"
            placeholder="8자 이내로 작성해주세요"
          />
        </InputItemWrapper>
        <InputItemWrapper>
          <InputTitle>장소</InputTitle>
          <InputStyle
            onChange={(e) => setLocationName(e.target.value)}
            type="text"
            placeholder="8자 이내로 작성해주세요"
          />
        </InputItemWrapper>
      </InputContainer>
      <CalendarContainer>
        <InputTitle>날짜</InputTitle>
        <CalendarWrap onDateChange={handleDataChange} />
      </CalendarContainer>
      <Button buttonContent={'다음으로'} onClick={handleClickNext} disabled={isButtonDisabled} />
    </CreateRoomContainer>
  );
};

export default CreateRoom;

const CreateRoomContainer = styled.div``;

const InputTitle = styled.div`
  color: var(--GreyScale-Grey-800, #424242);
  /* Text/Regular-lg */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 20px;
  margin-bottom: 24px;
`;

const InputItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const InputStyle = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  padding: 10px 16px;
  outline: none;

  input::placeholder {
    color: var(--GreyScale-Grey-400, #bdbdbd);
    font-size: 14px;
    font-weight: 400;
  }
`;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  margin: 0 16px;
`;
