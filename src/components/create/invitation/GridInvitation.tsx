'use client';
import styled from 'styled-components';
import inviteImage1 from '../../../assets/inviteImage.png';

function GridInvitation() {
  const images = [
    { id: 1, src: inviteImage1.src, alt: 'Invite Image 1' },
    { id: 2, src: inviteImage1.src, alt: 'Invite Image 2' },
    { id: 3, src: inviteImage1.src, alt: 'Invite Image 3' },
  ];

  const handleImageClick = (imageId: number) => {
    localStorage.setItem('imageNumber', JSON.stringify(imageId));
    console.log(`Image ${imageId} selected`);
  };

  return (
    <Container>
      {images.map((image) => (
        <ImageWrapper key={image.id} onClick={() => handleImageClick(image.id)}>
          <StyledImage src={image.src} alt={image.alt} />
        </ImageWrapper>
      ))}
    </Container>
  );
}

export default GridInvitation;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3개의 열로 나눔 */
  gap: 10px;
  width: 100%;
  margin-bottom: 32px;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px; /* 선택 사항 */
`;

const StyledImage = styled.img`
  width: 100%; /* 너비를 컨테이너에 맞춤 */
  height: auto; /* 이미지 비율 유지 */
  object-fit: contain; /* 이미지 비율 유지하며 영역 내에 맞춤 */
`;
