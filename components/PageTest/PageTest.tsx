'use client';
import { useContext } from 'react';
import { AppContext } from '@/app/app-provider';

const PageTest = () => {
  const { state, methods } = useContext(AppContext);
  const { counter, theme } = state;
  const { setCounter } = methods;
  return (
    <div>
      <p>Il contatore è: {counter}</p>
      <p>Il tema è {theme}</p>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        Prova Context
      </button>
    </div>
  );
};

export default PageTest;
