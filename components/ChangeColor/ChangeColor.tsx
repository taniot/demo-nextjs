'use client';
import { useContext } from 'react';
import { AppContext } from '@/app/[locale]/app-provider';

const ChangeColor = () => {
  const { methods } = useContext(AppContext);
  const { setTheme } = methods;

  return (
    <div>
      <button
        onClick={() =>
          setTheme((current) => (current === 'light' ? 'dark' : 'light'))
        }
      >
        Cambia colore
      </button>
    </div>
  );
};

export default ChangeColor;
