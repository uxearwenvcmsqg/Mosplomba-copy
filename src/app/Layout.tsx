import React, { ReactNode } from 'react';
import { Header } from '../widgets/layout/header/index';
// import { Footer } from '../widgets/layout/footer/index';

interface PropsChildren {
  children: ReactNode;
}

const Layout: React.FC<PropsChildren> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
};

export default Layout;
