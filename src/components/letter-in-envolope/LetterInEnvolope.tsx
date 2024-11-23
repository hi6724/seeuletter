'use client';
import { faker } from '@faker-js/faker';
import Image from 'next/image';
import styled from 'styled-components';
import letterType1 from '../../assets/letterType1.png'
function LetterInEnvolope() {

  return (
    <Container>
      <Header></Header>
      <Title>엘빈님이 모임에 초대했습니다.</Title>
      <LetterContainer>
        <Image src={letterType1.src} fill alt="theme 1" />
        <FloatDiv>
          <TextDiv>
            <h3>방아름 초대장</h3>
            <h3>날짜 : </h3>
            <h3>장소</h3>
            <div style={{ height : '0.5px', border: '1px solid black'}}></div>
            <div style={{ height : '40%', overflow: 'scroll'}}>
                <p>작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용작성내용</p>
            </div>
          </TextDiv>
        </FloatDiv>
      </LetterContainer>
      <Button>참여하기</Button>
    </Container>
  );
}

export default LetterInEnvolope;

const Container = styled.div`
  background-color: #222f40;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 100%;
  padding: 0 20px;
`;

const Title = styled.p`
  color: white;
`;

const FloatDiv = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextDiv = styled.div`
    width: 70%;
    height: 80%;
    display : flex;
    flex-direction : column;
    gap: 15px;
`
const LetterContainer = styled.div`
  position: relative;
  width: 90%;
  height: 400px;
`;
const Button = styled.button`
  height: 52px;
  border-radius: 30px;
  width: 100%;
  color: var(--Main-Main-900, #222f40);
  text-align: center;
  font-family: Pretendard;
  font-size: var(--Title-Medium-Size, 16px);
  font-style: normal;
  font-weight: 700;
  line-height: var(--Label-Large-Line-Height, 20px); /* 125% */
  letter-spacing: var(--Label-Large-Tracking, 0.1px);
`;
