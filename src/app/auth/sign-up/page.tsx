'use client';
import Image from 'next/image';
import styled from 'styled-components';

import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '@/constants/schema';
import { useForm } from 'react-hook-form';
import tmpImage from '../../../assets/image.png';
// 회원가입
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    console.log('폼 데이터 제출');
  };

  return (
    <Container>
      <TopDiv>
        <Image alt="" src={tmpImage.src} width={200} height={200} style={{ borderRadius: '50%' }} />
      </TopDiv>
      <SvgWrapper>
        <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 315 287" fill="none">
          <path
            d="M-50 30.0187C-50 30.0187 75.4004 0 156.5 0C237.6 0 363 30.0187 363 30.0187V292H-50V30.0187Z"
            fill="white"
          />
        </StyledSvg>
        <OverlayDiv>
          <div >
            <p>닉네임을 입력해주세요</p>
            <input placeholder="닉네임" />
            <AlertPTag>사용가능한 닉네임입니다.</AlertPTag>
          </div>
          <StartButton>지금 시작할게요</StartButton>
          <CreateAccountButton>계정 생성하기 &gt; </CreateAccountButton>
        </OverlayDiv>
      </SvgWrapper>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const Button = styled.button``;

const TopDiv = styled.div`
  background-color: #222F40;
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SvgWrapper = styled.div`
  position: relative;
  top: -30px;
  width: 100%;
  flex: 1;
`;

const StyledSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const OverlayDiv = styled.div`
  box-sizing: border-box;
  padding: 0 20px 0 20px;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  p {
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  input {
    box-sizing: border-box;
    width: 100%;
    border-radius: 10px;
    padding: 5px 10px;
    height: 40px;
    border: 1px solid gray;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

const AlertPTag = styled.p`
  color: #d9621f;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
  letter-spacing: 0.1px;
`;

const StartButton = styled.button`
  display: flex;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 100px;
  background-color: #222f40;
  color: white;
  text-align: center;
  font-family: Pretendard;
  font-size: var(--Title-Medium-Size, 16px);
  font-style: normal;
  font-weight: 700;
  line-height: var(--Label-Large-Line-Height, 20px); /* 125% */
  letter-spacing: var(--Label-Large-Tracking, 0.1px);
`;

const CreateAccountButton = styled.button`
  color: var(--GreyScale-Grey-800, #424242);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.1px;
  border : 0;
  background-color: white;
`;
