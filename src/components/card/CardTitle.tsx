'use client';

import styled from 'styled-components';

function CardTitle({ indexState, letterList }: any) {
  const [index, setIndex] = indexState;
  const currentLetter = letterList[index];

  return (
    <Container>
      <button onClick={() => setIndex(index - 1)}>-</button>
      <div>
        <h1>To.{currentLetter?.username}</h1>
        <div>{`(${index + 1}/${letterList.length})`}</div>
      </div>
      <button onClick={() => setIndex(index + 1)}>+</button>
    </Container>
  );
}

export default CardTitle;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
