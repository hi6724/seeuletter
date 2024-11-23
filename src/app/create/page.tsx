<<<<<<< HEAD
import React from 'react';

function CreatePage() {
  return <div>CreatePage</div>;
}

export default CreatePage;
=======
'use client';

import React from 'react';
import CalendarWrap from '../../components/create/CalendarWrap';
import styled from 'styled-components';
import Header from '@/components/common/Header';
import Button from '@/components/common/Button';
const CreateRoom = () => {
  return (
    <CreateRoomContainer>
      <Header headerTitle="방 만들기" />
      <InputContainer>
        <InputItemWrapper>
          <InputTitle>모임 이름</InputTitle>
          <InputStyle type="text" placeholder="8자 이내로 작성해주세요" />
        </InputItemWrapper>
        <InputItemWrapper>
          <InputTitle>장소</InputTitle>
          <InputStyle type="text" placeholder="8자 이내로 작성해주세요" />
        </InputItemWrapper>
      </InputContainer>
      <CalendarContainer>
        <InputTitle>날짜</InputTitle>
        <CalendarWrap />
      </CalendarContainer>
      <Button buttonContent={'다음으로'} />
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
>>>>>>> 9c5e32b (feat: common 컴포넌트 생성)
