'use client';

import { useState } from 'react';
import CardTitle from './CardTitle';

function CardContent({ letterList }: any) {
  const [index, setIndex] = useState(0);
  const currentLetter = letterList[index];
  return (
    <div>
      <CardTitle indexState={[index, setIndex]} letterList={letterList} />
      <button onClick={() => setIndex(index - 1)}>-</button>
      <button onClick={() => setIndex(index + 1)}>+</button>
      <h1>{currentLetter?.username}</h1>
      <h2>{currentLetter?.username}님에게 편지를 작성해주세요!</h2>
      <div></div>
      <button>편지쓰기</button>
    </div>
  );
}

export default CardContent;
