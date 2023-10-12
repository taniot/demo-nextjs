'use client';
import { useContext, useRef } from 'react';
import { AppContext } from '@/app/[locale]/app-provider';
import { useTranslations } from 'next-intl';

const PageTest = () => {
  const { state, methods } = useContext(AppContext);
  const { counter, theme } = state;
  const { setCounter } = methods;
  const t = useTranslations('Index');
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div>
      <p>Il contatore è: {counter}</p>
      <p>Il tema è {theme}</p>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        Prova Context
      </button>

      <div>Testo in Lingua: {t('title')}</div>
    </div>
  );
};

export default PageTest;
