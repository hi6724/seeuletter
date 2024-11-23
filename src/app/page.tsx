'use client';
import Link from 'next/link';
import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      <Hello>HELLOASKDJ</Hello>
      <Link href={'/room/123'}>ROOMS</Link>
    </Container>
  );
}

const Hello = styled.div`
  display: flex;
`;
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
