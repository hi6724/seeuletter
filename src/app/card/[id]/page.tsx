import CardContent from '@/components/card/CardContent';

async function fetchChatData(id: string) {
  const baseURL = new URL(`https://dev.inyro.site/api/v1/letters/${id}`);
  const res = await fetch(baseURL);
  const data = await res.json();
  return data;
}

async function CardPage({ params: { id } }: { params: { id: string } }) {
  const chatListData = await fetchChatData(id);
  return (
    <div style={{ padding: '0 16px 150px 16px', overflow: 'hidden', minHeight: '100vh' }}>
      <CardContent letterList={chatListData?.result} />
    </div>
  );
}

export default CardPage;
