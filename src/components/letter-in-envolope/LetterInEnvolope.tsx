'use client';
import { faker } from '@faker-js/faker';
import Image from 'next/image';
import styled from 'styled-components';
// import letterinEnvolope from '../../assets/'
function LetterInEnvolope() {

  return (
    <Container>
      <ImageWrapper>
        <Image src={faker.image.url({ height: 150, width: 300 })} alt="theme 1" fill />
      </ImageWrapper>
      <ImageWrapper>
        <Image src={faker.image.url({ height: 150, width: 300 })} alt="theme 2" fill />
      </ImageWrapper>
      <ImageWrapper>
        <Image src={faker.image.url({ height: 150, width: 300 })} alt="theme 3" fill />
      </ImageWrapper>
      <ImageWrapper>
        <Image src={faker.image.url({ height: 150, width: 300 })} alt="theme 4" fill />
      </ImageWrapper>
    </Container>
  );
}

export default LetterInEnvolope;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
  margin-bottom: 32px;
`;

const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 16 / 9; /* 16:9 비율 유지 */
  overflow: hidden;
  border-radius: 8px; /* 선택 사항 */
`;
