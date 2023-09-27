import PageTest from '@/components/PageTest/PageTest';
import client from '@/lib/client';
import querySettings from '@/lib/queries/allSetting';
import getPageByID from '@/lib/queries/getPageByID';
import { gql } from 'graphql-request';

export default async function Home() {
  const queryAllSettings = gql`
    ${querySettings}
  `;

  const result = await client.request(queryAllSettings);

  const queryID = gql`
    ${getPageByID}
  `;

  const propsQuery = {
    id: result.allSettings.readingSettingsPageOnFront,
  };

  const pageResult = await client.request(queryID, propsQuery);

  console.log(pageResult);

  return (
    <div>
      <div>
        <h2>{pageResult.page.title}</h2>
        {/* <p>{result.allSettings.readingSettingsPageOnFront}</p> */}
        <p>{pageResult.page.campiPagine.campoDiProva}</p>
        <div dangerouslySetInnerHTML={{ __html: pageResult.page.content }} />
      </div>
      <PageTest />
    </div>
  );
}
