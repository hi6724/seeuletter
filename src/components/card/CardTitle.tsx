'use client';

import LeftArrow from '@/assets/LeftArrow';
import RightArrow from '@/assets/RightArrow';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function CardTitle({ indexState, letterList }: any) {
  const [index, setIndex] = indexState;
  const currentLetter = letterList[index];
  const handleClick = (type: 'prev' | 'next') => {
    if (type === 'prev') {
      const newIndex = index > 0 ? index - 1 : 0;
      setIndex(newIndex);
    } else {
      const newIndex = index >= letterList.length - 1 ? letterList.length - 1 : index + 1;
      setIndex(newIndex);
    }
  };
  return (
    <Container>
      <CircleButton onClick={() => handleClick('prev')}>
        <LeftArrow />
      </CircleButton>
      <motion.div
        key={index} // key 변경으로 애니메이션 트리거
        initial={{ opacity: 0, y: 10 }} // 초기 상태
        animate={{ opacity: 1, y: 0 }} // 애니메이션 상태
        transition={{ duration: 0.3 }} // 애니메이션 지속 시간
      >
        <StyledCardTitle>To.{currentLetter?.guest}</StyledCardTitle>
        <SecondaryText>{`(${index + 1}/${letterList.length})`}</SecondaryText>
      </motion.div>
      <CircleButton onClick={() => handleClick('next')}>
        <RightArrow />
      </CircleButton>
    </Container>
  );
}

export default CardTitle;

const Container = styled.div`
  margin-top: 13px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

const CircleButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

const StyledCardTitle = styled.h1`
  font-size: 19px;
  font-weight: bold;
  line-height: 140%;
`;

const SecondaryText = styled.div`
  font-size: 14px;
  color: #bdbdbd;
  text-align: center;
`;
