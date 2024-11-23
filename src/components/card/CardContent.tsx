'use client';

import { useState } from 'react';
import CardTitle from './CardTitle';
import Letter from './Letter';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { usePathname } from 'next/navigation';

function CardContent({ letterList }: any) {
  const [index, setIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <div>
        <CardTitle indexState={[index, setIndex]} letterList={letterList} />
        <Letter popupState={[showPopup, setShowPopup]} indexState={[index, setIndex]} letterList={letterList} />
        <PopupBtn
          style={{
            zIndex: 9,
            border: 'none',
            position: 'fixed',
            bottom: 8,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'calc(100% - 32px)',
          }}
          onClick={() => setShowPopup(true)}
        >
          편지쓰기
        </PopupBtn>
      </div>
      {showPopup && <Popup letterList={letterList} index={index} popupState={[showPopup, setShowPopup]} />}
    </>
  );
}

export default CardContent;

function Popup({ popupState, letterList, index }: any) {
  const pathname = usePathname();
  const [popupData, setShowPopup] = popupState;
  const currentLetter = letterList[index];
  const isNewLetter = popupData === true;
  const { register, getValues } = useForm();

  const username = typeof window !== 'undefined' ? (localStorage.getItem('uuid') as string) : '';

  const handleSubmit = async () => {
    const content = getValues('content');
    const houseId = pathname.split('/')[2];
    if (!content) {
      alert('내용을 입력해주세요');
      return;
    }

    fetch('https://dev.inyro.site/api/v1/letters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        receiver: currentLetter?.guest,
        writer: username,
        houseId,
        content,
      }),
    });
    window.location.reload();
  };

  return (
    <>
      <PopupContainer>
        <PopupHeader>
          <h2>TO. {currentLetter?.guest}</h2>
          <button onClick={() => setShowPopup(false)}>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18 6.06567L6 18.0657"
                stroke="#333D4B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6.06567L18 18.0657"
                stroke="#333D4B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </PopupHeader>
        {isNewLetter && <StyledTextArea placeholder="내용을 입력해주세요" {...register('content')} />}
        {!isNewLetter && <StyledContentDiv>{popupData?.content}</StyledContentDiv>}
        <PopupFooter>From. {isNewLetter ? username : popupData?.username}</PopupFooter>
        {isNewLetter && <PopupBtn onClick={handleSubmit}>전송하기</PopupBtn>}
      </PopupContainer>
      <Background />
    </>
  );
}

const PopupFooter = styled.h2`
  margin-top: 16px;
  font-size: 19px;
  font-weight: bold;
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
  h2 {
    font-size: 19px;
    font-weight: bold;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

const PopupContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
  padding: 16px;
  width: 90%;
  height: 80%;
  top: 10%;
  left: 5%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 12px;
  flex-direction: column;
`;

const StyledContentDiv = styled.div`
  margin-top: 8px;
  display: flex;
  height: 50%;
  min-width: 200px;
  padding: 16px 12px;
  width: calc(100% - 24px);

  border-radius: 8px;
  border: 1px solid #d9d9d9;
  background: #fff;
`;

const StyledTextArea = styled.textarea`
  margin-top: 8px;
  display: flex;
  height: 50%;
  min-width: 200px;
  padding: 16px 12px;
  width: calc(100% - 24px);

  border-radius: 8px;
  border: 1px solid #d9d9d9;
  background: #fff;
`;

const PopupBtn = styled.button`
  width: 100%;
  max-width: 450px;
  padding: 16px 0;
  margin-top: 16px;
  box-sizing: border-box;
  text-align: center;
  color: white;
  font-size: 14px;
  font-weight: 600;
  background: #43566e;
  border-radius: 9000px;
  cursor: pointer;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 9;
  display: flex;
`;
