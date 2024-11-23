import { Metadata } from 'next';
import Link from 'next/link';

const DUMMY_DATA = {
  title: 'DUMMY TITLE',
  total_date: 10,
};

async function fetchRoomData(id: string) {
  const isDev = process.env.NODE_ENV === 'development';
  if (isDev) return DUMMY_DATA;

  const baseURL = new URL('/api/room');
  baseURL.searchParams.append('id', id);
  const res = await fetch(baseURL);
  const data = await res.json();
  return data;
}

async function RoomPage({ params: { id } }: { params: { id: string } }) {
  const roomData = await fetchRoomData(id);
  return (
    <div>
      RoomPage <span>{id}</span>
      <h1>{roomData?.title ?? 'No Title Error'}</h1>
      <div>
        {Array.from({ length: 5 }).map((el: any, i: number) => (
          <Link href={`/card/${id}`} key={i}>
            <div>
              {el}
              {'하이하이'}
            </div>
          </Link>
        ))}
      </div>
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
