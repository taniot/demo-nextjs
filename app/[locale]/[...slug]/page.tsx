import LayoutHandler from '@/components/LayoutHandler/LayoutHandler';
import { getNodeByURI } from '@/lib/queries/nodeByURI';
import { Slug } from '@/lib/types';
import { createURI } from '@/lib/utils';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params, searchParams }, parent) {
  const page = await getNodeByURI(createURI(params.slug));

  return {
    title: page?.title,
  };
}

const PageSlug = async (props) => {
  console.log(props);
  const entry = await getNodeByURI(createURI(props.params.slug));

  if (!entry) notFound();

  return <LayoutHandler entry={entry} />;
};

export default PageSlug;
