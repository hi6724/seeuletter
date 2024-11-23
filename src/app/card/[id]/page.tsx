import CardContent from '@/components/card/CardContent';
import React from 'react';

const DUMMY_DATA = [
  {
    id: 'aka123',
    username: '엘빈',
    letters: [
      {
        username: '엘빈',
        content: '안녕하세요 편지좀 써주세요 ㅠㅠ',
      },
    ],
  },
  {
    id: 'aka938',
    username: '김똘똘',
    letters: [],
  },
];

async function fetchChatData(id: string) {
  const isDev = process.env.NODE_ENV === 'development';
  if (isDev) return DUMMY_DATA;

  const baseURL = new URL('/api/room');
  baseURL.searchParams.append('id', id);
  const res = await fetch(baseURL);
  const data = await res.json();
  return data;
}

async function CardPage({ params: { id } }: { params: { id: string } }) {
  const chatListData = await fetchChatData(id);
  return (
    <div>
      {chatListData.map((el: any, i: number) => (
        <CardContent key={i} data={el} />
      ))}
    </div>
  );
}

export default CardPage;
