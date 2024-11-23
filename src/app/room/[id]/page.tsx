import RoomMainContent from '@/components/room/RoomMainContent';

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
