'use client';

import LetterBack from '@/assets/LetterBack';
import LetterFront from '@/assets/LetterFront';
import { motion } from 'framer-motion';
import styled from 'styled-components';

function Letter({ indexState, letterList, popupState }: any) {
  const [index] = indexState;
  const currentData = letterList[index];
  const currentLetters = currentData?.letters;
  const setShowPopup = popupState[1];

  return (
    <motion.div
      key={index} // key가 변경될 때마다 애니메이션 트리거
      initial={{ opacity: 0, y: 50 }} // 초기 상태: 아래에서 등장
      animate={{ opacity: 1, y: 0 }} // 애니메이션 중 상태
      exit={{ opacity: 0, y: -50 }} // 종료 상태: 위로 사라짐
      transition={{ duration: 0.5 }} // 애니메이션 지속 시간
      style={{ position: 'relative', display: 'flex', width: '100%', justifyContent: 'center' }}
    >
      <LetterContainer>
        <StyledTitle>{currentData?.guest}님에게 편지를 작성해주세요!</StyledTitle>
        {currentLetters?.map((letter: any, idx: number) => (
          <StyledLetter key={idx} onClick={() => setShowPopup(letter)}>
            <FlexBox>
              <h3>{letter?.writer}</h3>
              <p>{letter?.content}</p>
            </FlexBox>
            <Divider></Divider>
          </StyledLetter>
        ))}
        {currentLetters?.length === 0 && (
          <StyledLetter>
            <FlexBox>
              <h4>작성된 편지가 없습니다 🥲🥲</h4>
            </FlexBox>
            <Divider></Divider>
          </StyledLetter>
        )}
      </LetterContainer>

      {/* svg */}

      <StyledLetterFront>
        <LetterFront />
      </StyledLetterFront>
      <StyledLetterBack>
        <LetterBack />
      </StyledLetterBack>
    </motion.div>
  );
}

export default Letter;

const StyledLetterFront = styled.div`
  position: absolute;
  width: 100%;
  bottom: -70px;
  z-index: 3;
  svg {
    width: 100%;
    height: 100%;
  }
`;
const StyledLetterBack = styled.div`
  position: absolute;
  width: 100%;
  bottom: -70px;
  z-index: 1;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const FlexBox = styled.div`
  display: flex;
  gap: 10px;
  height: 26px;
  align-items: center;
`;
const StyledTitle = styled.h2`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 16px;
`;
const Divider = styled.div`
  margin: 8px 0;
  width: 100%;
  height: 1px;
  background-color: #eee;
`;

const StyledLetter = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  cursor: pointer;
  h3 {
    font-weight: 600;
    width: 54px;
    margin-right: 8px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  p {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const LetterContainer = styled.div`
  padding: 16px 16px 70px 16px;
  border-radius: 12px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  position: relative;
  width: calc(100% - 64px);
  z-index: 2;
  min-height: 300px;
`;
