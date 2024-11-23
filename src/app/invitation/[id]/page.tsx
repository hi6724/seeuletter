import LetterInEnvolope from '@/components/letter-in-envolope/LetterInEnvolope';

async function fetchRoomData(id: string) {
  const baseURL = new URL(`https://dev.inyro.site/api/v1/houses/${id}`);
  const res = await fetch(baseURL);
  const data = await res.json();
  return data;
}

async function page({ params: { id } }: { params: { id: string } }) {
  const roomData = await fetchRoomData(id);
  console.log(roomData?.result);
  return (
    <div
      style={{
        background: '#222f40',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <LetterInEnvolope data={{ ...roomData, houseId: id }} />
    </div>
  );
}

export default page;
