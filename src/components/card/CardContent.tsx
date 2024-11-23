'use client';

function CardContent({ data }: any) {
  return (
    <div>
      <h1>{data?.username}</h1>
      <h2>{data?.username}님에게 편지를 작성해주세요!</h2>
      <div>
        {data?.letters?.map((el: any, i: number) => (
          <div key={i}>
            <h3>{el.username}</h3>
            <p>{el.content}</p>
          </div>
        ))}
      </div>
      <button>편지쓰기</button>
    </div>
  );
}

export default CardContent;
