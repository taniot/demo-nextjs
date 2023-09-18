import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import React from 'react';

const Template = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};
export default Template;
