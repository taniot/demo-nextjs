import PageTest from '@/components/PageTest/PageTest';
import client from '@/lib/client';
import querySettings from '@/lib/queries/allSetting';

export default async function Home() {
  const settings = await client(querySettings);

  return (
    <div>
      <div>
        <h2>Risultato query</h2>
        <p>{settings.data.allSettings.readingSettingsPageOnFront}</p>
      </div>
      <PageTest />
    </div>
  );
}
