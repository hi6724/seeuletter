'use client';

// import { Metadata } from 'next';
import React, { useEffect, useState } from 'react';
import GridInvitation from '@/components/create/invitation/GridInvitation';
import TextArea from '@/components/create/invitation/TextArea';
import Button from '@/components/common/Button';
import { useRouter } from 'next/navigation';
import Header from '@/components/common/Header';
import styled from 'styled-components';

function CreateInvitationPage() {
  const [isImageSelected, setIsImageSelected] = useState(true);
  const [textareaContent, setTextareaContent] = useState('');

  const router = useRouter();

  const handleClick = () => {
    router.push('/create/');
  };

  const handleImageSelect = (imageNumber: number) => {
    setIsImageSelected(true);
    localStorage.setItem('imageNumber', JSON.stringify(imageNumber)); // 이미지 번호 저장
  };

  useEffect(() => {
    const imageNumber = localStorage.setItem('imageNumber', 1);
  }, []);

  const handleTextArea = (content: string) => {
    setTextareaContent(content);
  };

  const isButtonDisabled = !isImageSelected || !textareaContent;

  const handleClickNext = async () => {
    const storedRoomData = localStorage.getItem('roomData');
    const roomData = storedRoomData ? JSON.parse(storedRoomData) : {};
    const imageNumber = parseInt(localStorage.getItem('imageNumber') || '0', 10); // 문자열을 숫자로 변환
    const content = localStorage.getItem('content') || '';

    const requestData = {
      ...roomData,
      imageNumber,
      content,
    };

    try {
      const response = await fetch('https://dev.inyro.site/api/v1/houses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
      if (response.ok) {
        const result = await response.json();
        const houseId = result.result.houseId;

        console.log('houseId:', houseId);
        if (result.result.houseId) {
          router.push(`/room/${houseId}`);
        }

        // router.push('/room');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Header headerTitle={'초대장 작성'} onClick={handleClick} />
      <InvitationWrap>
        <h1 style={{ fontSize: '19px', fontWeight: 'bold', lineHeight: '140%', marginBottom: '24px' }}>
          초대장을 작성해주세요
        </h1>
        <GridInvitation onImageSelect={handleImageSelect} />
        <TextArea onTextArea={handleTextArea} />
      </InvitationWrap>
      <Button buttonContent={'다음으로'} onClick={handleClickNext} disabled={isButtonDisabled} />
    </div>
  );
}

export default CreateInvitationPage;

const InvitationWrap = styled.div`
  padding: 16px 24px;
`;

// export async function generateMetadata(): Promise<Metadata> {
//   return {
//     title: `초대장 작성`,
//     description: `초대장을 작성해주세요`,
//     openGraph: {
//       title: `초대장 작성`,
//       description: `초대장을 작성해주세요`,
//       type: 'article',
//       images: [
//         {
//           url: 'https://firebasestorage.googleapis.com/v0/b/hunmok-fe31e.appspot.com/o/preview%2Fdefault-preview.webp?alt=media&token=20632868-8263-4a80-a8dc-03f60d37942a',
//           width: 1700,
//           height: 1000,
//         },
//       ],
//     },
//   };
// }
