'use client';
import styled from 'styled-components';
import inviteImage1 from '../../../assets/invite1.svg';
import inviteImage2 from '../../../assets/invite2.svg';
import inviteImage3 from '../../../assets/invite3.svg';
import { useState } from 'react';

interface GridInvitationProps {
  onImageSelect: (imageNumber: number) => void;
}

function GridInvitation({ onImageSelect }: GridInvitationProps) {
  const [selectedImageId, setSelectedImageId] = useState(1);
  const images = [
    { id: 1, src: inviteImage1.src, alt: 'Invite Image 1' },
    { id: 2, src: inviteImage2.src, alt: 'Invite Image 2' },
    { id: 3, src: inviteImage3.src, alt: 'Invite Image 3' },
  ];

  const handleImageClick = (imageNumber: number) => {
    setSelectedImageId(imageNumber);
    onImageSelect(imageNumber);
  };

  return (
    <Container>
      {images.map((image) => (
        <ImageWrapper
          key={image.id}
          onClick={() => handleImageClick(image.id)}
          selectedImageId={selectedImageId === image.id}
        >
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

const ImageWrapper = styled.div<{ selectedImageId: boolean }>`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  border: 5px solid ${({ selectedImageId }) => (selectedImageId ? '#222F40' : 'transparent')};
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
