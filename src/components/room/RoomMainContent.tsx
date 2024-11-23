'use client';

import bg from '@/assets/houseBg.png';
import styled from 'styled-components';
import openedImg from '@/assets/rooms/opened.png';
import d1Img from '@/assets/rooms/d-1.png';
import d2Img from '@/assets/rooms/d-2.png';
import d3Img from '@/assets/rooms/d-3.png';
import d4Img from '@/assets/rooms/d-4.png';
import d5Img from '@/assets/rooms/d-5.png';
import { usePathname, useRouter } from 'next/navigation';

const IMG_LIST = [openedImg, d1Img, d2Img, d3Img, d4Img, d5Img];

function RoomMainContent({ roomData }: any) {
  const pathname = usePathname();

  const router = useRouter();
  const handleClick = (data: { openDate: number; roomId: string }) => {
    if (data.openDate === 0) {
      router.push(`${pathname}/chat/${data.roomId}`);
    } else alert('아직 열 수 없습니다');
  };
  console.log(roomData);
  return (
    <>
      <Header roomData={roomData} />
      <MainContent>
        <Row>
          {roomData?.result?.roomInfoList?.slice(0, 3).map((el: any, i: number) => (
            <Window onClick={() => handleClick(el)} key={i}>
              <img src={IMG_LIST[el.openDate].src} alt="" />
            </Window>
          ))}
        </Row>
        <Row>
          {roomData?.result?.roomInfoList?.slice(3).map((el: any, i: number) => (
            <Window key={i} onClick={() => handleClick(el)}>
              <img src={IMG_LIST[el.openDate].src} alt="" />
            </Window>
          ))}
        </Row>
      </MainContent>
      <Background src={bg.src} alt="" />
      <Clipboard>
        <div>여기 주소</div>
        <button>복사</button>
      </Clipboard>
    </>
  );
}

export default RoomMainContent;
const Clipboard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const Window = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  img {
    width: 30vw;
  }
`;

const MainContent = styled.div`
  padding-top: 75vw;
  position: fixed;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

const Background = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100vw;
`;

function formatDate(dateString: string) {
  // 문자열을 Date 객체로 변환
  const date = new Date(dateString);
  const now = new Date();

  // 월(month)과 날짜(day)
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // 년도 비교
  const year = date.getFullYear();
  const currentYear = now.getFullYear();

  // 년도가 다르면 년도 포함
  return year !== currentYear ? `${year}년 ${month}월${day}일` : `${month}월${day}일`;
}

function Header({ roomData }: any) {
  return (
    <HeaderContainer>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2>{roomData?.result?.name ?? '방이름이 없습니다'}</h2>
        <p>{formatDate(roomData?.result?.date)}</p>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  position: fixed;
  top: 10vw;
  z-index: 9;
  color: white;
  display: flex;
  justify-content: center;

  width: 100%;
  h2 {
    line-height: 140%;
    font-size: 20px;
  }
  p {
    font-size: 14px;
  }
`;
