import PageTest from '@/components/PageTest/PageTest';
import client from '@/lib/client';
import querySettings from '@/lib/queries/allSetting';
import { gql } from 'graphql-request';

export default async function Home() {
  const query = gql`
    ${querySettings}
  `;

  const result = await client.request(query);

  return (
    <div>
      <div>
        <h2>Risultato query</h2>
        <p>{result.allSettings.readingSettingsPageOnFront}</p>
      </div>
      <PageTest />
    </div>
  );
}
