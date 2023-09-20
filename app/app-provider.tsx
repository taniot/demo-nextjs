'use client';

import React, { createContext, useState } from 'react';

export const AppContext = createContext({});

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [counter, setCounter] = useState(5);
  const [theme, setTheme] = useState('light');

  const provider = {
    state: {
      counter,
      theme,
    },
    methods: {
      setCounter,
      setTheme,
    },
    pippo: {},
  };

  return (
    <AppContext.Provider value={provider}>
      <div className={`theme-${theme} h-full`}>{children}</div>
    </AppContext.Provider>
  );
}
