'use client';
import Image from 'next/image';
import styled from 'styled-components';

import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '@/constants/schema';
import { useForm } from 'react-hook-form';

const SignIn = () => {
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
      <Image alt="" src="/images/image.png" width={180} height={180} />

      <div>
        <p>닉네임을 입력해주세요</p>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder={`닉네임을 입력해주세요!`} type={'nickname'} {...register('nickname')} />
            <button type="submit">중복확인</button>
            <p style={{ color: 'red' }}>{errors.nickname?.message}</p>
          </form>
        </div>
      </div>

      <div>
        <button>접속하기</button>
        <p>계정 생성하기</p>
      </div>
    </Container>
  );
};

export default SignIn;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
