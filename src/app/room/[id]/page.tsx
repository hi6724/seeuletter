import RoomMainContent from '@/components/room/RoomMainContent';
import { Metadata } from 'next';

async function fetchRoomData(id: string) {
  const baseURL = new URL(`https://dev.inyro.site/api/v1/houses/${id}`);
  const res = await fetch(baseURL);
  const data = await res.json();
  return data;
}

async function RoomPage({ params: { id } }: { params: { id: string } }) {
  const roomData = await fetchRoomData(id);
  return (
    <div>
      <RoomMainContent roomData={roomData} />
    </div>
  );
}

export default RoomPage;

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = params;
  const blogData = await fetchRoomData(id);
  const title = blogData?.block?.[id]?.value?.properties?.title?.[0]?.[0] ?? '누구누구의 룸';
  const description = blogData?.block?.[id]?.value?.properties?.['nQ^=']?.[0]?.[0];
  const thumbnail = blogData?.block?.[id]?.value?.format?.page_cover;

  return {
    title: `${title} | 룸`,
    description: description || `${title} | 룸`,
    openGraph: {
      title: `${title} | 룸`,
      description: description || `${title} | 룸`,
      url: `https://hunmogu.com/blog/${id}`,
      type: 'article',
      images: [
        {
          url:
            thumbnail ||
            'https://firebasestorage.googleapis.com/v0/b/hunmok-fe31e.appspot.com/o/preview%2Fdefault-preview.webp?alt=media&token=20632868-8263-4a80-a8dc-03f60d37942a',
          width: 1700,
          height: 1000,
          alt: title,
        },
      ],
    },
  };
}
