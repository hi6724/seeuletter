'use client';

import { useState } from 'react';
import CardTitle from './CardTitle';
import Letter from './Letter';

function CardContent({ letterList }: any) {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <CardTitle indexState={[index, setIndex]} letterList={letterList} />
      <Letter indexState={[index, setIndex]} letterList={letterList} />
    </div>
  );
}

export default CardContent;
