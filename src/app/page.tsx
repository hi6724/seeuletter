'use client';
import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      <Hello>HELLOASKDJ</Hello>
      HELLO WORLD!!!
    </Container>
  );
}

const Hello = styled.div`
  display: flex;
`;
const Container = styled.div`
  height: 100vh;
`;
