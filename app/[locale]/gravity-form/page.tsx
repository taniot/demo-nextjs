import { getGravityForm } from 'next-gravity-forms/server';
import GravityForm from '@/components/GravityForm/GravityForm';

export const metadata: Metadata = {
  title: 'Pagina di prova',
  description: 'Generated by create next app',
};

const ProvaPage = async () => {
  const form = await getGravityForm(1);
  console.log({ form });

  return <GravityForm form={form} />;
};

export default ProvaPage;
