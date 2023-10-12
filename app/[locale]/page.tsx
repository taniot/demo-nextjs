import GravityForm from '@/components/GravityForm/GravityForm';
import PageTest from '@/components/PageTest/PageTest';
import client from '@/lib/client';
import querySettings, { type allSettings } from '@/lib/queries/allSetting';
import getPageByID, { type PageByID } from '@/lib/queries/getPageByID';

export default async function Home() {
  const result: allSettings = await client.request(querySettings);
  const propsQuery = {
    id: result.allSettings.readingSettingsPageOnFront,
  };
  const pageResult: PageByID = await client.request(getPageByID, propsQuery);

  return (
    <div>
      <div>
        <h2>{pageResult.page.title}</h2>
        <p>{pageResult.page.campiPagine.campoDiProva}</p>
        <div dangerouslySetInnerHTML={{ __html: pageResult.page.content }} />
      </div>
    </div>
  );
}
