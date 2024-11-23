'use client';
import Image from 'next/image';
import styled from 'styled-components';

import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '@/constants/schema';
import { useForm } from 'react-hook-form';
import signMainImage from '../../../assets/signMainImage.png';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// 회원가입
const SignUp = () => {
  const router = useRouter();

  const [isExist, setIsExist] = useState<any>();
  const [touched, setTouched] = useState<any>();

  const handleToSign = () => {
    router.push('/auth/sign-up-main');
  };

  const handleToMain = () => {
    router.push('/main');
  };

  // 로그인 하면 그냥 접속?
  // 회원 가입시 중복 조회
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    await fetch('https://dev.inyro.site/api/v1/admins/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data.nickname,
    })
      .then((response) => response.json())
<<<<<<< HEAD
      .then((datadata) => {
        console.log(datadata);
        if (datadata?.isSuccess) {
          localStorage.setItem('uuid', data.nickname);
=======
      .then(async (datadata) => {
        if (datadata?.isSuccess) {
          const invitationId = localStorage.getItem('invitationId');
          localStorage.setItem('uuid', data.nickname);
          if (invitationId) {
            await fetch(`https://dev.inyro.site/api/v1/guests/join`, {
              headers: {
                'Content-Type': 'application/json',
              },
              method: 'POST',
              body: JSON.stringify({
                houseId: invitationId,
                guestName: data.nickname,
              }),
            });
            localStorage.removeItem('invitationId');
            router.push(`/room/${invitationId}`);
            return;
          }
>>>>>>> afe1bb67f845673ea2c86f2ea274bc79d64b9057
          handleToMain();
        } else {
          setTouched(true);
          setIsExist(false);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Image alt="" src={signMainImage.src} width={320} height={350} style={{ width: '100%' }} />
        <OverlayDiv>
          <div>
            <p>닉네임을 입력해주세요</p>
            <input placeholder={`닉네임을 입력해주세요!`} type={'nickname'} {...register('nickname')} />
            {touched && <>{isExist ? <></> : <AlertPTag>닉네임이 존재하지 않습니다.</AlertPTag>}</>}
          </div>
          <StartButton type="submit">지금 시작할게요</StartButton>
          <CreateAccountButton onClick={handleToSign}>계정 생성하기 &gt; </CreateAccountButton>
        </OverlayDiv>
      </Container>
    </form>
  );
};

export default SignUp;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const OverlayDiv = styled.div`
  box-sizing: border-box;
  padding: 0 20px 0 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
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
  border: 0;
  background-color: white;
`;
