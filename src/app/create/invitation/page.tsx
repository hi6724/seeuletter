import { Metadata } from 'next';
import React from 'react';
import GridInvitation from '@/components/create/invitation/GridInvitation';
import TextArea from '@/components/create/invitation/TextArea';

function CreateInvitationPage() {
  return (
    <div style={{ padding: '0 16px' }}>
      <h1 style={{ fontSize: '19px', fontWeight: 'bold', lineHeight: '140%', marginBottom: '24px' }}>
        초대장을 작성해주세요
      </h1>
      {/* 그리드 */}
      <GridInvitation />
      <TextArea />
    </div>
  );
}

export default CreateInvitationPage;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `초대장 작성`,
    description: `초대장을 작성해주세요`,
    openGraph: {
      title: `초대장 작성`,
      description: `초대장을 작성해주세요`,
      type: 'article',
      images: [
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/hunmok-fe31e.appspot.com/o/preview%2Fdefault-preview.webp?alt=media&token=20632868-8263-4a80-a8dc-03f60d37942a',
          width: 1700,
          height: 1000,
        },
      ],
    },
  };
}
