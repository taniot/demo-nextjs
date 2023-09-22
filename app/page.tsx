import PageTest from '@/components/PageTest/PageTest';
import client from '@/lib/client';
import querySettings from '@/lib/queries/allSetting';

export default async function Home() {
  const result = await client(querySettings);
  console.log(result);
  return (
    <div>
      <div>risultato query</div>
      <PageTest />
    </div>
  );
}
